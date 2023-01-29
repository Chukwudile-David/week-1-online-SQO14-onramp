function calculateGrade(marks) {
    let gradeTable = {
        'F': [1, 49],
        'E': [50, 59],
        'D': [60, 69],
        'C': [70, 79],
        'B': [80, 89],
        'A': [90, 100]
    };
    let average = marks.reduce((a, b) => a + b) / marks.length;
    for (let grade in gradeTable) {
        if (average >= gradeTable[grade][0] && average <= gradeTable[grade][1]) {
            return grade;
        }
    }
}

  module.exports =calculateGrade
