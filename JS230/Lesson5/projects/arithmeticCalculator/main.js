function operation(num1, num2, operator) {
  switch (operator) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
  }
}

$(() => {
  const $result = $('#result');

  $('form').on('submit', (event) => {
    event.preventDefault();

    console.log($('form').children().val());

    let val1 = Number($('#value1').val());
    let val2 = Number($('#value2').val());
    let operator = $('#operation').val();
    let result = operation(val1, val2, operator);

    result = result === parseInt(result) ? String(result) : result.toFixed(2);

    $result.text(result);

  });
});