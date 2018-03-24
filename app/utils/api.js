const axios = require('axios');

// export object from this file -- anytime we want to hit an external api, well have a bunch of methods here we can use to do that
module.exports = {
  fetchPopularRepos: function(language){
    const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function(response){
        return response.data.items;
      })
  }
}