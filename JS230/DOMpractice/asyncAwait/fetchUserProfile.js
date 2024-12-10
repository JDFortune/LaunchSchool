async function fetchUserProfile(id) {
  try {
    let profile = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    ).then(res => res.json());
    console.log('User Profile:', profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
  }

  try {
    let posts = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    ).then(res => res.json());
    console.log('User Posts:', posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  try {
    let todos = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/todos`
    ).then(res => res.json());
    console.log('User Todos:', todos);
  } catch (error) {
    console.error('Error fetching todos', error);
  }
}

// async function fetchUserProfile(id) {
//   [`https://jsonplaceholder.typicode.com/users/${id}`,
//     `https://jsonplaceholder.typicode.com/users/${id}/posts`,
//     `https://jsonplaceholder.typicode.com/users/${id}/todos`
//   ].forEach(url => {
//     try {
//       let response = await fetch(url);
//       let data = await response.json();
//       console.log(data);
//     } catch {
//       console.error('A mistake was made');
//     }
//   });
// }

fetchUserProfile(1);