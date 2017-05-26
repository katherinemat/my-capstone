'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');
// const knex = require('knex')(knexConfig);

var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "440541ee";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "b6185cbe079502c701acd1e10d6a6de8";

// add a sort by to get only most relevant? Can't figure out how aylien would sort by relevancy
var opts = {
  'sortBy': 'social_shares_count.facebook',
  'sourceName': ["BBC", "CNN", "Fox News"],
  'publishedAtStart': 'NOW-1DAYS',
  'publishedAtEnd': 'NOW',
  'perPage': 2,
  '_return': ["title", "author", "body", "links", "media", "published_at"]
};

//my-route/api/stories
router.get('/stories', (req, res) => {
  const knex = require('../../knex');
  apiInstance.listStories(opts, (error, data, response) => {
    res.send(data);
  })
});

router.post('/saveStories', (req, res) => {
  const { newTitle, newAuthor, newDate, newLink } = req.body;
  knex('stories').returning('id').insert([
    //change content column's name. don't know how. do i have to make a new migration?
    {title: newTitle, author: newAuthor, date: newDate, link: newLink}
  ])
  .then((ids) => {
    console.log(ids);
    res.send(ids);
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;
