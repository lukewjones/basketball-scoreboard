let homeEl = document.getElementById("home-el")

let homeScore = 0

function plus1home() {
	homeScore += 1
	homeEl.innerText=homeScore
}

function plus2home() {
	homeScore += 2
	homeEl.innerText=homeScore
}

function plus3home() {
	homeScore += 3
	homeEl.innerText=homeScore
}

let guestEl = document.getElementById("guest-el")

let guestScore = 0

function plus1guest() {
	guestScore += 1
	guestEl.innerText=guestScore
}

function plus2guest() {
	guestScore += 2
	guestEl.innerText=guestScore
}

function plus3guest() {
	guestScore += 3
	guestEl.innerText=guestScore
}