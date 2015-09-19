function getText(){
		return document.body.innerText
}
console.log(getText());
//chrome.extension.onRequest.addListener(
//    function(request, sender, sendResponse) {
//        if(request.method == "getText"){
//            sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
//        }
//    }
//);

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.method=="getText"){
			sendResponse({data:document.all[0].innerText, method: "getText"});
		}
	}
);