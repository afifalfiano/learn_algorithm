
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

module.exports = {gradingStudents};
