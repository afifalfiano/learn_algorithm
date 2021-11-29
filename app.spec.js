

const {sockMerchant} = require('./app.js');
describe('Pair Number', () => {
   it('should return 3 pair when the input [10 20 20 10 10 30 50 10 20]', () => {
      const data = [10, 20, 20, 10, 10, 30, 50, 10, 20];
      expect(sockMerchant(8, data)).toEqual(3);
   });
});