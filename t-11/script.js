class Student {
	constructor(name="", surname="", score=0){
		this.name = name;
		this.surname = surname;
		this.score = +score;
	}

	get info(){
		return `Имя: ${this.name}, Фамилия: ${this.surname}, Оценка: ${this.score};`;
	}

	static allInfo(arr){
		let text = "";
		for (var i = 0; i < arr.length; i++) {
			text += `${arr[i].info}<br>`;
		}
		
		return text;
	}

	static avg(arr){
		let sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i].score;
		}

		return sum / arr.length;
	}
}

function addStudent(){
	let name = document.querySelector("#name").value;
	let surname = document.querySelector("#surname").value;
	let score = document.querySelector("#score").value;
	let student = new Student(name, surname, score);
	students.push(student);
}

function clearInput(){
	document.querySelector("#name").value = "";
	document.querySelector("#surname").value = "";
	document.querySelector("#score").value = "";
}

function addButtonClick(){
	addStudent()
	document.querySelector("p").innerHTML = Student.allInfo(students);
	document.querySelector("#avg").innerHTML = `Средняя оценка: ${Student.avg(students)}`;
	clearInput()
}

let students = [];
document.querySelector("#createButton").onclick = addButtonClick;


