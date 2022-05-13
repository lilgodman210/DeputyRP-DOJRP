function GetFiveMPlayers(ip, element) {
    fetch(`https://servers-frontend.fivem.net/api/servers/single/` + ip)
        .then(res => res.json())
        .then(data => element.innerHTML = data["Data"]["clients"])
}