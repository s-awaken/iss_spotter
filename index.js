const { fetchMyIP, fetchCoordsByIP } = require('./iss');

const IP = '75.155.189.37';

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP: ", ip);
// });

// fetchCoordsByIP(IP, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(coords);
// });