import { CartProvider } from './context/CartContext'
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderModal from './components/OrderModal';

function App() {

  return (
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header/>
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
              <div className='lg:col-span-3'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-6'>
                  <ProductList/>
                </div>
              </div>
              <div className='lg:col-span-1'>
                <Cart/>
              </div>
            </div>
          </main>
          <OrderModal/>
        </div>
      </CartProvider>
  );
}

export default App
