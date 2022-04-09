import { MenuItem } from '../components/MenuItem';
import { connect } from 'react-redux';
import {
  deleteItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(deleteItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};
export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
