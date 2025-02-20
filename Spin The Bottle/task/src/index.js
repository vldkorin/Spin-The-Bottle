document.getElementById("player-form")
    .addEventListener('submit', addPlayer);

document.getElementById("spin")
    .addEventListener('click', randomPlayer);

document.getElementById("reset")
    .addEventListener('click', function () {
        let list = document.getElementById("players");
        let status = document.getElementById("status");
        list.innerHTML = '';
        status.innerText = 'List of players is empty.';
    });


function addPlayer (event) {
event.preventDefault();
    let input = document.getElementById("player-name");
    let playerName = input.value.trim();
    let playersList = document.getElementById("players");
    let status = document.getElementById("status");


    let existingPlayers = Array.from(playersList.getElementsByTagName("li"));
    if (existingPlayers.some(li => li.innerText === playerName)) {
        status.innerText = "Player already exists!";
        return;
    }

    if (playerName !== '') {
        let newPlayer = document.createElement("li");
        newPlayer.textContent = playerName;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.style.marginLeft = '10px'
        deleteButton.addEventListener('click', function () {
            newPlayer.remove();
        });

        newPlayer.appendChild(deleteButton);
        playersList.appendChild(newPlayer);

        input.value = "";
        status.innerText = "Spin the bottle!";
    } else {
        status.innerText = "Player can't be a whitespace!"
    }
}



function randomPlayer () {

    let list = document.getElementById("players").getElementsByTagName("li");
    let playersArr = [];
    for (let i = 0; i < list.length; i++) {
        playersArr.push(list[i].firstChild.textContent);
    }
    let index = Math.floor(Math.random() * playersArr.length);
    let randomPlayer = playersArr[index];
    document.getElementById("status").innerText = "Spinning...";
    setTimeout(() => {
        document.getElementById("status").innerText = `Selected player: ${randomPlayer}`;
    }, 2000);
}

