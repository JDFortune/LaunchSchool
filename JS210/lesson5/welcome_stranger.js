function greetings(name, status) {
  console.log(`Hello, ${name.join(' ')}! Nice to have a ${status.title} ${status.occupation} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });