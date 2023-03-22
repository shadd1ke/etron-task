import { Product } from '@/declaration/declaration';

export function parseInputProduct(value: string) {
  if (!value.trim()) {
    alert('Please enter product info.')
    return [];
  }
  const regex = /([\w\s]+),\s*(\d+(?:\.\d+)?)/g;
  const parsedProduct = value.match(regex) || [];
  const result: Product[] = parsedProduct.map((product, i) => {
    const splitProduct = product.split(',');
    return {
      name: splitProduct[0],
      price: +splitProduct[1],
      id: i
    }
  })
  return result;
}
