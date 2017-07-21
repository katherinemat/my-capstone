export class SubjectAgeGroup {
  public count: number;
  public subjectAge: number;

  constructor(public databaseObject: any) {
    this.count = databaseObject.count;
    this.subjectAge = databaseObject.subject_age;
  }
}
