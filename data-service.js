const dataService = {
    getSquad: (squadName) => {
        const result = new Squad("Default", [], new Person("Coach", "Coachson"));
        const serverPlayers = [
            {
                squadNumber: 1,
                position: 'GK',
                name: 'Jefferson',
                caps: '9',
                club: 'Botafogo',
                clubCountry: 'BRA'
            },
            {
                squadNumber: 12,
                position: 'GK',
                name: 'Júlio César',
                caps: '79',
                club: 'Toronto',
                clubCountry: 'CAN'
            },
            {
                squadNumber: 22,
                position: 'GK',
                name: 'Victor',
                caps: '6',
                club: 'Atlético Mineiro',
                clubCountry: 'BRA'
            },
            {
                squadNumber: 2,
                position: 'DF',
                name: 'Dani Alves',
                caps: '74',
                club: 'Barcelona',
                clubCountry: 'ESP'
            },
            {
                squadNumber: 3,
                position: 'DF',
                name: 'Thiago Silva',
                caps: '45',
                club: 'Paris Saint-Germain',
                clubCountry: 'FRA'
            },
            {
                squadNumber: 4,
                position: 'DF',
                name: 'David Luiz',
                caps: '35',
                club: 'Chelsea',
                clubCountry: 'ENG'
            },
            {
                squadNumber: 6,
                position: 'DF',
                name: 'Marcelo',
                caps: '30',
                club: 'Real Madrid',
                clubCountry: 'ESP',
                imageUrl: "https://www.laststicker.com/i/cards/1498/38.jpg"
            },
            {
                squadNumber: 13,
                position: 'DF',
                name: 'Dante',
                caps: '12',
                club: 'Bayern Munich',
                clubCountry: 'GER'
            },
            {
                squadNumber: 14,
                position: 'DF',
                name: 'Maxwell',
                caps: '8',
                club: 'Paris Saint-Germain',
                clubCountry: 'FRA'
            },
            {
                squadNumber: 15,
                position: 'DF',
                name: 'Henrique',
                caps: '5',
                club: 'Napoli',
                clubCountry: 'ITA'
            },
            {
                squadNumber: 23,
                position: 'DF',
                name: 'Maicon',
                caps: '71',
                club: 'Roma',
                clubCountry: 'ITA'
            },
            {
                squadNumber: 5,
                position: 'MF',
                name: 'Fernandinho',
                caps: '6',
                club: 'Manchester City',
                clubCountry: 'ENG'
            },
            {
                squadNumber: 8,
                position: 'MF',
                name: 'Paulinho',
                caps: '25',
                club: 'Tottenham Hotspur',
                clubCountry: 'ENG'
            },
            {
                squadNumber: 11,
                position: 'MF',
                name: 'Oscar',
                caps: '30',
                club: 'Chelsea',
                clubCountry: 'ENG'
            },
            {
                squadNumber: 16,
                position: 'MF',
                name: 'Ramires',
                caps: '42',
                club: 'Chelsea',
                clubCountry: 'ENG'
            },
            {
                squadNumber: 17,
                position: 'MF',
                name: 'Luiz Gustavo',
                caps: '18',
                club: 'VfL Wolfsburg',
                clubCountry: 'GER'
            },
            {
                squadNumber: 18,
                position: 'MF',
                name: 'Hernanes',
                caps: '24',
                club: 'Internazionale',
                clubCountry: 'ITA'
            },
            {
                squadNumber: 19,
                position: 'MF',
                name: 'Willian',
                caps: '6',
                club: 'Chelsea',
                clubCountry: 'ENG'
            },
            {
                squadNumber: 7,
                position: 'FW',
                name: 'Hulk',
                caps: '34',
                club: 'Zenit Saint Petersburg',
                clubCountry: 'RUS'
            },
            {
                squadNumber: 9,
                position: 'FW',
                name: 'Fred',
                caps: '33',
                club: 'Fluminense',
                clubCountry: 'BRA'
            },
            {
                squadNumber: 10,
                position: 'FW',
                name: 'Neymar',
                caps: '48',
                club: 'Barcelona',
                clubCountry: 'ESP'
            },
            {
                squadNumber: 20,
                position: 'FW',
                name: 'Bernard',
                caps: '10',
                club: 'Shakhtar Donetsk',
                clubCountry: 'UKR'
            },
            {
                squadNumber: 21,
                position: 'FW',
                name: 'Jô',
                caps: '16',
                club: 'Atlético Mineiro',
                clubCountry: 'BRA',
                imageUrl: "https://i.ebayimg.com/images/g/SokAAOSwirZTvte8/s-l300.jpg"
            }];
        result.players = serverPlayers.map(sp => dataMapper.fromServerPlayerToFootballer(sp));
        return Promise.resolve(result);
    },
    getMatches: (squadName) => {

    },
    getAllTeamNames: () => {
        return Promise.resolve(["Brazil", "Croatia", "Mexico", "Cameroon"]);
    }
}

