function uniqueStyles(arr) {
  let styles = arr.flatMap(styles => styles.split(','));
  styles = [...new Set(styles)];
  return styles.length;
}

console.log(uniqueStyles([
  "Dub,Dancehall",
  "Industrial,Heavy Metal",
  "Techno,Dubstep",
  "Synth-pop,Euro-Disco",
  "Industrial,Techno,Minimal"
])); // 9

console.log(uniqueStyles([
  "Soul",
  "House,Folk",
  "Trance,Downtempo,Big Beat,House",
  "Deep House",
  "Soul"
])); // 7