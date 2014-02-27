
$(document).ready(function(){//when the page is loaded. put all listeners here.
	
	$('.editWindow').hide();
	
	$(".createEntry").click(function(){
		editWindow();
		//brand new entry
		curEntry = new Entry( $('#newEntryName').text() );
		$('h3.newName').text(curEntry.name);
	});
	
	$(".entries").click(function(){
		editWindow();
		//also need to load info of that entry
	});
	
	$(".done").click(function(){
		//populate the entry
		curEntry.name = $('#newEntryName').text();
		curEntry.description = $('.entryDescription').text();
		curEntry.remindDateTime = $('.timeRemind').val();

		if(curEntry.id == null){
			var counter = entries.length + deleted.length + completed.length;
			if( counter > 0 ){
				var lastKey = window.localStorage.key(counter);
				curEntry.id = parseInt(lastKey) + 1;
			}else{
				curEntry.id = 0;
			}
		}
		alert(curEntry.id);
		//save entry and show home screen
		saveEntry(curEntry.id, curEntry);
		showMainWindow();
	});
	
	/*
	$('.timeRemind').click(function(){
		$('.timeRemind').datetimepicker({
			pick12HourFormat: true
		});
	});
	*/
	
	$('.timeRemind').datetimepicker({
		pick12HourFormat: true
	});
});

function editWindow(){
	//show edit window
	showEditWindow();
	//populate fields
	populateEntryEdit();
}

function showEditWindow(){
	$('#container').hide();
	$('.editWindow').show();
}

function showMainWindow(){
	$('#container').show();
	$('.editWindow').hide();
}

function populateEntryEdit(){

}