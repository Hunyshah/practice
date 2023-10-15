"use client";
import React, { createContext, useContext, useReducer } from "react";

interface initialStateProduct {
  id: number;
  name: string;
  // qun:number;
}
interface InitialState {
  items: initialStateProduct[];
  totalAmount: number;
}

const initialState: InitialState = {
  items: [],
  totalAmount: 0,
};
export const CartContextP = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartreducer = (
  state: InitialState,
  action: { type: string; payload: { id: number; name: string } },
): InitialState => {
  switch (action.type) {
    case "ADD_ITEM":
      // Implement logic to add an item to the state
      // const updatedItem = state.items.concat(action.payload.item)
      return {
        ...state,
        items: [
          {
            id: 2,
            name: "honey",
          },
        ],
      };
    // Update the state with the new item

    case "REMOVE_ITEM":
      // Implement logic to remove an item from the state
      return {
        ...state,
        // Update the state without the removed item
      };
    default:
      return state;
  }
};

const CartContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartreducer, initialState);

  return (
    <CartContextP.Provider value={{ state, dispatch }}>
      {children}
    </CartContextP.Provider>
  );
};

export default CartContext;
