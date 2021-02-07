const people_in_place = { //dictionary
    "watson": makePlaceInfo(20, "2km", "Bandar Sunway"),
    "99 speedmart": makePlaceInfo(10, "5km", "Puchong Jaya"),
    "7-eleven": makePlaceInfo(5, "1km", "Damansara Jaya"),
    "kk mart": makePlaceInfo(17, "1.6km", "Subang Jaya"),
    "jaya grocer": makePlaceInfo (31, "2.3km", "Puchong Perdana"),
    "kyochon": makePlaceInfo (22, "5km", "Puchong Prima"),
    "nando's": makePlaceInfo (24, "3.8km", "Petaling Perdana"),
    "hungry bunch": makePlaceInfo (11, "0.5km", "Bandar Utama"),
    "starbucks": makePlaceInfo (17, "2.65km", "Mont Kiara"),
    "prime at le meridien": makePlaceInfo (33, "7.4km", "Damansara Utama"),
    "miyabi": makePlaceInfo (10, "1.24km", "Petaling Jaya"),
    "freshfruits": makePlaceInfo (5, "0.2km", "Subang Jaya"),
    "rotiboy": makePlaceInfo (3, "8.5km", "Puchong Perdana"),
    "senheng": makePlaceInfo (11, "2.72km", "Petaling Perdana"),
    "gayaone": makePlaceInfo (10, "6.5km", "Kepong"),
    "thonybread": makePlaceInfo (13, "2.33km", "Bukit Jalil"),
    "mcdonalds": makePlaceInfo (35, "0.45km", "Sri Petaling"),
    "burger king": makePlaceInfo (11, "5.28km", "Bandar Sunway"),
    "johnny rocket": makePlaceInfo (13, "4.75km", "Bandar Utama"),
    "machines": makePlaceInfo (6, "10.5km", "Puchong Jaya"),
};

function replyUser(){
    let input = document.getElementById('input').value.toString().toLowerCase();
    let matching_place = Object.keys(people_in_place).filter(k => k.includes(input));
    //console.log(result);

    //reset innerHTML value 
    document.getElementById('reply_msg').innerHTML = "";
    document.getElementById('user_msg').innerHTML = `You said: "${input}"`;
    document.getElementById('user_msg').className = "green";
    if(input.length == 0 ) {
        document.getElementById('user_msg').innerHTML = `You did not put anything`;
        document.getElementById('user_msg').className = "green";        
    	// let randomPlace = Object.keys(people_in_place)[Math.floor(Math.random() * people_in_place.length)];
    	// console.log(Math.floor(Math.random() * people_in_place.length));
        // replyMsg(randomPlace);        
    }
    else if(matching_place.length == 0){
        funFacts();
    }
    else {
    	for(var i = 0; i < matching_place.length; i++) {
    	let place_name = matching_place[i];
    	replyMsg(place_name);
   		}
    } 
}

function replyMsg(place_name) {
	let place = people_in_place[place_name];
    let subAnswer = `${titleCase(place_name)} currenly has ${place["numberOfPeople"]} number of people
    , the risk level is considered ${place["risk level"]}.
    The travel distance from your location to ${titleCase(place_name)} at ${place["location"]} is ${place["travel distance"]}. 
    ${place["advice"]}.`;
    document.getElementById('reply_msg').innerHTML += "<li>" + subAnswer + "<br />" + "</li>";
}

function makePlaceInfo(numPeople, distance, location) {
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
        risk = "moderate";
        advice = "You can go but avoid the crowds."
    }
    return {
        "numberOfPeople": numPeople,
        "travel distance": distance,
        "location": location,
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

function funFacts() {
    let funFacts = ["Peanuts aren't technically nuts", "The longest English word is 189,819 letters long", "Cows don’t have upper front teeth", 
    "Only a quarter of the Sahara Desert is sandy","There were active volcanoes on the moon when dinosaurs were alive","Avocados were named after reproductive organs",
    "You only have two body parts that never stop growing","Bees can fly higher than Mount Everest","The wood frog can hold its pee for up to eight months",
    "You lose up to 30 percent of your taste buds during flight", "Your nostrils work one at a time", "Cotton candy was invented by a dentist", 
    "7% of American adults believe that chocolate milk comes from brown cows","Car manufacturer Volkswagen makes sausages", "McDonald's once created bubblegum-flavored broccoli",
    "The longest place name in the world is 85 letters long", "Bubble wrap was originally invented as wallpaper","Shakespeare invented more than 1,700 words", 
    "Einstein's brain was stolen when he died", "Lady Liberty wears a size 879 shoe", "There's a planet that's shaped like a potato", "It only takes six minutes for alcohol to affect your brain",
    "It would cost $18.3 million to make a replica Darth Vader suit" ];
    let randomNumber = Math.floor((Math.random()) * 23);
    document.getElementById('reply_msg').innerHTML = "<li>" + "Interesting fact: " + funFacts[randomNumber] + "." + "</li>";

}