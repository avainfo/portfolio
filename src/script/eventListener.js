let currentSection = 0;

export function loadEvents() {
	let isScrolling = false;

	document.addEventListener("wheel", function(event) {
		if (isScrolling) return;
		isScrolling = true;

		console.log("scroll")
		if (event.deltaY > 0) {
			currentSection++;
		} else {
			currentSection--;
		}

		currentSection = Math.max(0, Math.min(currentSection, 3));

		window.scrollTo({
			top: currentSection * window.innerHeight,
			behavior: "smooth"
		});

		setTimeout(() => isScrolling = false, 800);
	});
}
