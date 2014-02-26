/**
 *  Main functionality. UI interaction should be in ../script.js. 
 */
var curEntry = null;
var entries = new Array();
var today = new Array();
var tomorrow = new Array();
var today = new Array();
var yesterday = new Array();
var completed = new Array();
localInitialization();


/** Retrieve data from local storage
 */
function retrieveData(){
    var numStored = window.localStorage.length;
    //for(){
    	//window.localStorage.key(i) --get the key, and then use this key to get value
    	//then populate "entries" array, while put the delted and completed ones into their only array(user dont need them intensively)
    //}
}

/** populate entries into differnet catagories.
 */
function populateCatagories(){
    //base on an attributes so that we dont need to put them to other arraies?
}

/** "Delete"(hide) entry, set "deleted" to true;
 */
function deleteEntry(id){
    window.localStorage.getItem(id);
}

/** Check/uncheck entry
 */
function checkEntry(id){
    var thisItem = window.localStorage.getItem(id);
    thisItem.check = true;
    window.localStorage.setItem(id, thisItem)
}

/** Save entry
 */
function saveEntry(id, obj){
	window.localStorage.setItem(id, obj);
}

function localInitialization(){
	if(window.localStorage){
		console.log("browser support localStorage");
	}else{
		console.log('cookie please~ :3');
	}

}
