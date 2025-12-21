let placarHome = document.getElementById("homeId")
let placarGuest = document.getElementById("guestId")

let home = 0
let guest = 0
let zero = 0


function addOneHome() {
    home += 1
    placarHome.textContent = home
}

function addTwoHome() {
    home += 2
    placarHome.textContent = home
}

function addThreeHome() {
    home += 3
    placarHome.textContent = home
}


function addOneGuest() {
    guest += 1
     placarGuest.textContent = guest
}

function addTwoGuest() {
    guest += 2
    placarGuest.textContent = guest
}

function addThreeGuest() {
    guest += 3
    placarGuest.textContent = guest
}


function restart() {
    placarHome.textContent = zero
    placarGuest.textContent = zero
    home = 0
    guest = 0
}
restart()