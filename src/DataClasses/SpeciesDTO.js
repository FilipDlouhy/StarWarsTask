// Define a DTO class for the species item
export default class Species {
    constructor(name,classification, skinColor, averageHeight,type) {
      this.classification = classification;
      this.name = name;
      this.skinColor = skinColor;
      this.averageHeight = averageHeight;
      this.type = type;
    }
  }