import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techs: ['NODEJS', 'ANGULAR', 'REACT'],
  };
  render() {
    return (
      <ul>
        <li>CSS</li>
        <li>JAVA</li>
        <li>VUEJS</li>
      </ul>
    );
  }
}

export default TechList;
