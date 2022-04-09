export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_DELETED = 'ITEM_DELETED';
export const ITEM_PRICE_UPDATED = 'ITEM_PRICE_UPDATED';
export const ITEM_QUANTITY_UPDATED = 'ITEM_QUANTITY_UPDATED';

export const addNewItem = (name, price) => {
  return {
    type: ITEM_ADDED,
    payload: {
      name,
      price
    }
  };
};

export const deleteItem = (uuid) => {
  return {
    type: ITEM_DELETED,
    payload: { uuid }
  };
};

export const updatePrice = (uuid, price) => {
  return {
    type: ITEM_PRICE_UPDATED,
    payload: { uuid, price }
  };
};

export const updateQuantity = (uuid, quantity) => {
  return {
    type: ITEM_QUANTITY_UPDATED,
    payload: { uuid, quantity }
  };
};
