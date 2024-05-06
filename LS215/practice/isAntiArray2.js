function isAntiArray(arr1, arr2) {
  let elements = [...new Set(arr1)];
  let anti = arr1.map(el => el === elements[0] ? elements[1] : elements[0]);

  for (let i = 0; i < anti.length; i++) {
    if (anti[i] !== arr2[i]) return false;
  }

  return true;
}