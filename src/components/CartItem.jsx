import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <div className="flex items-center gap-2">
          <span>{item.quantity}x</span>
          <span className="text-gray-500">@</span>
          <span>${item.price.toFixed(2)}</span>
        </div>
        <p className="font-medium">{item.name}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}