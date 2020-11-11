var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var flag = 0;
var table = document.querySelector("table");
var warningText = "Введите корректное количество";

function invert(number) {
	$(`#td${number}`).text(~$(`#td${number}`).text());
}

$(function(){
	$("button").bind("click", function() {
		let count = parseInt($("input").val());

		if (!isNaN(count)){
			var tr = $("<tr></tr>");

			for (let i = 0; i < count; i++){
				let td = `<td id="td${i}">${arr[i]}</td>`;
				let input = `<input id="check${i}" type="checkbox" onclick="invert(${i})"/>`;
				tr.append(td);
				tr.append(input);
			}

			if (flag){
				$("table > tr").replaceWith(tr);
			}
			else{
				$("table").append(tr);
				flag = 1;
			}	
		}
	})

	$("input").bind("blur", function(){
		let count = parseInt($("input").val());

		if (isNaN(count)){
			$("#warning").text(warningText);
		}
		else {
			$("#warning").text("");
			if (count > arr.length) {
				$("input").val(arr.length);
			}
		}
	})
});
