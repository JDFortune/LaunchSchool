document.addEventListener('DOMContentLoaded', () => {
  const templates = {};
  let photos;

  document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
    templates[tmpl.id] = Handlebars.compile(tmpl.innerHTML);
  });

  document.querySelectorAll('[data-type=partial]').forEach(tmpl => {
    Handlebars.registerPartial(tmpl.id, tmpl.innerHTML);
  });
  
  const slideshow =  {
    nextSlide: function(e) {
      e.preventDefault();
      let next = this.currentSlide.nextElementSibling;

      if(!next) {
        next = this.firstSlide;
      }

      this.fadeOut(this.currentSlide);
      this.fadeIn(next);
      this.renderPhotoContent(next.dataset.id);
      this.currentSlide = next;
    },

    prevSlide: function(e) {
      e.preventDefault();
      let prev = this.currentSlide.previousElementSibling;

      if (!prev) {
        prev = this.lastSlide;
      }

      this.fadeOut(this.currentSlide);
      this.fadeIn(prev);
      this.renderPhotoContent(prev.dataset.id);
      this.currentSlide = prev;
    },
    
    renderPhotoContent: function(id) {
      renderPhotoInformation(Number(id));
      getCommentsFor(id);
    },

    fadeOut: function(slide) {
      slide.classList.add('hide');
      slide.classList.remove('show');
    },

    fadeIn: function(slide) {
      slide.classList.add('show');
      slide.classList.remove('hide');
    },

    bind: function() {
      document.querySelector('a.prev').addEventListener('click', this.prevSlide.bind(this));
      document.querySelector('a.next').addEventListener('click', this.nextSlide.bind(this));
    },

    init: function() {
      this.slideshow = document.querySelector('#slideshow');
      let slides = this.slideshow.querySelectorAll('figure');
      this.firstSlide = slides[0];
      this.lastSlide = slides[slides.length - 1];
      this.currentSlide = this.firstSlide;
      this.bind();
    }
  }

  fetch('/photos')
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      getCommentsFor(photos[0].id);
      slideshow.init();
    })

  function renderPhotos() {
    let slides = document.getElementById('slides');
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos }));
  }

  function renderPhotoInformation(id) {
    let photo = photos.find(item => item.id === id);
    let header = document.querySelector('section > header');

    [...header.children].forEach(child => header.removeChild(child));
    header.insertAdjacentHTML('afterbegin', templates.photo_information(photo));

    document.querySelector('form input[type=hidden]').setAttribute('value', id);
  }

 document.querySelector('section > header').addEventListener('click', event =>{
   event.preventDefault();

   let button = event.target;
   let buttonType = button.getAttribute('data-property');
   if (buttonType) {
     let href = button.getAttribute('href');
     let dataId = button.getAttribute('data-id');
     let text = button.textContent;
     
     fetch(href, {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({photo_id: dataId})
    })
    .then(response => response.json())
    .then(json => {
      button.textContent = text.replace(/\d+/, json.total);
      fetch('/photos')
      .then(response => response.json())
      .then(json => {
        photos = json
      });
    });
  }
 });

  function getCommentsFor(id) {
    fetch(`/comments?photo_id=${id}`)
      .then(response => response.json())
      .then(comments => {
        let commentsList = document.querySelector('div#comments ul');
        commentsList.innerHTML = '';
        let commentHTML = templates.photo_comments({ comments });
        commentsList.insertAdjacentHTML('afterbegin', templates.photo_comments({ comments }))
      });
  }

  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    let form = event.target;
    let href = form.getAttribute('action');
    let method = form.getAttribute('method');
    let data = new FormData(form);
    let currentSlideId = slideshow.currentSlide.getAttribute('data-id');
    data.set('photo_id', currentSlideId);

    fetch(href, {
      method,
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      body: new URLSearchParams([...data]), 
    })
      .then(response => response.json())
      .then(json => {
        let commentsList = document.querySelector('#comments ul');
        commentsList.insertAdjacentHTML('beforeend', templates.photo_comment(json))
        form.reset();
      });
  });
});
