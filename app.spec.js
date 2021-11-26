

const {plusMinus} = require('./app.js');
describe('Test Case', () => {
   it('Should return [0.400000, 0.400000, 0.200000] when input [1,1,-1,-1,0]', () => {
      const data = [1,1,-1,-1,0];
      expect(plusMinus(data)).toEqual([0.400000, 0.400000, 0.200000]);
   });
});