import { describe, it, expect } from 'vitest';
import { parseInputProduct } from '@/utils/utils';

describe('utils', () => {
  it('parsing text area input ', () => {
    const inputString = 'apple, 4,banana, 6.2, strawberry,2';
    expect(parseInputProduct(inputString)).toEqual([
      {
        name: 'apple',
        price: 4,
        id: 0
      },
      {
        name: 'banana',
        price: 6.2,
        id: 1
      },
      {
        name: 'strawberry',
        price: 2,
        id: 2
      }])
  });
})
