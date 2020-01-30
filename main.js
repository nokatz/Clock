
let UI = {};
let s, m, h, d, t, t0;
let clock = true;

getDomElements();

t0 = new Date();

displayTime();

function displayTime(){
	
	if(clock){		
	
		d = new Date();			
		h = ("0" + d.getHours()).slice(-2);
	
	} else {	// timer, start from zero
	
		t = new Date() - t0;
		d = new Date(t);	
		
		h = ("0" + d.getUTCHours()).slice(-2);		
	}
				
	s = ("0" + d.getSeconds()).slice(-2);
	m = ("0" + d.getMinutes()).slice(-2);
		
	UI.clock.textContent = h + ':' + m + ':' + s;
	
	setInterval(displayTime, 1000);
	
}

function getDomElements(){
	UI.clock = document.getElementById('clock');
}