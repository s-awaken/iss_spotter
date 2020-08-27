const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

const IP = '75.155.189.37';
const coords = { latitude: '49.24800', longitude: '-123.09130' };

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }

//   console.log(ip);
// });

// fetchCoordsByIP(IP, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(coords);
// });

// fetchISSFlyOverTimes(coords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(passTimes);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});