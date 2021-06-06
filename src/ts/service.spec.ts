import { expect } from 'chai';

import { sayHello, sayAsyncHello, getBooks } from './service';

describe('Service', () => {
    it('should print hello', () => {
      expect(sayHello()).to.equal('Hello TS');
    });

    it('should print async hello', () => {
      return expect(sayAsyncHello()).to.eventually.equals('Hello async TS');
    });

    it('should return books', () => {
      const book =  {
        title: 'Harry potter',
        isbn: 'foo',
        price: 200.65
      };

      expect(getBooks()).to.eql([book]);
    });
});