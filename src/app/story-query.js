// var AylienNewsApi = require('aylien-news-api');
import AylienNewsApi from 'aylien-news-api';

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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully sorta. Returned data: ');
    console.log('========================================');
    for (var i = 0; i < data.stories.length; i++){
      console.log(data.stories[i].title + " / " + data.stories[i].source.name);
    }
  }
};

export { apiInstance, opts, callback };
// var test = "hey";
// module.exports = test;
