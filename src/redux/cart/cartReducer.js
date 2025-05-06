const initialState = {
  items: [],
  total: 0,
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // 1. Verifichiamo se il prodotto esiste già nel carrello
      const index = state.items.findIndex(item => item.id === action.payload.id)
      let updateItems = [] // <-- Per soddisfare la purezza della funzione devo creare un NUOVO ARRAY, non modificare items direttamente
      if (index >= 0) {
        // 2.a Se il prodotto esiste, incrementiamo la quantità
        updateItems = state.items.map(item => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item))

        // updateItems = state.items.map(item => {
        //   if (item.id === action.payload.product.id) {
        //     return { ...item, quantity: item.quantity + 1 }
        //   } else {
        //     return item
        //   }
        // })
      } else {
        // 2.b Altrimenti lo aggiungiamo con quantità 1
        updateItems = [...state.items, { ...action.payload, quantity: 1 }]
      }
      const updatedTotal = updateItems.reduce((total, item) => total + item.price * item.quantity, 0)
      return { ...state, items: updateItems, total: updatedTotal }
    }
    case "REMOVE_FROM_CART": {
      const filteredItems = state.items.filter(item => item.id !== action.payload)
      const updatedTotal = filteredItems.reduce((total, item) => total + item.price * item.quantity, 0)
      return { ...state, items: filteredItems, total: updatedTotal }
    }

    case "INCREASE_QUANTITY":
      break
    case "DECREASE_QUANTITY":
      break
    case "CLEAR_CART": {
      return { ...state, items: [], total: 0 }
    }

    default:
      return state
  }
}
