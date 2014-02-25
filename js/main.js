/**
 *  Main functionality. UI interaction should be in ../script.js. 
 */

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
    window.localStorage.get
}

/** populate entries into differnet catagories.
 */
function populateCatagories(){
    
}

/** "Delete"(hide) entry
 */
function deleteEntry(id){
    window.localStorage.removeItem(id);
}

/** Check/uncheck entry
 */
function checkEntry(id){
    var thisItem = window.localStorage.getItem(id);
    thisItem.check = true;
    window.localStorage.setItem(id, thisItem);
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
