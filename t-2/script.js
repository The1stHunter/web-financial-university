var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var flag = 0;
var table = document.querySelector("table");
var warningText = "Введите корректное количество";

function invert(number) {
	document.querySelector(`#td${number}`).textContent = ~document.querySelector(`#td${number}`).textContent;
}

function generateTable() {
	let count = parseInt(document.querySelector("input").value);

	if (!isNaN(count)){
		var tr = document.createElement("tr");

		for (let i = 0; i < count; i++){
			tr.innerHTML += `<td id="td${i}">${arr[i]}</td>`;
			tr.innerHTML += `<input id="check${i}" type="checkbox" onclick="invert(${i})"/>`;
		}

		if (flag){
			document.querySelector("table > tr").replaceWith(tr);
		}
		else{
			document.querySelector("table").appendChild(tr);
			flag = 1;
		}	
	}
}

function checkInput() {
	let count = parseInt(document.querySelector("input").value);

	if (isNaN(count)){
		document.querySelector("#warning").textContent = warningText;
	}
	else {
		document.querySelector("#warning").textContent = "";
		if (count > arr.length) {
			document.querySelector("input").value = arr.length;
		}
	}
}

document.querySelector("input").onblur = checkInput;
document.querySelector("button").onclick = generateTable;
