// @flow

import EventEmitter from 'events';
import dispatcher from '../dispatcher/dispatcher'

class InfoStore extends EventEmitter{
  info: {
    name: string,
    age: number
  }

  constructor(){
    super()
    this.info = {
      name: 'vikash',
      age: 25
    }
  }

  handleAction(action: {type: string}){
    console.log('info store got action:', action)
    switch (action.type) {
      case "REVERSE_NAME":
        this.info.name = this.info.name.split("").reverse().join("");
        this.emit('change')
        break;
    
      default:
        break;
    }
  }

  getState(){
    return this.info
  }
}

const infoStore = new InfoStore();
dispatcher.register(infoStore.handleAction.bind(infoStore))
export default infoStore;