let lastScrollPosition = 0;

export function loadEvents() {
	document.addEventListener("scroll", function (event) {
		if (window.scrollY < lastScrollPosition) {
			if (lastScrollPosition > 0) {
				lastScrollPosition -= window.innerHeight;
				window.scrollTo({top: lastScrollPosition, behavior: "smooth"});
			}
		} else {
			if (window.scrollY > lastScrollPosition) {
				if (lastScrollPosition < window.innerHeight * 3) {
					lastScrollPosition += window.innerHeight;
					window.scrollTo({top: lastScrollPosition, behavior: "smooth"});
				}
			}
		}
		console.log(window.scrollY);
	})
}