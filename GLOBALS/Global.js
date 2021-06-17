
const titleC = document.getElementById('titleContent');

let displayCourseName = () => {
	const courseNameSection = localStorage.getItem("courseNameSection");
	titleC.textContent = courseNameSection;
}