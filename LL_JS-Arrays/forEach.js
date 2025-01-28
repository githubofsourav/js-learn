const scores = [50, 60, 70, 80, 90, 100];

const logScore = (score) => console.log('Score Over 65', score);

scores.forEach((score) => {
    if(score > 65) {
        logScore(score);
    }
});