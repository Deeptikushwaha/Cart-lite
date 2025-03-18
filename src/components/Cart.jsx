import { useCart } from "../context/CartContext";
import CartItem from './CartItem';

export default function Cart(){
    const {cartItems, cartTotal, setIsOrderModalOpen} = useCart();

    return (
        <div className="bg-white rounded-lg p-6 sticky top-6">
            <div className="flex justify-betweem items-center mb-6">
                <h2 className="text-xl font-bold">Your Cart ({cartItems.length})</h2>
            </div>
            <div className="space-y-4">
                {cartItems.map((item)=>(
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            {cartItems.length>0 &&(
            <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="font-medium">Order Total</span>
          <span className="text-xl font-bold">${cartTotal}</span>
        </div>

        <div className="text-center text-sm text-gray-500 mb-4">
          <span className="inline-flex items-center gap-1">
            This is a
            <span className="text-green-600">carbon-neutral</span>
            delivery
          </span>
        </div>

        <button
            onClick={() => setIsOrderModalOpen(true)}
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700"
          >
            Confirm Order
          </button>
      </div>
    )}
    </div>
    )
}