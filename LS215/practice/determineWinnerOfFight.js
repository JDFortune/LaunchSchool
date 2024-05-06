function determineWinnerOfFight(rounds) {
  let me = 0;
  let spouse = 0;

  for (let round in rounds) {
    let [myPoints, spousePoints] = Object.values(rounds[round]);
    if (myPoints > spousePoints) {
      me += 1;
    } else if (myPoints < spousePoints) {
      spouse += 1;
    }
  }

  if (me > spouse) {
    return 'ME!';
  } else if (me < spouse) {
    return 'SPOUSE!';
  } else {
    return 'NOBODY!';
  }
}

console.log(determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
})); // "NOBODY!"


console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
})); // "SPOUSE!"