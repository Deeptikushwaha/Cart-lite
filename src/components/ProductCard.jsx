import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
       
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 rounded-full px-4 py-2 flex items-center gap-4 hover:bg-orange-600 hover:text-white text-xl ">
          <button 
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))} //handleQuantityChange(-1)}
              className="text-white-600 "
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button 
              onClick={() => setQuantity(prev => prev + 1)}  //handleQuantityChange(1)
              className="text-white-600 "
            >
              +
            </button>
         </div>
        
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="text-lg font-medium mt-1">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-orange-600 font-medium">${product.price}</p>
          <button
            onClick={() => {
              addToCart(product, quantity);
              setQuantity(1);
              setShowQuantity(false);
            }}
            className="flex items-center gap-2 text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-200"
          >
            {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg> */}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}