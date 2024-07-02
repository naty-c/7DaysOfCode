// 7 Days of Code D-2 | Alura + Rafaella Ballerini

document.getElementById('startButton').addEventListener('click', function () {

    function ask(text) {
        return prompt(text);
    }

    let userName = ask("What is your name?");

    let age = ask("How old are you?");

    let programmingLanguage = ask("What programming language are you studying?");

    alert(`Hello ${userName}! You are ${age} years old and you are already learning ${programmingLanguage}.`);

    let study = ask(`Do you like studying ${programmingLanguage}? Answer with number 1 for YES or 2 for NO.`);

    if (study == '1') {
        alert("Great! Keep studying and you will be very successful.");
    } else if (study == '2') {
        alert("Ah, too bad... Have you tried learning other programming languages? Don't give up! :)");
    } else {
        alert("Ops! Invalid answer. Please use number 1 for YES or 2 for NO.");
    }
});