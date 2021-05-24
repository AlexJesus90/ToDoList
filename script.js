const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	const deleteBTN = document.createElement('BUTTON');
	deleteBTN.textContent = "delete";
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteBTN);
	ul.appendChild(li);
	input.value = "";
	deleteBTN.addEventListener('click', function() {
		li.classList.toggle('remove');
	})
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

for (let i = 0; i < li.length; i++) {
	const deleteBTN = document.createElement('BUTTON');
	deleteBTN.textContent = "delete";
	li[i].appendChild(deleteBTN);
	li[i].addEventListener('click', function() {
		li[i].classList.toggle('remove');
		
	})
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);