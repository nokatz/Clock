
let UI = {};

getDomElements();

displayTime();

function displayTime(){
	
	let d = new Date();
	let s = d.getSeconds(), 
		m = d.getMinutes(), 
		h = d.getHours();

	if(s < 10)
		s = "0" + s;
	if(m < 10)
		m = "0" + m;
		
	UI.clock.textContent = h + ':' + m + ':' + s;
	
	setInterval(displayTime, 1000);
}

function getDomElements(){
	UI.clock = document.getElementById('clock');
}