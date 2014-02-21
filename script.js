
$(document).ready(function(){
	
	$('.editWindow').hide();
	
	$(".createEntry").click(function(){
		editWindow();
	});
	
	$(".entries").click(function(){
		editWindow();
	});
	
	$(".done").click(function(){
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