function random(min, max){
	return Math.floor(Math.random() * (max-min+1))
}


function changeColor(){
	let hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

	let hexcode1 = ''
	let hexcode2 = ''

	for(let i = 0; i < 6; i++)	{
		hexcode1 += hexNumbers[random(0, hexNumbers.length - 1)]
		hexcode2 += hexNumbers[random(0, hexNumbers.length - 1)]
	}


	document.getElementById("hex-code1").innerHTML = hexcode1
	document.getElementById("hex-code2").innerHTML = hexcode2

	document.getElementsByTagName("body")[0].style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`
}