export interface IPet {
  id?: string;
  title?: string;
  price?: number;
}

export class Pet implements IPet {
  constructor(public id?: string, public title?: string, public price?: number) {}
}
