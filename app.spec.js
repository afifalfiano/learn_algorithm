const app = require('./app.js');
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

   
});