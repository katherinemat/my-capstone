
exports.up = function(knex) {
  return knex.raw(
    `CREATE TABLE officer_involved_shootings (
      id
        SERIAL
        PRIMARY KEY,
      blurred_address varchar(255),
      city varchar(255),
      date timestamp,
      fatal varchar(255),
      frb varchar(255),
      go varchar(255),
      justified varchar(255),
      justified_policy varchar(255),
      latitude varchar(255),
      longitude varchar(255),
      number_of_rounds integer,
      officer_disciplined varchar(255),
      officer_gender varchar(255),
      officer_injured varchar(255),
      officer_race varchar(255),
      on_duty varchar(255),
      rank varchar(255),
      state varchar(255),
      subject_age integer,
      subject_dob varchar(255),
      subject_gender varchar(255),
      subject_race varchar(255),
      subject_weapon varchar(255),
      summary varchar(8000),
      time varchar(255),
      type_of_weapon varchar(255),
      years_of_spd_service varchar(255))`
    );
};

exports.down = function(knex) {
  return knex.schema.dropTable('officer_involved_shootings');
};
