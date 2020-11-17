import React from 'react';
import { connect } from 'react-redux';
import { addHam, addPineapple, removeHam, removePineapple } from './actions';
import { clearAll } from './common/actions';
import { StoreState } from './store/types';

type StateProps = Pick<StoreState, 'hams' | 'pineapples'>;
type DispatchProps = {
  addHam: typeof addHam;
  addPineapple: typeof addPineapple;
  removeHam: typeof removeHam;
  removePineapple: typeof removePineapple;
  clearAll: typeof clearAll;
}

type Props = StateProps & DispatchProps;

export class PizzaConfigurator extends React.PureComponent<Props> {
  public render() {
    return (
      <div>
        <h1>Pizza Configurator</h1>
        <hr/>
        <h2>Ham Count: {this.props.hams}</h2>
        <button className="btn btn-primary" onClick={this.props.addHam}>Add Ham</button> <button className="btn btn-warning" onClick={this.props.removeHam}>Remove Ham</button>

        <hr/>
        <h2>Pineapple Count: {this.props.pineapples.value}</h2>
        <button className="btn btn-primary" onClick={this.props.addPineapple}>Add Pineapple</button> <button className="btn btn-warning" onClick={this.props.removePineapple}>Remove Pineapple</button>

        <hr/>
        <button className="btn btn-danger" onClick={this.props.clearAll}>Reset everything</button>
      </div>
    );
  }
}

function getStateProps(state: StoreState): StateProps {
  return {
    hams: state.hams,
    pineapples: state.pineapples
  }
}

export default connect(getStateProps, {
  addHam,
  addPineapple,
  removeHam,
  removePineapple,
  clearAll
})(PizzaConfigurator);
