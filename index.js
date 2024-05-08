"use strict";

// Array of American Football teams
let teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];
  
  // Close the dropdown if the user clicks outside of it
  window.onload = function() {

    // load the dropdown list (see function below)
    initFootballTeamsDropdown();
 
 };
 
  function initFootballTeamsDropdown() {
 
    const teamList = document.getElementById("footballTeams");
 
    let length = teams.length;
    for (let i = 0; i < length; i++) {
 
       // create the option element and set the text and
       // value at the same time
       let theOption = new Option(teams[i].name, teams[i].teamcode); 
 
       // append the option as a child of (inside) the 
       // select element
       teamList.appendChild(theOption);
    }
 }
 
 function selectFootballTeam() {
    const teamList = document.getElementById("footballTeams");
    console.log(teamList.value);
    let selectedTeam;
    let numberOfTeams = teams.length;
    for (let i = 0; i < numberOfTeams; i++) {
        if (teams[i].teamcode === teamList.value) {
            selectedTeam = teams[i];
        }
    }
    let msg = `You selected the ${selectedTeam.name} (${selectedTeam.teamcode}) who play in ${selectedTeam.locatedIn}`;
    let messageArea = document.getElementById("selectedFootballTeamMessage");
    messageArea.innerHTML = msg;
     // selectedTeam = getTeam(teamList.value);
 }
 
 /*
function getTeam(teamcode) {
    let numberOfTeams = teams.length;
    for (let i = 0; i < numberOfTeams; i++) {
        if (teams[i].teamcode === teamcode) {
            return teams[i];
        }
}
    return -1;
*/
  