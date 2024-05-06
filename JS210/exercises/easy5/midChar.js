function centerOf(string) {
  const len = string.length;
  const evenString = (len % 2 === 0);
  const mid = evenString ? (len / 2 - 1) : Math.floor(len / 2);
  const charCount = evenString ? 2 : 1;

  return string.slice(mid, mid + charCount);
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"