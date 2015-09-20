var text=document.body.innerText;

var possibleOutputs=new Array(
	"- They can access your intnernet activity.",
	"- They can access your device information.",
	"- They can access your contacts.",
	"- They can access your phone number.",
	"- They can access your location.",
	"- They can share your email.",
	"- They can send you email.",
	"- They are able to use and manipulate your media posts.",
	"- Your content will remain after account deactivation.",
	"- They have the ability to delete content at their discretion.",
	"- They can use your content without a license.",
	"- They can leave and use browser cookies.",
	"- They will display targeted advertisement.",
	"- Website may contain NSFW content.",
	"- You're liable for accuracy of information provided.",
	"- You're liable for content you post.",
	"- Copyright violations are enforced.",
	"- Company has limited liability."
	)
var outputs=new Array("Layman's Terms\n");
var regex=/[^a-zA-Z0-9]/g;
var parsed=text.split(regex);
var index=0;
for(len=parsed.length; index<len; index++){
	console.log(parsed[index]);
	var word=parsed[index].toLowerCase();
	switch (word){
		case "usage":
			if(dupeCheck(outputs, possibleOutputs[0]))
				outputs.push(possibleOutputs[0])
			break;
		case "interact":
			if(parsed[index+1].toLowerCase()=="with"){
				if(dupeCheck(outputs, possibleOutputs[0]))
					outputs.push(possibleOutputs[0]);
			}
			else
				break;
			break;
		case "we":
			if(parsed[index+1].toLowerCase()=="collect" && parsed[index+2].toLowerCase()=="information"){
				if(dupeCheck(outputs, possibleOutputs[0])){
					outputs.push(possibleOutputs[0]);
				}
			}
			break;
		case "device":
			if(parsed[index+1].toLowerCase()=="info" || parsed[index+1].toLowerCase()=="information"){
				if(dupeCheck(outputs, possibleOutputs[1])){
					outputs.push(possibleOutputs[[1]]);
				}
			}
			break;
		case "type":
			if(parsed[index+1].toLowerCase()=="of" && parsed[index+2].toLowerCase()=="software" && parsed[index+3].toLowerCase()=="used"){
				if(dupeCheck(outputs,possibleOutputs[1]))
					outputs.push(possibleOutputs[1]);
			}
			break;
		case "address":
			if(parsed[index+1].toLowerCase()=="book"){
				if(dupeCheck(outputs,possibleOutputs[2])){
					outputs.push(possibleOutputs[2]);
				}
			}
			break;
		case "contacts":
			if(dupeCheck(outputs,possibleOutputs[2])){
				outputs.push(possibleOutputs[2]);
			}
			break;
		case "phone":
			if(parsed[index+1].toLowerCase()=="number"){
				if(dupeCheck(outputs,possibleOutputs[3])){
					outputs.push(possibleOutputs[3]);
				}
			}
			break;
		case "retain":
			if(parsed[index+1].toLowerCase()=="ip" && parsed[index+2].toLowerCase()=="address"){
				if(dupeCheck(outputs, possibleOutputs[4]))
					outputs.push(possibleOutputs[4]);
			}
			break;
		case "gps":
			if(dupeCheck(outputs, possibleOutputs[4])){
				outputs.push(possibleOutputs[4]);
			}
			break;
		case "location":
			if(parsed[index+1].toLowerCase()=="information"){
				if(dupeCheck(outputs,possibleOutputs[4])){
					outputs.push(possibleOutputs[4]);
				}
			}
			else
				break;
			break;
		case "access":
			if(parsed[index+1].toLowerCase()=="to" && parsed[index+2].toLowerCase()=="your" && parsed[index+3].toLowerCase()=="email"){
				if(dupeCheck(outputs, possibleOutputs[5])){
					outputs.push(possibleOutputs[5]);
				}
			}
			break;
		case "we":
			switch(parsed[index+1].toLowerCase()){
				case "communicate":
					if(parsed[index+2].toLowerCase()=="email" || parsed[index+3].toLowerCase()=="email" || parsed[index+4].toLowerCase()=="email"){
						if(dupeCheck(outputs, possibleOutputs[6])){
							outputs.push(possibleOutputs[6]);
						}
					}	
					break;
				case "cannot":
					if(parsed[index+2].toLowerCase()=="take" && parsed[index+3].toLowerCase()=="responsibility"){
						if(dupeCheck(outputs, possibleOutputs[15])){
							outputs.push(possibleOutputs[15]);
						}
					}
					break;
				case "partner":
					if(dupeCheck(outputs, possibleOutputs[12])){
						outputs.push(possibleOutputs[12]);
					}
					break;
			}
			break;
		case "log":
			if(parsed[index+1].toLowerCase()=="data"){
				if(dupeCheck(outputs, possibleOutputs[7]))
					outputs.push(possibleOutputs[7]);
			}
			break;
		case "world":
			if(parsed[index+1].toLowerCase()=="wide"){
				if(parsed[index+3].toLowerCase()=="license" || parsed[index+4].toLowerCase()=="license"){
					if(dupeCheck(outputs, possibleOutputs[7])){
						outputs.push(possibleOutputs[7]);
					}
				}
			}
			break;
		case "license-free":
			if(dupeCheck(outputs,possibleOutputs[7])){
				outputs.push(possibleOutputs[7]);
			}
			break;
		case "affiliates":
			if(dupeCheck(outputs,possibleOutputs[7])){
				outputs.push(possibleOutputs[7]);
			}
			break;
		case "access":
			if(parsed[index+1].toLowerCase()=="to"){
				if(dupeCheck(outputs, possibleOutputs[7])){
					outputs.push(possibleOutputs[7]);
				}
			}
			break;
		case "deactivating":
			if(parsed[index+1].toLowerCase()=="you"){
				if(dupeCheck(outputs,possibleOutputs[8])){
					outputs.push(possibleOutputs[8]);
				}
			}
			break;
		case "still":
			if(parsed[index+1].toLowerCase()=="accessable"){
				if(dupeCheck(outputs, possibleOutputs[8])){
					outputs.push(possibleOutputs[8]);
				}
			}
			break;
		case "save":
			if(parsed[index+1].toLowerCase()=="the" && parsed[index+2].toLowerCase()=="most" && parsed[index+3].toLowerCase()=="recent"){
				if(dupeCheck(outputs,possibleOutputs[9])){
					outputs.push(outputs,possibleOutputs[9]);
				}
			}
			break;
		case "license-free":
			if(dupeCheck(outputs,possibleOutputs[10])){
				outputs.push(possibleOutputs[10]);
			}
			break;
		case "license":
			if(parsed[index+1].toLowerCase()=="free"){
				if(dupeCheck(outputs,possibleOutputs[10])){
					outputs.push(possibleOutputs[10]);
				}
			}
			break;
		case "royalty-free":
			if(dupeCheck(outputs,possibleOutputs[10])){
				outputs.push(possibleOutputs[10]);
			}
			break;
		case "cookies":
			if(dupeCheck(outputs,possibleOutputs[11])){
				outputs.push(possibleOutputs[11]);
			}
			break;
		case "targeted":
			if(parsed[index+1].toLowerCase()=="content" || parsed[index+2].toLowerCase()=="content" || parsed[index+3].toLowerCase()=="content"){
				if(dupeCheck(outputs,possibleOutputs[12])){
					outputs.push(possibleOutputs[12]);
				}
			}
			break;
		case "collect":
			if(parsed[index+1].toLowerCase()=="information"){
				if(dupeCheck(outputs,possibleOutputs[12])){
					outputs.push(possibleOutputs[12]);
				}
			}
			break;
		case "web":
			if(parsed[index+1].toLowerCase()=="beacons"){
				if(dupeCheck(outputs,possibleOutputs[12])){
					outputs.push(possibleOutputs[12]);
				}
			}
			break;
		case "may":
			if(parsed[index+1].toLowerCase()=="monitor" || parsed[index+2].toLowerCase()=="monitor" || parsed[index+3].toLowerCase()=="monitor" || parsed[index+4].toLowerCase()=="monitor"){
				if(dupeCheck(outputs,possibleOutputs[13])){
					outputs.push(possibleOutputs[13]);
				}
				if(dupeCheck(outputs,possibleOutputs[15])){
					outputs.push(possibleOutputs[15]);
				}
			}
			break;
		case "open":
			if(parsed[index+1].toLowerCase()=="platform"){
				if(dupeCheck(outputs,possibleOutputs[13])){
					outputs.push(possibleOutputs[13]);
				}
				if(dupeCheck(outputs,possibleOutputs[15])){
					outputs.push(possibleOutputs[15]);
				}
			}
			break;
		case "you":
			switch (parsed[index+1].toLowerCase()){
				case "must":
					if(parsed[index+2].toLowerCase()=="provide"){
						if(dupeCheck(outputs,possibleOutputs[14])){
							outputs.push(possibleOutputs[14]);
						}
					}
					break;
				case "are":
					if(parsed[index+2].toLowerCase()=="responsible" || parsed[index+3].toLowerCase()=="responsible"){
						if(dupeCheck(outputs,possibleOutputs[15])){
							outputs.push(possibleOutputs[15]);
						}
					}
					break;
			}
			break;
		case "us":
			if(parsed[index+1].toLowerCase()=="citizen"){
				if(dupeCheck(outputs.possibleOutputs[14])){
					outputs.push(possibleOutputs[14]);
				}
			}
			break;
		case "years":
			if(parsed[index+1].toLowerCase()=="of" && parsed[index+2].toLowerCase()=="age"){
				if(dupeCheck(outputs,possibleOutputs[14])){
					outputs.push(possibleOutputs[14]);
				}
			}
			break;
		case "impersonate":
			if(parsed[index+1].toLowerCase()=="another"){
				if(dupeCheck(outputs,possibleOutputs[14])){
					outputs.push(possibleOutputs[14]);
				}
			}
			break;
		case "copyright":
			if(parsed[index+1].toLowerCase()=="infringement"){
				if(dupeCheck(outputs,possibleOutputs[16])){
					outputs.push(possibleOutputs[16]);
				}
			}
			break;
		//TODO company liability phrases???
	}
}

//function to run through current outputs to watch for duplicates. Maybe run it at the end to just delete dupes.  
function dupeCheck(outputs, addition){
	var index1=0;
	var index2=0;
	for(len1=outputs.length; index1<len1; index1++){
			if(outputs[index1]==addition)
				return false;
	}
	return true;
}

index=0;
var strOutput=""
for(len=outputs.length;index<len;index++){
	str=outputs[index];
	strOutput=strOutput.concat(str);
	strOutput=strOutput.concat("\n");
}




window.alert(strOutput);
//console.log("WHY YOU NO WORK");