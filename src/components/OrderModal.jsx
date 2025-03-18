import { useCart } from '../context/CartContext';

export default function OrderModal() {
  const { isOrderModalOpen, setIsOrderModalOpen, cartTotal, clearCart } = useCart();

  if (!isOrderModalOpen) return null;

  const handleConfirm = () => {
    clearCart();
    setIsOrderModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Confirm Your Order</h2>
        <p className="mb-4">Total amount: ${cartTotal}</p>
        
        <div className="flex gap-4">
          <button
            onClick={handleConfirm}
            className="flex-1 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700"
          >
            Confirm
          </button>
          <button
            onClick={() => setIsOrderModalOpen(false)}
            className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}