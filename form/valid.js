function submitAnswers() {
    const correctAnswers = ["Paris", "JavaScript", "Tokyo", "Mars", "Blue Whale", "Etruscan shrew", "Left", "2", "India", "White"];
    let score = 0;

    for (let i = 1; i <= 10; i++) {
      const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selectedOption) {
        document.getElementById("result").textContent = "Please answer all questions.";
        return;
      }
      if (selectedOption.value === correctAnswers[i - 1]) {
        score++;
      }
    }

    document.getElementById("result").textContent = `You scored ${score} out of 10.`;
  }