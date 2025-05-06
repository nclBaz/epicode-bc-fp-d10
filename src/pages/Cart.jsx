import { useDispatch, useSelector } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cart/cartActions"
import { Button } from "react-bootstrap"
import { submitOrder } from "../redux/cart/orderActions"

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const currentUser = useSelector(state => state.users.currentUser)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    const orderData = {
      userId: currentUser.id,
      products: cartItems,
      createdAt: new Date(),
    }

    dispatch(submitOrder(orderData)) // quando devo invocare degli action creators thunk devo sempre usare dispatch
  }
  return (
    <div>
      <h2>YOUR CART</h2>
      {cartItems.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image}></img>
              <strong>
                {item.title} -- {item.quantity}
              </strong>
              <Button onClick={() => dispatch(increaseQuantity(item.id))}>+1</Button>
              <Button onClick={() => dispatch(decreaseQuantity(item.id))}>-1</Button>
              <Button onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
            </li>
          ))}
        </ul>
      )}
      <div>Cart Total: {total}</div>
      <Button onClick={handleSubmit}>Submit Order</Button>
    </div>
  )
}

export default Cart
