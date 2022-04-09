import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
const mapStateToProps = (state) => {
  const subtotal = state.items.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
  const tipAmount = (state.tipPercentage * subtotal) / 100;
  const total = subtotal + tipAmount;
  return { subtotal, tipAmount, total };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
