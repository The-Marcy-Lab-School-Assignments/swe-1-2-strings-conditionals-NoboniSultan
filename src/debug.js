const coolnessGauge = (numOfFridges) => {
  return numOfFridges >= 4 ? 'You are downright chilly!' : 'You need more fridges.';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops >= 31) return 'You need an intervention!!!';
  if (numOfFunkoPops > 20) return 'You need help!';
  if (numOfFunkoPops > 10) return 'You have a problem.';
  if (numOfFunkoPops >= 1) return 'Only a few? Keep having fun!';
  return 'No pops? Maybe try one.';
};

const returnPositiveNegativeZero = (num) =>
  ["Negative", "Zero", "Positive"][Math.sign(num) + 1];


module.exports = {
  coolnessGauge,
  funkoPopAddictionLevel,
  returnPositiveNegativeZero,
};
