function reverse(string) {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  console.log(newString);
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"