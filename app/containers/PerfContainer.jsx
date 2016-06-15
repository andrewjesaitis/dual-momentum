import React, { Component, PropTypes } from 'react';
import Perf from '../components/Perf';

class PerfContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }
  componentWillMount() {
    this.setState({ title: this.props.title });
  }
  render() {
    return (
      <Perf title={this.state.title}/>
    );
  }
}

export default PerfContainer;
