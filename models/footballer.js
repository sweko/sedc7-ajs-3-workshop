class Footballer extends Person {
    constructor (firstName, lastName, {
        squadNumber,
        position,
        team,
        caps
    }) {
        super(firstName, lastName);
        this.squadNumber = squadNumber;
        this.position = position;
        this.team = team;
        this.caps = caps;
        this.image = null;
    }

}