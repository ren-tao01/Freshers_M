const people_in_place = { //dictionary
    "watson": makePlaceInfo(20, "2km"),
    "99 speedmart": makePlaceInfo(10, "5km"),
    "7-eleven": makePlaceInfo(5, "1km"),
    "kk mart": makePlaceInfo(17, "1.6km"),
    "jaya grocer": makePlaceInfo (31, "2.3km"),
    "kyochon": makePlaceInfo (22, "5km"),
    "nando's": makePlaceInfo (24, "3.8km"),
    "hungry bunch": makePlaceInfo (11, "0.5km"),
    "starbucks": makePlaceInfo (17, "2.65km"),
    "prime at le meridien": makePlaceInfo (33, "7.4km"),
    "miyabi": makePlaceInfo (10, "1.24km"),
    "freshfruits": makePlaceInfo (5, "0.2km"),
    "rotiboy": makePlaceInfo (3, "8.5km"),
    "senheng": makePlaceInfo (11, "2.72km"),
    "gayaone": makePlaceInfo (10, "6.5km"),
    "thonybread": makePlaceInfo (13, "2.33km"),
    "mcdonalds": makePlaceInfo (35, "0.45km"),
    "burger king": makePlaceInfo (11, "5.28km"),
    "johnny rocket": makePlaceInfo (13, "4.75km"),
    "machines": makePlaceInfo (6, "10.5km"),
};

function replyUser(){
    let input = document.getElementById('input').value.toString().toLowerCase();
    let matching_place = Object.keys(people_in_place).filter(k => k.includes(input));
    //console.log(result);

    //reset innerHTML value 
    document.getElementById('reply_msg').innerHTML = "";

    if(input.length == 0 || matching_place.length == 0) {
  	// Insert logic here
    	// let randomPlace = Object.keys(people_in_place)[Math.floor(Math.random() * people_in_place.length)];
    	// console.log(Math.floor(Math.random() * people_in_place.length));
    	// replyMsg(randomPlace);
    }else {
    	for(var i = 0; i < matching_place.length; i++) {
    	let place_name = matching_place[i];
    	replyMsg(place_name);
   		}
    } 
}

function replyMsg(place_name) {
	let place = people_in_place[place_name];
	let subAnswer = `${titleCase(place_name)}. Number of people ${place["numberOfPeople"]}, risk level is ${place["risk level"]} and the
				     distance is ${place["travel distance"]}. ${place["advice"]}`;
 	document.getElementById('reply_msg').innerHTML += subAnswer + "<br />"; 
}

 function makePlaceInfo(numPeople, distance) {
    var risk;
    var advice;

    if (numPeople < 15) {
        risk = "low";
        advice = "You should go now"
    }
    else if (numPeople > 30) {
        risk = "high";
        advice = "You should go there one hour later"
    }
    else {
        risk = "medium";
        advice = "You should go there but wear mask"
    }
    return {
        "numberOfPeople": numPeople,
        "travel distance": distance,
        "risk level": risk,
        "advice": advice
    };
}

function capitaliseFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function titleCase(string) {
	var splitString = string.split(' ');
	for(var i = 0; i < splitString.length; i++) {
		splitString[i] = capitaliseFirstLetter(splitString[i]);
	}

	return splitString.join(' ');
}
