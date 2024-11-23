export enum ValidationStatuses {
  CORRECT,
  INCORRECT,
  BADMAIL,
  BADPASS,
  EMPTY,
  NOTEMPTY,
  TOOLONG,
  TOOSHORT,
  NOTLATIN,
  NOTNUMBER,
}

export class Validator {
  private value: string;
  private status: ValidationStatuses;

  constructor(val: string) {
    this.value = val;
    this.status = ValidationStatuses.CORRECT;
  }
  notEmpty() {
    if (this.status === ValidationStatuses.CORRECT) {
      if (this.value.length === 0 || this.value.includes(" "))
        this.status = ValidationStatuses.EMPTY;
    }
    return this;
  }
  minLength(min: number) {
    if (this.status === ValidationStatuses.CORRECT) {
      if (this.value.length < min) this.status = ValidationStatuses.TOOSHORT;
    }
    return this;
  }
  maxLength(max: number) {
    if (this.status === ValidationStatuses.CORRECT) {
      if (this.value.length >= max) this.status = ValidationStatuses.TOOLONG;
    }
    return this;
  }
  matchMail() {
    if (this.status === ValidationStatuses.CORRECT) {
      if (!this.value.match(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/))
        this.status = ValidationStatuses.BADMAIL;
    }
    return this;
  }
  matchPassword() {
    if (this.status === ValidationStatuses.CORRECT) {
      if (!this.value.match(/^[a-zA-Z0-9]{5,20}$/))
        this.status = ValidationStatuses.BADPASS;
    }
    return this;
  }
  matchLatin() {
    if (this.status === ValidationStatuses.CORRECT) {
      if (!this.value.match(/[A-Za-z]{1,}/))
        this.status = ValidationStatuses.NOTLATIN;
    }
    return this;
  }
  getStatus() {
    return this.status;
  }
}
