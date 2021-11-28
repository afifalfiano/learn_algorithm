
function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = [];
    const dataMultipleFive = [];
    for(let j = 1; j <= 21; j++) {
        dataMultipleFive.push(j * 5);
    }
    let roundedChange = [];
    for (let k = 0; k < grades.length; k++) {
        if (grades[k] < 38 && grades[k] >= 0) {
            // not rounded
            roundedGrades.push(grades[k]);
        } 
        for(let i = 0; i < dataMultipleFive.length; i++) {
             if (grades[k] >= 38 && grades[k] <= 100) {
                // rounded
                const calculate = grades[k] - dataMultipleFive[i];
                if (calculate > -3 && calculate < 0) {
                    roundedGrades.push(grades[k] + (calculate * -1));
                } else if (calculate > -5 && calculate <= -3) {
                    roundedGrades.push(grades[k]);                    
                } else if (calculate === 0){
                    roundedGrades.push(grades[k]);                    
                }
            }
        }
    }
    return roundedGrades;
}

function diagonalDifference(arr) {
    // Write your code here
    let resultTwo = [];
    let resultOne = [];
    let j = 0;
    let k = arr.length;
    for(let i = 0; i < arr.length; i++) {
        resultOne.push(arr[i][j]);
        resultTwo.push(arr[i][k-1]);        
        j++;
        k--;
    }
    let valueOne = 0;
    let valueTwo = 0;
    resultOne.forEach(item => valueOne += item);
    resultTwo.forEach(item => valueTwo += item);    
    
    const result = valueOne - valueTwo;
    console.log(result);
    let checkPosNeg = 0;
    if (result >= 0) {
       checkPosNeg = result * 1; 
    } else {
       checkPosNeg = result * -1; 
    }
    return checkPosNeg;

}

module.exports = {gradingStudents, diagonalDifference};
