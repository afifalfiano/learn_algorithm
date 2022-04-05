

const {plusMinus, minMaxSum, timeConversion} = require('./app.js');
describe('Test Case', () => {
   it('should return result 0.500000, 0.333333, 0.166667 when input data [-4, 3, -9, 0, 4, 1] ', () => {
      const data =[-4, 3, -9, 0, 4, 1];
      expect(plusMinus(data)).toEqual('0.500000, 0.333333, 0.166667')
   });

   it('should return result 0.400000, 0.400000, 0.200000 when input data [1,1,0,-1,-1] ', () => {
      const data = [1,1,0,-1,-1];
      expect(plusMinus(data)).toEqual('0.400000, 0.400000, 0.200000')
   });

   it('should return 10 14 when value [1 2 3 4 5', () => {
      const data = [1,2,3,4,5];
      expect(minMaxSum(data)).toEqual('10 14');
   })

   it('should return 00:01:00 when input 12:01:00AM', () => {
      expect(timeConversion('12:01:00AM')).toEqual('00:01:00');
   })

   it('should return 12:01:00 when input 12:01:00PM', () => {
      expect(timeConversion('12:01:00PM')).toEqual('12:01:00');
   })
});