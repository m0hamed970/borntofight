function calculateResult() {

    const answers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value,
        q6: document.querySelector('input[name="q6"]:checked')?.value,
        q7: document.querySelector('input[name="q7"]:checked')?.value,
        q8: document.querySelector('input[name="q8"]:checked')?.value,
        q9: document.querySelector('input[name="q9"]:checked')?.value,
        q10: document.querySelector('input[name="q10"]:checked')?.value,
        q11: document.querySelector('input[name="q11"]:checked')?.value
    };

    let score = {
        'A': 0,
        'B': 0,
        'C': 0,
        'D': 0
    };

    for (let question in answers) {
        if (answers[question]) {
            score[answers[question]]++;
        }
    }

    let result = ''; 
    let maxScore = Math.max(score['A'], score['B'], score['C'], score['D']); 


    let sports = [];

    if (score['A'] === maxScore) {
        sports.push(' La Boxe anglaise 🥊');
    }
    if (score['B'] === maxScore) {
        sports.push('La Boxe française 🥋');
    }
    if (score['C'] === maxScore) {
        sports.push('La Muay Thaï 🐘');
    }
    if (score['D'] === maxScore) {
        sports.push('Le Kickboxing 🔥');
    }

    if (sports.length === 1) {
        result = `Je te conseille, vu tes résultats à ce quiz de te tourner vers : ${sports[0]}, Cependant à toi de voir en fonction de la disponibilité des clubs autour de chez toi, ainsi que de tes envies`; 
    } else if (sports.length > 1) {
        result = `Alors toi, tu est très polyvalent, à toi de voir entre ses sports : ${sports.join(' ou ')}`; 
    } else {
        result = 'Il y a une erreur quelque part, essaie de recharger la page et de refaire le quiz.';
    }

    console.log(result); 
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('sport').innerText = result;
}
