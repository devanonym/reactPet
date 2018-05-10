export interface IInfo {
    id?: string;
    title?: string;
  }

  export class Info implements IInfo {
    constructor(public id?: string, public title?: string) {}
  }
