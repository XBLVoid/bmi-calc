function navToMenu(){
	console.log("Trigger");
	$.mobile.navigate( "#bmi-calc" );
}

gsap.to(".logo",{duration: 2, y:-50, opacity: 1, onComplete: navToMenu});