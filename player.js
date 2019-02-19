$(async () => {
    const urlParams = new URLSearchParams(location.search);
    const team = urlParams.get("team");
    const squadNumber = urlParams.get("squadNum");

    const player = await loadPlayer(team, squadNumber);
    displayPlayer(player);
})

const loadPlayer = async (team, squadNumber) => {
    const player = dataService.getPlayer(team, squadNumber);
    return player;
}

const displayPlayer = (player) => {
    $("#player-name").text(player.getFullName());
}