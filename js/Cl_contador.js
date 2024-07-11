export default class contador {
  constructor() {
    this.cont = 0;
    this.contM = 0;
    this.contF = 0;
  }

  cantTotal() {
    return this.cont;
  }
  cantidadM() {
    return this.contM;
  }

  cantidadF() {
    return this.contF;
  }
  procesarp(p) {
    this.cont++;

    if (p.sexo === "F") {
      this.contF++;
    } else if (p.sexo === "M") {
      this.contM++;
    }
  }
}
