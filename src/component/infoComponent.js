// @flow
import React, { Component } from 'react';
import * as infoAction from '../action/infoAction';

type Props = {
  info: {
    name: string,
    age: number
  }
}
class InfoComponent extends Component<Props>{
  render() {
    return (
      <div>
        <h1>{this.props.info.name}</h1>
        <button onClick={() => {infoAction.reverseName()}}>Reverse name</button>
      </div>
      );
  }
}

export default InfoComponent;
