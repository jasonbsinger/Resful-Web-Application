var library = [];

jQuery(document).ready(function() {

	displayTable();
});

/************* displayTable ***************/

function displayTable() {
	
};

/************* Create ***************/

function createBook(event) {
	event.preventDefault();

};

/************* Read ***************/

function showBookDetails(event) {
	event.preventDefault();

};


function getBookDetails(event) {
	event.preventDefault();

};

/************* Update ***************/

function updateBook(event){
  	event.preventDefault();

};

/************* Delete ***************/

function deleteBook(event) {
  	event.preventDefault();

};

/************* Change between create and update ***************/

function changeView(){
	jQuery('#addWrapper').toggle();
	jQuery('#updateWrapper').toggle();
};