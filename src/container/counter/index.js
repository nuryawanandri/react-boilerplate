import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementCounter, decrementCounter } from '../../reducer/counter';

const Counter = props => (
  <div>
    {`Counter  = ${props.counter}`}
    <div>
      <button onClick={props.decrementCounter}> - </button>
      <button onClick={props.incrementCounter}> + </button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  counter: state.counter.counter
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      incrementCounter,
      decrementCounter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
