
const titleC = document.getElementById('titleContent');
const titleTextGrades = document.querySelector('.titleTextGrades');
const titleQuizGrades = document.querySelector('.titleQuizGrades');
const titleDropBox = document.querySelector('.titleDropBox');
const titleCalendar = document.querySelector('.titleCalendar');

let displayCourseName = () => {
	const courseNameSection = localStorage.getItem("courseNameSection");

	titleC.textContent = courseNameSection;
}

let displayGradeCourseName = () => {
	const courseNameSection = localStorage.getItem("courseNameSection");

	titleTextGrades.textContent = courseNameSection;

}

let displayQuizCourseName = () => {
	const courseNameSection = localStorage.getItem("courseNameSection");

	titleQuizGrades.textContent = courseNameSection;

}

let displayDropboxCourseName = () => {
	const courseNameSection = localStorage.getItem("courseNameSection");

	titleDropBox.textContent = courseNameSection;

}

let displayCalendarCourseName = () => {
	const courseNameSection = localStorage.getItem("courseNameSection");

	titleCalendar.textContent = courseNameSection;

}

const renderHomePage = () => {
	const courseNameSection = localStorage.getItem("courseNameSection");

	if (courseNameSection === "DSTALGO OTI003 20214") {
		window.location.replace("/CourseHome/DSTALGO/index.html");
	} else if (courseNameSection === "PEFORTS OTI004 21980") {
		window.location.replace("/CourseHome/PEFORTS/index.html");
	} else if (courseNameSection === "CSBLIFE OTO000 201904") {
		window.location.replace("/CourseHome/CSBLIFE/index.html");
	} else if (courseNameSection === "MANSTRA OTP012 202012") {
		window.location.replace("/CourseHome/MANSTRA/index.html");
	} else if (courseNameSection === "ITINFRA OT0112 201918") {
		window.location.replace("/CourseHome/ITINFRA/index.html");
	} else if (courseNameSection === "INTEFIL ISD890 202289") {
		window.location.replace("/CourseHome/INTEFIL/index.html");
	} else {
		window.location.replace("/Dashboard/index.html");
	}

}

// Calendar
let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
	return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
	return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

	let calendar_days = calendar.querySelector('.calendar-days')
	let calendar_header_year = calendar.querySelector('#year')

	let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

	calendar_days.innerHTML = ''

	let currDate = new Date()
	if (!month && month != '0') month = currDate.getMonth()
	if (!year) year = currDate.getFullYear()

	let curr_month = `${month_names[month]}`
	month_picker.innerHTML = curr_month
	calendar_header_year.innerHTML = year

	// get first day of month

	let first_day = new Date(year, month, 1)

	for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
		let day = document.createElement('div')
		if (i >= first_day.getDay()) {
			day.classList.add('calendar-day-hover')
			day.innerHTML = i - first_day.getDay() + 1
			day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
			if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
				day.classList.add('curr-date')
			}
		}
		calendar_days.appendChild(day)
	}
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
	let month = document.createElement('div')
	month.innerHTML = `<div data-month="${index}">${e}</div>`
	month.querySelector('div').onclick = () => {
		month_list.classList.remove('show')
		curr_month.value = index
		generateCalendar(index, curr_year.value)
	}
	month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
	month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = { value: currDate.getMonth() }
let curr_year = { value: currDate.getFullYear() }

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
	--curr_year.value
	generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
	++curr_year.value
	generateCalendar(curr_month.value, curr_year.value)
}

let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
	document.querySelector('body').classList.toggle('light')
	document.querySelector('body').classList.toggle('dark')
}

$(document).ready(function () {

	"use strict";

	var todo = function () {
		$('.todo-list .todo-item input').click(function () {
			if ($(this).is(':checked')) {
				$(this).parent().parent().parent().toggleClass('complete');
			} else {
				$(this).parent().parent().parent().toggleClass('complete');
			}
		});

		$('.todo-nav .all-task').click(function () {
			$('.todo-list').removeClass('only-active');
			$('.todo-list').removeClass('only-complete');
			$('.todo-nav li.active').removeClass('active');
			$(this).addClass('active');
		});

		$('.todo-nav .active-task').click(function () {
			$('.todo-list').removeClass('only-complete');
			$('.todo-list').addClass('only-active');
			$('.todo-nav li.active').removeClass('active');
			$(this).addClass('active');
		});

		$('.todo-nav .completed-task').click(function () {
			$('.todo-list').removeClass('only-active');
			$('.todo-list').addClass('only-complete');
			$('.todo-nav li.active').removeClass('active');
			$(this).addClass('active');
		});

		$('#uniform-all-complete input').click(function () {
			if ($(this).is(':checked')) {
				$('.todo-item .checker span:not(.checked) input').click();
			} else {
				$('.todo-item .checker span.checked input').click();
			}
		});

		$('.remove-todo-item').click(function () {
			$(this).parent().remove();
		});
	};

	todo();

	$(".add-task").keypress(function (e) {
		if ((e.which == 13) && (!$(this).val().length == 0)) {
			$('<div class="todo-item"><div class="checker"><span class=""><input type="checkbox"></span></div> <span>' + $(this).val() + '</span> <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a></div>').insertAfter('.todo-list .todo-item:last-child');
			$(this).val('');
		} else if (e.which == 13) {
			alert('Please enter new task');
		}
		$(document).on('.todo-list .todo-item.added input').click(function () {
			if ($(this).is(':checked')) {
				$(this).parent().parent().parent().toggleClass('complete');
			} else {
				$(this).parent().parent().parent().toggleClass('complete');
			}
		});
		$('.todo-list .todo-item.added .remove-todo-item').click(function () {
			$(this).parent().remove();
		});
	});
});