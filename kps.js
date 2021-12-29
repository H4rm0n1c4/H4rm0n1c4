function choose(playerChoice){

    let txt;
    let pelaaja;
    let tietokone;
    
    const options = ['Rock', 'Paper', 'Scissors']
    
    if (confirm("Choose " + playerChoice + "?"))  {
        const aiRandomIndex = getRandomInt(3)
    const aiChoice = options[aiRandomIndex]
    
    document.getElementById('ai-choice').innerHTML = aiChoice
    
    const result = checkWinner(playerChoice, aiChoice)
    
        if (result === 'Win'){
            txt = "SMASHING VICTORY!!";
            pelaaja = document.getElementById("pelaaja").innerHTML +"I";
            tietokone = document.getElementById("tietokone").innerHTML;
        }
        if (result === 'Loss'){
            txt = "Better luck next time chump!";
            pelaaja = document.getElementById("pelaaja").innerHTML ;
            tietokone = document.getElementById("tietokone").innerHTML + "I";
        }
        if (result === 'Draw'){
            txt = "No winners here!";
            pelaaja = document.getElementById("pelaaja").innerHTML ;
            tietokone = document.getElementById("tietokone").innerHTML;
        }
        
    } 
    else {
        txt = "Choose another!";
        pelaaja = document.getElementById("pelaaja").innerHTML;
        tietokone = document.getElementById("tietokone").innerHTML;
    }
    document.getElementById("Prompt").innerHTML = txt;
    document.getElementById("tietokone").innerHTML = tietokone;
    document.getElementById("pelaaja").innerHTML = pelaaja;
    
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      function checkWinner(playerChoice, aiChoice){
    console.log(playerChoice + '' + aiChoice)
    
    if (playerChoice === 'Rock'){
    if (aiChoice === 'Paper') return 'Loss';
    if (aiChoice === 'Rock') return 'Draw';
    if (aiChoice === 'Scissors') return 'Win';
    }
    if (playerChoice === 'Paper'){
        if (aiChoice === 'Paper') return 'Draw';
        if (aiChoice === 'Rock') return 'Win';
        if (aiChoice === 'Scissors') return 'Loss';
        }
        if (playerChoice === 'Scissors'){
            if (aiChoice === 'Paper') return 'Win';
            if (aiChoice === 'Rock') return 'Loss';
            if (aiChoice === 'Scissors') return 'Draw';
            }
       
      }