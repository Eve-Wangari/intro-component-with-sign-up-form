const inputs = document.querySelectorAll(".input");
const messages = document.querySelectorAll(".error-msg");
const form = document.querySelector(".my-form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	inputs.forEach((input) => {
		if (input.value === "") {
			input.classList.add("input-error");

			messages.forEach((message) => {
				if (message.classList.contains(`${input.dataset.id}`)) {
					message.style.display = "block";
				}
			});
		}
	});

	setTimeout(() => {
        removeErrorClass()
        removeMsg()
		form.reset();
	}, 2000);
});

function removeErrorClass(){
    inputs.forEach((input) => input.classList.remove("input-error"));

}
function removeMsg(){
    messages.forEach((message) => (message.style.display = "none"));


}