// @flow

import React, { Component } from 'react';
import InfoComponent from '../component/infoComponent';
import infoStore from '../store/infoStore'

type Props = {};
type State = {
  info: {
    name: string,
    age: number
  }
};

class InfoContainer extends Component<Props, State>{
  constructor(){
    super()
    this.state = {
      info: infoStore.getState()
    }
  }

  onchange(){
    this.setState({
      info: infoStore.getState()
    })
  }

  componentDidMount(){
    infoStore.on('change', this.onchange.bind(this))
  }

  componentWillUnmount(){
    infoStore.removeListener('change', this.onchange.bind(this))
  }

  render(){
    return (<InfoComponent info={this.state.info}/>)
  }
}

export default InfoContainer