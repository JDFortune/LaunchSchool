$(() => {
  let post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  };

  post.body = '<p>' + post.body + '</p>';
  post.tags = ['Food', 'Cooking', 'Vegetables'];

  let posts = [post];
  posts.push({
    title: 'Hello World',
    published: 'July 24, 2024',
    body: '<p>This is my body. Deal with it. My body, my choice! Choice body!</p>',
  });

  Handlebars.registerPartial('tag',  $('#tag').html());
  Handlebars.registerPartial('post', $('#post').html());
  
  let template = $('#postsList').html();
  
  let templateFunction  = Handlebars.compile(template);

  $('body').append(templateFunction({ posts }));

});