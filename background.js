chrome.browserAction.onClicked.addListener(function(tab){
	console.log('Executed Click Script');
	chrome.tabs.executeScript(null, {
		file:"script.js"
	});
});
