const teamUrl = "https://us-central1-sedc-world-cup.cloudfunctions.net/webApi/team";

const dataService = {
    getSquad: async (squadName) => {
        const response = await fetch(`${teamUrl}/${squadName}`);
        const squadData = await response.json();
        const coach = dataMapper.getCoachFromServerData(squadData);
        const players = squadData.players.map(sp => dataMapper.fromServerPlayerToFootballer(sp));
        const result = new Squad(squadName, players, coach);
        return Promise.resolve(result);
    },
    getMatches: (squadName) => {

    },
    getAllTeamNames: async () => {
        const url = "https://us-central1-sedc-world-cup.cloudfunctions.net/webApi/team-list";
        const response = await fetch(url);
        const teams = await response.json();
        return teams;
    }
}

