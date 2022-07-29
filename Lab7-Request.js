var insertButton = document.getElementById("insert");
var container = document.getElementById("container");
var searchInput = document.getElementById("input");

var req = new XMLHttpRequest();
req.onreadystatechange = function () {
	var dataArray = [];
	if (req.readyState == 4 && req.status == 200) {
		dataArray = JSON.parse(req.responseText);
		console.log(dataArray);
	}
	insertButton.addEventListener("click", () => {
		dataArray.forEach((e) => {
			createElement(e);
		});
		insertButton.disabled = true;
	});
	searchInput.addEventListener("keyup", () => {
		container.innerHTML = "";
		var result = dataArray.filter(function (e) {
			return e.title.startsWith(searchInput.value);
		});
		result.forEach((e) => {
			createElement(e);
		});
	});
};

req.open("GET", "https://jsonplaceholder.typicode.com/todos");
req.send();

function createElement(obj) {
	var container = document.getElementById("container");
	var content = document.createElement("div");

	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var span3 = document.createElement("span");
	var span4 = document.createElement("span");

	content.classList = "content";

	span1.textContent = obj.userId;
	span2.textContent = obj.id;
	span3.textContent = obj.title;
	span4.textContent = obj.completed;

	content.appendChild(span1);
	content.appendChild(span2);
	content.appendChild(span3);
	content.appendChild(span4);

	container.appendChild(content);
}
