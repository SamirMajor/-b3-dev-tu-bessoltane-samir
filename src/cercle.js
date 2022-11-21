class Cercle{
    rayon;
    per;
    aireCercle;

    constructor(rayon) {
        this.rayon=rayon;
    }

    getPerimetre() {
      return this.per=2*Math.PI*this.rayon;
    }

    getAireCercle() {
        return this.aireCercle=Math.PI*this.rayon*this.rayon;
    }
}

module.exports = {
    Cercle : Cercle
}
