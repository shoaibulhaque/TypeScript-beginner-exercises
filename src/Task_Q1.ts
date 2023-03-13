import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter marks for english: ", (englishMarks:string) => {
    rl.question("Enter marks for urdu: ", (urduMarks:string) => {
        let englishMarksnum = parseInt(englishMarks);
        let urduMarksnum = parseInt(urduMarks);
        let grades;

        const avgMarks = (englishMarksnum + urduMarksnum) / 2;
        if (avgMarks >= 80){
            grades = 'A';
        }else if (avgMarks >= 70 && avgMarks < 80){
            grades = 'B';
        }else if (avgMarks >= 60 && avgMarks < 70){
            grades = 'C';
        }else {
            grades = 'F';

        }

        console.log(grades);
        rl.close();
    });
});