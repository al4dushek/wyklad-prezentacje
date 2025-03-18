window.goToMain = function () {
    console.log('Przeładowanie strony – powrót na główną.');
    location.reload();
};
function checkAnswers(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'd', q2: 'a', q3: 'b',
        q4: 'c', q5: 'd', q6: 'b',
        q7: 'a', q8: 'd', q9: 'c',
        q10: 'a', q11: 'b', q12: 'a',
        q13: 'b', q14: 'd', q15: 'b'
    };

    let score = 0;
    const totalQuestions = document.querySelectorAll('.question').length;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
    <p>Twój wynik: ${score} z ${totalQuestions}. ${score >= 7 ? 'Świetnie!' : 'Spróbuj jeszcze raz!'}</p>
    <button class="return-btn">Wróć na główną stronę <i class="fas fa-home"></i></button>
`;
    const returnButton = resultDiv.querySelector('.return-btn');
        if (returnButton) {
            returnButton.addEventListener('click', function (event) {
                event.preventDefault(); // Zapobiega domyślnej akcji submit
                goToMain();
            });
        } else {
            console.error('Przycisk .return-btn nie został znaleziony.');
        }
}

function showTestOnly() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id !== 'test') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
    // Przewiń do sekcji testu
    document.getElementById('test').scrollIntoView({ behavior: 'smooth' });
}
