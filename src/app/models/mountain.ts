export class Mountain {
  id: number;
  name: string;
  height: number;
  range: string;
  location: string;


  constructor(id: number, name: string, height: number, range: string, location: string) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.range = range;
    this.location = location;
  }
}
