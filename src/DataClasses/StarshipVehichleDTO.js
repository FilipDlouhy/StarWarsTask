export default class StarshipVehichleDTO {
    constructor(name,model, manufacturer, crew,type) {
      this.model = model;
      this.manufacturer = manufacturer;
      this.crew = crew;
      this.type = type;
      this.name = name;
    }
  }