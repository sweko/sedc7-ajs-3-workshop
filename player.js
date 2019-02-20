$(async () => {
    const urlParams = new URLSearchParams(location.search);
    const team = urlParams.get("team");
    const squadNumber = urlParams.get("squadNum");

    const player = await loadPlayer(team, squadNumber);
    displayPlayer(player);

    $("#upload").on("click", async () => {
        const file = document.getElementById("image").files[0];
        console.log(file);
        let formData = new FormData();
        formData.append('image', file);
        await fetch("https://us-central1-sedc-world-cup.cloudfunctions.net/webApi/team/Algeria/1/image",
            {
                body: formData,
                method: "patch"
            });
    });
})

const loadPlayer = async (team, squadNumber) => {
    const player = dataService.getPlayer(team, squadNumber);
    return player;
}

const displayPlayer = (player) => {
    $("#player-name").text(player.getFullName());
}