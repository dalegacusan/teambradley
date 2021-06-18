// Comment
let add = () => {
	let comment = document.querySelector('.input-group #comment');

	if (comment.value != "") {

		let list = document.querySelector('.list');
		let time = new Date();
		let h = time.getHours();
		let m = time.getMinutes();
		let month = time.getUTCMonth() + 1; //months from 1-12
		let day = time.getUTCDate();
		let year = time.getUTCFullYear();
		let now = `${year + "/" + month + "/" + day + ", " + h + ":" + m}`
		let list_item = document.createElement("l1");

		list_item.innerHTML = `
    <div>
        <div class="row">
            <div class="col-2">
                <img class="image-learn" src="https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"/>
              
            </div>
            <div class="col-10">
            <p style="margin-top:35px;"><span class="fw-bold">John Doe</span> <span style="font-size: 12px;">${now}</span></p>
            <p>${comment.value}</p>
            <p style="color:#2097F3; cursor:pointer;">Reply</p>
            <hr>
            </div>
        </div>
    </div>
    `;
		list.append(list_item);
	}

	if (comment.value == "") {
		let list = document.querySelector('.list');
		let list_item = document.createElement("l2");
		var warn = 'Please type a comment!';
		list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
		list.append(list_item);
	}
	comment.value = "";
}
//Module Content Clicker
let button = (modulenumber) => {

	const shows = document.getElementById("default");
	const def = document.getElementById("default1");
	const content = document.getElementById("content1");


	if (modulenumber == 1) {
		shows.style.display = 'block';
		content.style.display = 'none';
		parent.document.getElementById("default1").src = "https://www.youtube.com/embed/oigfaZ5ApsM";

	}
	else if (modulenumber == 2) {
		shows.style.display = 'block';
		content.style.display = 'none';
		parent.document.getElementById("default1").src = "https://www.youtube.com/embed/gnkrDse9QKc";
	}
	else if (modulenumber == 3) {
		shows.style.display = "none";
		content.style.display = "block";
	}
}


//Timer
var start = document.querySelector(".start");
var reset = document.querySelector(".reset");
var pause = document.querySelector(".pause");

var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".seconds");

// Store a reference to the variable
var startTimer = null;

function timer() {
	if (hour.value == 0 && minute.value == 0 && second.value == 0) {

		hour.value = 0;
		minute.value = 0;
		second.value = 0;
	} else if (second.value != 0) {
		second.value--;
	} else if (minute.value != 0 && second.value == 0) {
		second.value = 59;
		minute.value--;
	} else if (hour.value != 0 && minute.value == 0) {
		minute.value = 59;
		hour.value--;

	}
	return;
}

function StopTimer() {
	clearInterval(startTimer);
}

function PauseTime() {
	clearTimeout(startTimer);
	h.textContent = hour.value + ":";
	m.textContent = minute.value + ":";
	s.textContent = second.value;
}

start.addEventListener('click', function () {
	//initial the variable startTimer
	function startInterval() {
		startTimer = setInterval(() => {
			timer();
		}, 1000);
	}
	startInterval();
})

reset.addEventListener('click', function () {
	hour.value = 0;
	minute.value = 0;
	second.value = 0;
	StopTimer();
})

pause.addEventListener('click', function () {
	PauseTime();
})

//Timer2
var start2 = document.querySelector(".start2");
var reset2 = document.querySelector(".reset2");
var pause2 = document.querySelector(".pause2");

var h2 = document.getElementById('h2');
var m2 = document.getElementById('m2');
var s2 = document.getElementById('s2');

var hour2 = document.querySelector(".hour2");
var minute2 = document.querySelector(".minute2");
var second2 = document.querySelector(".seconds2");

// Store a reference to the variable
var startTimer2 = null;

function timer2() {
	if (hour2.value == 0 && minute2.value == 0 && second2.value == 0) {

		hour2.value = 0;
		minute2.value = 0;
		second2.value = 0;
	} else if (second2.value != 0) {
		second2.value--;
	} else if (minute2.value != 0 && second2.value == 0) {
		second2.value = 59;
		minute2.value--;
	} else if (hour2.value != 0 && minute2.value == 0) {
		minute2.value = 59;
		hour2.value--;

	}
	return;
}

function StopTimer2() {
	clearInterval(startTimer2);
}

function PauseTime2() {
	clearTimeout(startTimer2);
	h2.textContent = hour2.value + ":";
	m2.textContent = minute2.value + ":";
	s2.textContent = second2.value;
}

start2.addEventListener('click', function () {
	//initial the variable startTimer
	function startInterval2() {
		startTimer2 = setInterval(() => {
			timer2();
		}, 1000);
	}
	startInterval2();
})

reset2.addEventListener('click', function () {
	hour2.value = 0;
	minute2.value = 0;
	second2.value = 0;
	StopTimer2();
})

pause2.addEventListener('click', function () {
	PauseTime2();
})



//Show Timer
var isclick = false;
var timershow = document.querySelector(".timerjs");
function showtimer() {

	if (isclick == true) {
		timershow.style.display = 'none';
		isclick = false;
	} else {
		isclick = true;
		timershow.style.display = 'block';
	}

	console.log(isclick);
}

var isclick1 = false;
var timershow1 = document.querySelector(".timerjs1");

function showtimer1() {
	if (isclick1 == true) {
		timershow1.style.display = 'none';
		isclick1 = false;
	} else {
		isclick1 = true;
		timershow1.style.display = 'block';
	}

	console.log(isclick1);
}

var isclick2 = false;
var timershow2 = document.querySelector(".timerjs2");

function showtimer2() {
	if (isclick2 == true) {
		timershow2.style.display = 'none';
		isclick2 = false;
	} else {
		isclick2 = true;
		timershow2.style.display = 'block';
	}

	console.log(isclick2);
}

var isclick3 = false;
var timershow3 = document.querySelector(".timerjs3");

function showtimer3() {
	if (isclick3 == true) {
		timershow3.style.display = 'none';
		isclick3 = false;
	} else {
		isclick3 = true;
		timershow3.style.display = 'block';
	}

	console.log(isclick3);
}

var isclick4 = false;
var timershow4 = document.querySelector(".timerjs4");

function showtimer4() {
	if (isclick4 == true) {
		timershow4.style.display = 'none';
		isclick4 = false;
	} else {
		isclick4 = true;
		timershow4.style.display = 'block';
	}

	console.log(isclick4);
}
