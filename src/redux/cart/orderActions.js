// Dobbiamo utilizzare Redux Thunk per gestire il submit di un ordine perché essa è un'operazione ASINCRONA
// che non può venir gestita dal semplice Redux

import { clearCart } from "./cartActions"

// Gli action creators THUNK sono delle funzioni che ritornano funzioni (e queste possono essere quindi async)
export const submitOrder = orderData => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })
      const data = await response.json()
      console.log("Order submitted successfully! ", data)
      dispatch(clearCart())
    } catch (error) {
      console.log(error)
    }
  }
}
