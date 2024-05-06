const LINE_MAX = 76

function logInBox(string) {
  let centerWidth = string.length > LINE_MAX ? LINE_MAX : string.length;
  let vertBorder = '+-' + ('-').repeat(centerWidth) + '-+';
  let padding = '| ' + (' ').repeat(centerWidth) + ' |';
  let message = parseMessage(string);

  console.log(vertBorder);
  console.log(padding);
  message.forEach(line => console.log(`| ${line} |`));
  console.log(padding);
  console.log(vertBorder);
}

function parseMessage(string) {
  let message = [];

  let index = 0;
  do {
    message.push(string.slice(index, index + LINE_MAX));
    index += LINE_MAX
  } while (index < string.length);

  let lastLine = message[message.length -1];
  if (message.length > 1){
    if (lastLine.length < LINE_MAX) {
      message[message.length - 1] = lastLine.padEnd(LINE_MAX, ' ');
    }
  }

  return message;
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

logInBox('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');