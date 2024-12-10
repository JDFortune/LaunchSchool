const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];


const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

function checkAnswers(data) {
  let responses = {};

  for (let id in data) {
    let message = {};
    if (data[id] === answerKey[id]) {
      message['message'] = 'Correct Answer';
      message['status'] = 'correct';
    } else {
      message['message'] = !data[id] ? "You didn't answer the question." : 'Wrong Answer.'
      message['message'] += `The correct answer is : "${answerKey[id]}".`
      message['status'] = 'incorrect';
    }
    responses[id] = message;
  }

  return responses;
}

function dataToJson(data) {
  let json = {};

  for (let pair of data.entries()) {
    json[pair[0]] = pair[1];
  }

  Object.keys(answerKey).forEach(id => json[id] = json[id]);

  return json;
}

function insertResponses(responses) {
  let questions = document.querySelectorAll('div.question');
  questions.forEach(div => {
    let responseObj = responses[div.dataset.id];
    let p = div.querySelector('p.result');
    p.classList.add(responseObj.status);
    p.textContent = responseObj.message;
  });
}

function makeTemplates() {
  let templates = {};
  document.querySelectorAll('[type$=handlebars]').forEach(script => {
    templates[script.id] = Handlebars.compile(script.innerHTML);

    if (script.dataset.id === 'partial') {
      Handlebars.registerPartial(script.id, script.innerHTML);
    }
  });

  return templates;
}


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const submit = document.querySelector('.submit');
  const reset = document.querySelector('.reset');
  
  const templates = makeTemplates();
  
  let questionsHTML = templates['questions_list_template']({questions});
  form.insertAdjacentHTML('afterbegin', questionsHTML);
  const divQuestions = document.querySelectorAll('div.question');


  submit.addEventListener('click', event => {
    event.preventDefault();

    let formData = new FormData(form);
    let answers = dataToJson(formData);

    let responses = checkAnswers(answers);
    insertResponses(responses);

    divQuestions.forEach(div => {
      div.querySelectorAll('input').forEach(input => {
        input.setAttribute('disabled', '');
        input.checked = false;
      });
    });
    
    submit.setAttribute('disabled', '');
    reset.removeAttribute('disabled');
  });

  reset.addEventListener('click', event => {
    event.preventDefault();

    divQuestions.forEach(div => {
      div.querySelectorAll('input').forEach(input => input.removeAttribute('disabled'));
      let p = div.querySelector('p[class~=result]')

      p.classList.remove('correct', 'incorrect');
      p.textContent = '';
    });

    reset.setAttribute('disabled', '');
    submit.removeAttribute('disabled');
  });
});