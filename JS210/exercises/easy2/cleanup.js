const validCharacter = (chr) => (chr >= 'A' && chr <= 'Z') || (chr >= 'a' && chr <= 'z') || chr === "'";

function cleanUp(str) {
  return str.replace(/\W/g, ' ').replace(/\s+/g, ' ');
}

console.log(validCharacter('a'));

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "