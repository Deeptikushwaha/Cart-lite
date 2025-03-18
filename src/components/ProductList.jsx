import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}