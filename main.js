function createGame (player1, hour, player2){

  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
  </li>
  `
}

let delay = 0;
function createCard (date,day,games){
  delay= delay-0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
             <h2>${date} <span>${day}</span></h2>
               <ul>
                  ${games}
                </ul>
          </div>
  `
}

document.querySelector("#cards").innerHTML = 
        createCard(
          "24/11",
          "Quinta-feira", 
        createGame("brazil", "19:00", "serbia") +
          createGame("uruguay", "13:00", "southkorea")
        )+
        createCard(
          "28/11", 
          "Segunda-feira", 
          createGame("switzerland", "16:00", "brazil") +
            createGame("portugal", "19:00", "uruguay")
            )+
        
        createCard(
          "02/12", 
          "Sexta-feira", 
          createGame("brazil", "19:00", "cameroon")
        )
