const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') {
    console.log('Yea that place is cool I guess');
    return;
  }
  console.log('THE GREATEST CITY IN THE WORLD');
  console.log('THE CITY THAT NEVER SLEEPS');
  console.log('WOW WHAT A CITY');
};

const getWeatherReport = (temperature) => {
  let weatherReport;

  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
  } else if (temperature > 70) {
    weatherReport = "It's really nice!";
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
  } else {
    weatherReport = "It's moderate outside.";
  }
  console.log(weatherReport);
  console.log("And that's your report!");
};

module.exports = {
  wildlyBiasedReview,
  getWeatherReport,
};
