
class Vehicle {
  constructor(type, model) {
    this._model = model;
    this._type = type;
  }
   get model(){
    return this._model;
  }
  get type(){
    return this._type;
  }
  description(){
    return `I am of type "${this.type}" and my model is "${this.model}!"`
  } 
}

export default Vehicle;