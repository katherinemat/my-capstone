'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.post('/officer-related-shootings', (req, res) => {
  // const { newTitle, newAuthor, newDate, newLink } = req.body;
  knex('officer_involved_shootings').returning('id').insert([
    {
      blurred_address: req.body.blurred_address,
      city: req.body.city,
      date: req.body.date,
      fatal: req.body.fatal,
      frb: req.body.frb,
      go: req.body.go,
      justified: req.body.justified,
      justified_policy: req.body.justified_policy,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      number_of_rounds: req.body.number_of_rounds,
      officer_disciplined: req.body.officer_disciplined,
      officer_gender: req.body.officer_gender,
      officer_injured: req.body.officer_injured,
      officer_race: req.body.officer_race,
      on_duty: req.body.on_duty,
      rank: req.body.rank,
      state: req.body.state,
      subject_age: req.body.subject_age,
      subject_dob: req.body.subject_dob,
      subject_gender: req.body.subject_gender,
      subject_race: req.body.subject_race,
      subject_weapon: req.body.subject_weapon,
      summary: req.body.summary,
      time: req.body.time,
      type_of_weapon: req.body.type_of_weapon,
      years_of_spd_service: req.body.years_of_spd_service
    }
  ])
  .then((ids) => {
    res.send(ids);
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/officer-related-shootings', (req, res) => {
  knex.select().table('officer_involved_shootings')
  .then((shootings) => {
    res.send(shootings);
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/grouped-subject-ages', (req, res) => {
  knex('officer_involved_shootings')
      .select('subject_age')
      .count('subject_age')
      .whereBetween('subject_age', [0, 99])
      .groupBy('subject_age')
      .orderBy('subject_age', 'asc')
      .then((shootings) => {
        res.send(shootings);
      })
      .catch((err) => {
        console.log(err);
      })
});

router.post('/pie-chart-data', (req, res) => {
  knex('officer_involved_shootings')
      .select(req.body.param)
      .count(req.body.param)
      .groupBy(req.body.param)
      .orderBy(req.body.param, 'asc')
      .then((shootings) => {
        res.send(shootings);
      })
      .catch((err) => {
        console.log(err);
      })
});

router.get('/time-chart-data', (req, res) => {
  knex.raw('SELECT COUNT(subject_gender), subject_gender, extract(year from date) AS yyyy FROM officer_involved_shootings GROUP BY subject_gender, yyyy ORDER BY yyyy, subject_gender')
      .then((shootings) => {
        res.send(shootings);
      })
      .catch((err) => {
        res.send(err);
      })
});

router.post('/officer-involved-shootings-where-year', (req, res) => {
  console.log(req.body.start);
  knex('officer_involved_shootings')
      .whereBetween('date', [req.body.start, req.body.end])
      .then((shootings) => {
        res.send(shootings);
      })
      .catch((err) => {
        console.log(err);
      })
});


module.exports = router;
