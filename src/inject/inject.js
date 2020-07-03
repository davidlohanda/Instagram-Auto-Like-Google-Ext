chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		if (window.location.hash === '#automate') {
			document.querySelectorAll('.v1Nh3 > a')[0].click()
			const automation = setInterval(function() {
				const heartButton = document.querySelectorAll('button.wpO6b')[0];
				const nextButton = document.querySelector('a.coreSpriteRightPaginationArrow');
				if (heartButton) {
					heartButton.click();
				}
				nextButton.click();

			}, 5000);
			document.querySelectorAll('button.wpO6b')[document.querySelectorAll('button.wpO6b').length - 1].onclick = () => {
				clearInterval(automation);
			}
		}
		// ----------------------------------------------------------

	}
	}, 10);
});