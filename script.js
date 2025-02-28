let players = JSON.parse(localStorage.getItem('players')) || [];

function updateUI() {
    const playersDiv = document.getElementById('players');
    playersDiv.innerHTML = '';
    players.forEach((player, index) => {
        playersDiv.innerHTML += `
            <div class="player">
                <span>${player.name}: ${player.score}</span>
                <button onclick="changeScore(${index}, 1)">+1</button>
                <button onclick="changeScore(${index}, -1)">-1</button>
                <button onclick="removePlayer(${index})">Remove</button>
            </div>
        `;
    });
    localStorage.setItem('players', JSON.stringify(players));
}

function addPlayer() {
    const name = document.getElementById('playerName').value.trim();
    if (name) {
        players.push({ name, score: 0 });
        document.getElementById('playerName').value = '';
        updateUI();
    }
}

function changeScore(index, amount) {
    players[index].score += amount;
    updateUI();
}

function removePlayer(index) {
    players.splice(index, 1);
    updateUI();
}

function resetScores() {
    players.forEach(player => player.score = 0);
    updateUI();
}

updateUI();
