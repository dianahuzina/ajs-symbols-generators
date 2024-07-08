export default class Team {
  constructor(members) {
    this.members = members;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.members.length; i++) {
      yield this.members[i];
    }
  }
}