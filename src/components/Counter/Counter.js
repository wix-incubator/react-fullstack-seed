import React, {PropTypes, Component} from 'react';
import s from './Counter.scss';

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
  }

  render() {
    const {value, onIncrement, onDecrement} = this.props;
    return (
      <div>
        <p data-hook="counter-value" className={s.mainColor}>{value}</p>
        <button data-hook="increment-button" className="increment-button" onClick={onIncrement}>+</button>
        <button data-hook="decrement-button" className="decrement-button" onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
