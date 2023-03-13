// Create function addUser()

  function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
  // Get value of user by id player1_name_input and player2_name_input
    localStorage.setItem("Player1" , player_1);
    localStorage.setItem("Player2" , player_2);
   
  // Store these values locally
    window.location = "game_page.html";
  //Assign "game_page.html" to window.location
}

