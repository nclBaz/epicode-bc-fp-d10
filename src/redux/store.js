import { configureStore } from "@reduxjs/toolkit"
import exampleReducer from "./exampleReducer"
import themeReducer from "./themeReducer"
import { cartReducer } from "./cart/cartReducer"
import usersReducer from "./users/usersReducer"

const store = configureStore({
  reducer: {
    example: exampleReducer,
    theme: themeReducer,
    cart: cartReducer,
    users: usersReducer,
  },
})

export default store
