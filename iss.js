const request = require('request');

const API = 'https://api.ipify.org?format=json';

const fetchMyIP = (callback) => {
  request(API, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body).ip;
    callback(null, data);
  });
  
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body).data;
    callback(null, { latitude, longitude });
  });
};
// http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON

module.exports = { fetchMyIP, fetchCoordsByIP };
