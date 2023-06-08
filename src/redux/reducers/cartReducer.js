import { createReducer } from "@reduxjs/toolkit";

const cartReducer = createReducer(
	{},
	{
		addToCart: (state, action) => {
			state.cart.push(action.payload.item);
		},
	}
);

export default cartReducer;
