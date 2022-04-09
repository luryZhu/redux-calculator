import {
  ITEM_ADDED,
  ITEM_DELETED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  switch (action.type) {
    case ITEM_ADDED:
      const item = {
        uuid: id++,
        quantity: 1,
        name: action.payload.name,
        price: parseInt(action.payload.price, 10)
      };
      return [...state, item];
    case ITEM_DELETED:
      return state.filter((item) => item.uuid !== action.payload.uuid);
    case ITEM_PRICE_UPDATED:
      return state.map((item) => {
        return item.uuid === action.payload.uuid
          ? {
              ...item,
              price: parseInt(action.payload.price, 10)
            }
          : item;
      });
    case ITEM_QUANTITY_UPDATED:
      return state.map((item) => {
        return item.uuid === action.payload.uuid
          ? {
              ...item,
              quantity: parseInt(action.payload.quantity, 10)
            }
          : item;
      });
    default:
      return state;
  }
};

export default reducer;
