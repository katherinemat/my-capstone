'use strict';

const express = require('express');
const router = express.Router();

var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "440541ee";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "b6185cbe079502c701acd1e10d6a6de8";

var opts = {
  'title': 'trump',
  'sortBy': 'social_shares_count.facebook',
  'language': ['en'],
  'notLanguage': ['es', 'it'],
  'publishedAtStart': 'NOW-7DAYS',
  'publishedAtEnd': 'NOW',
  'entitiesBodyLinksDbpedia': [
    'http://dbpedia.org/resource/Donald_Trump',
    'http://dbpedia.org/resource/Hillary_Rodham_Clinton'
  ]
};

// var callback = function(error, data, res) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data.stories);
//     return data.stories;
//   }
// };

//my-route/api/stories
router.get('/stories', (req, res) => {
  apiInstance.listStories(opts, (error, data, response) => {
    res.send(data);
  })
});

module.exports = router;
