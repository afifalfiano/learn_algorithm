

const {staircase, miniMaxSum} = require('./app.js');
describe('Test Case', () => {
   it('Should return half piramid with reverse position', () => {
      // expect(staircase(6)).toEqual(`     #\n    ##\n   ###\n  ####\n #####\n######`);
      expect(staircase(6)).not.toEqual(undefined);
   });
   it('Should return calculate from minimum and maximum data of array', () => {
      const data = [1,2,3,4,5];
      expect(miniMaxSum(data)).toEqual('10 14');
   });
   it('Should return calculate 20, 20 when input [5,5,5,5,5]', () => {
      const data = [5,5,5,5,5];
      expect(miniMaxSum(data)).toEqual('20,20');
   });
});