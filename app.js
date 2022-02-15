const UI = {
	hour: document.querySelector('.hand--hour'),
	minute: document.querySelector('.hand--minute'),
	second: document.querySelector('.hand--second'),
	secondDot: document.querySelector('.hand--second-dot'),
}

const updateClock = () => {
	const now = new Date()
	const hours = ((now.getHours() + now.getMinutes() / 60) / 12) * 360
	const minutes = ((now.getMinutes() + now.getSeconds() / 60) / 60) * 360

	let seconds = 0
	if (now.getSeconds() === 59 && now.getMilliseconds() < 950) {
		seconds = (now.getSeconds() / 60) * 360
	} else {
		seconds = ((now.getSeconds() + now.getMilliseconds() / 1000) / 60) * 360
	}

	UI.hour.style.transform = `rotate(${hours}deg)`
	UI.minute.style.transform = `rotate(${minutes}deg)`
	UI.second.style.transform = `rotate(${seconds}deg)`
	UI.secondDot.style.transform = `rotate(${seconds}deg)`

	requestAnimationFrame(updateClock)
}

requestAnimationFrame(updateClock)
