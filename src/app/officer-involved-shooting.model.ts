export class OfficerInvolvedShooting {
  public date: any;
  public fatal: string;
  public justified: string;
  public justifiedPolicy: string;
  public withinPolicy: string;
  public latitude: string;
  public longitude: string;
  public numberOfRounds: number;
  public officerDisciplined: string;
  public officerGender: string;
  public officerInjured: string;
  public officerRace: string;
  public officerOnDuty: string;
  public officerRank: string;
  public subjectAge: number;
  public subjectDOB: string;
  public subjectGender: string;
  public subjectRace: string;
  public subjectWeapon: string;
  public summary: string;
  public time: any;
  public typeOfWeapon: string;

  constructor(public databaseObject: any) {
    this.date = databaseObject.date;
    this.fatal = databaseObject.fatal;
    this.justified = databaseObject.justified;
    this.justifiedPolicy = databaseObject.justified_policy;
    this.withinPolicy = databaseObject.within_policy;
    this.latitude = databaseObject.latitude;
    this.longitude = databaseObject.longitude;
    this.numberOfRounds = databaseObject.number_of_rounds;
    this.officerDisciplined = databaseObject.officer_disciplined;
    this.officerGender = databaseObject.officer_gender;
    this.officerInjured = databaseObject.officer_injured;
    this.officerRace = databaseObject.officer_race;
    this.officerOnDuty = databaseObject.on_duty;
    this.officerRank = databaseObject.rank;
    this.subjectAge = databaseObject.subject_age;
    this.subjectDOB = databaseObject.subject_dob;
    this.subjectGender = databaseObject.subject_gender;
    this.subjectRace = databaseObject.subject_race;
    this.subjectWeapon = databaseObject.subject_weapon;
    this.summary = databaseObject.summary;
    this.time = databaseObject.time;
    this.typeOfWeapon = databaseObject.type_of_weapon;
  }
}
