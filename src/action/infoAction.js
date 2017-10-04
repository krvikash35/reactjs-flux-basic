// @flow
import  dispatcher from '../dispatcher/dispatcher';

export function reverseName(){
  dispatcher.dispatch({
    type: 'REVERSE_NAME'
  })
}