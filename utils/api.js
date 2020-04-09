require('dotenv').config();
const axios = require('axios');


const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)
      .then(function(response) {
        //console.log(response.data.avatar_url);
        //return response.data.avatar_url;
        return response
      })
      .catch(function(error){
        console.log(error)
      })
      .finally(function(){

      });
  }
};
//api.getUser("hjbx217");
module.exports = api;
