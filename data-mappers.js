const dataMapper = {
    fromServerPlayerToFootballer: (serverPlayer) => {
        const nameParts = serverPlayer.name.split(" ");
        let firstName, lastName;
        if (nameParts.length === 1) {
            firstName = nameParts[0];
            lastName = "";
        } else {
            firstName = nameParts.slice(0, nameParts.length - 1).join(" ");
            lastName = nameParts[nameParts.length-1];
        }
        return new Footballer(firstName, lastName, {
            squadNumber: serverPlayer.squadNumber,
            position: serverPlayer.position,
            caps: serverPlayer.caps,
            team: `${serverPlayer.club} (${serverPlayer.clubCountry})`,
            image: serverPlayer.imageUrl
        });
    }
}