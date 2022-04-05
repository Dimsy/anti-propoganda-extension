var elements = ['a', 'span', 'img', 'div']
var propogandaAgenda = [117,107,114,97,105,110];

elements.forEach(function(elType) {
	var annoyingNoiseEl = null;
	for (const el of document.querySelectorAll(elType)) {
	  if (el.textContent.toLowerCase().includes(String.fromCharCode(...propogandaAgenda))) {
		annoyingNoiseEl = el;
	  }
	}
	
	if (!!annoyingNoiseEl) {
		var parent = annoyingNoiseEl.parentElement
		parent.removeChild(annoyingNoiseEl)
		console.log(`Purified <${elType}>`)
	}
});
