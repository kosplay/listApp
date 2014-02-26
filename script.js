
$(document).ready(function(){
	
	$('.editWindow').hide();
	
	$(".createEntry").click(function(){
		editWindow();
		//brand new entry
		curEntry = new Entry( $('#newEntryName').text() );
	});
	
	$(".entries").click(function(){
		editWindow();
		//also need to load info of that entry
	});
	
	$(".done").click(function(){
		//populate the entry
		curEntry.name = $('#newEntryName').text();
		if(){//if description is not empty
		curEntry.description = '';
		}

		if(){//if reminder is not empty
		curEntry.remidDateTime = '';
		}

		//save entry and show home screen
		saveEntry(id, curEntry);
		showMainWindow();
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