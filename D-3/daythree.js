// 7 Days of Code D-3 | Alura + Rafaella Ballerini

document.getElementById('startButton').addEventListener('click', function() {
    function ask(text) {
      return prompt(text);
    }
  
    // Front-End or Back-End?
    let area = ask("Are you #Team Front-End or #Team Back-End?");
  
    // Choosing technologies between front-end and back-end
    let tech;
        if (area.toLowerCase() === "front-end") {
            tech = ask("Which quest are you willing to face: React or Vue?");
        } else if (area.toLowerCase() === "back-end") {
            tech = ask("Which quest are you willing to face: C# or Java?");
        } else {
        alert("Ops! Invalid choice. Go back to the respawn area and start the jorney again.");
        return;
        }
  
    // Choosing specialization or ou Fullstack
    let path = ask("After achieving the quest, how are you going to level up? Choose between Specialization in your desired class or the Fullstack path.");
  
        if (path.toLowerCase() === "specialization") {
        alert(`Great! Keep leveling up your skills with ${tech} to become a master.`);
        } else if (path.toLowerCase() === "fullstack") {
        alert(`Awesome! Pave your way to the top with ${tech} and conquer all dungeons.`);
        } else {
        alert("Ops! Invalid choice. Go back to the respawn area and start the jorney again.");
        return;
        }
  
    // More technologies
    let moreTech = true;
        while (moreTech) {
        let newTech = ask("Are there more tech skills are you willing to learn to level up even further?");
        alert(`Cool! More buffs are always welcome to improve your status. ${newTech} can definitely bring more achievements for you.`);
        moreTech = ask("Any other tech skills in mind? Answer 'yes' to continue or end the journey for now.") === 'yes';
        }
    
        alert("Thanks for playing! Keep learning and leveling up your coding skills.");
  });
  