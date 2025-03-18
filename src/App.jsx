import { CartProvider } from './context/CartContext'
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderModal from './components/OrderModal';

function App() {

  return (

      <CartProvider>
      {/* Main background with pattern */}
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white relative">
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-0 w-32 h-full">
            <div className="grid grid-cols-3 gap-2 opacity-20">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-pink-300" />
              ))}
            </div>
          </div>
          {/* Zigzag pattern */}
          <div className="absolute left-0 top-1/4 opacity-20">
            <svg width="100" height="100" viewBox="0 0 100 100" className="text-pink-300">
              <path d="M0 50 L25 25 L50 50 L75 25 L100 50" stroke="currentColor" fill="none" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Content card with shadow */}
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Header />
            <main className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductList />
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <Cart />
                </div>
              </div>
            </main>
          </div>
        </div>

        <OrderModal />
      </div>
    </CartProvider>

    // <CartProvider>
      //   <div className="min-h-screen bg-gray-50">
      //     <Header/>
      //     <main className="max-w-7xl mx-auto px-4 py-8">
      //       <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
      //         <div className='lg:col-span-3'>
      //           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-6'>
      //             <ProductList/>
      //           </div>
      //         </div>
      //         <div className='lg:col-span-1'>
      //           <Cart/>
      //         </div>
      //       </div>
      //     </main>
      //     <OrderModal/>
      //   </div>
      // </CartProvider>
  );
}

export default App
