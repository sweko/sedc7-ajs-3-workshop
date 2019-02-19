$(async () => {
    await loadTeamNames();

    $("#team-selector").on("change", async () => {
        const teamName = $("#team-selector").val();
        if (teamName === "empty") {
            return clearSquad();
        }
        const squad = await loadSquad(teamName);
        displaySquad(squad);
    })
})

const loadTeamNames = async () => {
    const teamNames = await dataService.getAllTeamNames();
    const select = $("#team-selector");
    select.append(`<option value="empty">-- Select a team --</option>`)
    for (const name of teamNames) {
        select.append(`<option value="${name}">${name}</option>`);
    }
}

const loadSquad = async (teamName) => {
    const squad = await dataService.getSquad(teamName);
    return squad;
}

const displaySquad = (squad) => {
    $("#team-name").text(squad.name);
    $("#coach").text(squad.coach.getFullName());
    const playersList = $("#players");
    playersList.empty();
    for (const player of squad.players) {
        playersList.append(`<li>${player.getFullName()}</li>`)
        if (player.image) {
            playersList.append(`<li>
                <a href="player.html?team=${squad.name}&squadNum=${player.squadNumber}">
                    <img src="${player.image}" />
                </a>
            </li>`)
        }
    }
    $("#total").text(`There are ${squad.players.length} players in the squad`);
    $("#team-images").empty();
    $("#team-images").append(`<img src="${squad.badgeImage}" />`)
    $("#team-images").append(`<img src="${squad.teamImage}" />`)
}

const clearSquad = () => {
    $("#team-name").empty();
    $("#team-images").empty();
    $("#coach").empty();
    $("#players").empty();
    $("#total").empty();
}