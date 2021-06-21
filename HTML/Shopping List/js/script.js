var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var ulButtons = document.querySelector("ul.buttons");

/* 1. If you click on the list item, it toggles the .done  class on and off. */

var items = document.querySelectorAll("ul.items li");

function appendItemEvent(){
	items.forEach(function(current){
		current.addEventListener("click", function(){
			this.classList.toggle("done");
		});
	});
}

/* 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button. */

var buttons = document.querySelectorAll(".buttons button");

function appendButtonEvent(){
	buttons.forEach(function(current, index){
		current.addEventListener("click", function(){
			this.remove();
			items[index].remove();
		});
	});
}

/* 3. BONUS: When adding a new list item, it automatically adds the delete button
next to it (hint: be sure to check if new items are clickable too!) */


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	ulButtons.appendChild(deleteButton);

	items = document.querySelectorAll("ul.items li");
	appendItemEvent();

	buttons = document.querySelectorAll(".buttons button");
	appendButtonEvent();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

document.addEventListener("ready", function(){
	appendItemEvent();
	appendButtonEvent();
});
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
