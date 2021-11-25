const {app, calculate} = require('./app.js');
describe('Test Case', () => {

   it('should return [1,1] when in the first element array a < b and in the second element array a > b', () => {
      const a = [5,6,7];
      const b = [3,6,10];
      expect(app(a,b)).toEqual([1, 1]);
   })
   it('should return [2,1] when in the first element array a < b and in the second element array a > b', () => {
      const a = [5,6,20];
      const b = [3,6,10];
      expect(app(a,b)).toEqual([2, 0]);
   })
   it('should return [3,1] when in the first element array a < b and in the second element array a > b', () => {
      const a = [5,10,15];
      const b = [3,6,10];
      expect(app(a,b)).toEqual([3, 0]);
   })

   it('should return 10 when input is [5,5]', () => {
      const data = [5,5];
      expect(calculate(data)).toEqual(10);
   })

   it('should return 5000000015 when input is [1000000001,1000000002,1000000003,1000000004,1000000005]', () => {
      const data = [1000000001,1000000002,1000000003,1000000004,1000000005]
      expect(calculate(data)).toEqual(5000000015);
   })

   
});