const students = [
	{
		name: "Carson, Alexandra",
		course: "IL-CX",
		idNumber: "80870201",
		role: "Student",
		imageLink: "https://picsum.photos/id/123/40/40"
	},
	{
		name: "Dudley, Krishan",
		course: "GM-AH",
		idNumber: "23617105",
		role: "Student",
		imageLink: "https://picsum.photos/id/123/40/40"
	},
	{
		name: "Rodgers, Kien",
		course: "AI-UX",
		idNumber: "99844498",
		role: "Student",
		imageLink: "https://picsum.photos/id/66/40/40"
	},
	{
		name: "Wolf, Keegan",
		course: "HI-RR",
		idNumber: "35513387",
		role: "Student",
		imageLink: "https://picsum.photos/id/555/40/40"
	},
	{
		name: "Lucero, Aniela",
		course: "AX-NM",
		idNumber: "91647369",
		role: "Student",
		imageLink: "https://picsum.photos/id/222/40/40"
	},
	{
		name: "Parkes, Hawa",
		course: "NF-MB",
		idNumber: "20926246",
		role: "Student",
		imageLink: "https://picsum.photos/id/111/40/40"
	},
	{
		name: "Redmond, Tiago",
		course: "OG-FV",
		idNumber: "27874960",
		role: "Student",
		imageLink: "https://picsum.photos/id/335/40/40"
	},
	{
		name: "Rodriguez, Leona",
		course: "OO-OB",
		idNumber: "82331579",
		role: "Student",
		imageLink: "https://picsum.photos/id/123/40/40"
	},
	{
		name: "Short, Priyanka",
		course: "LK-JK",
		idNumber: "92080460",
		role: "Student",
		imageLink: "https://picsum.photos/id/987/40/40"
	},
	{
		name: "Estrada, Samira",
		course: "LJ-GA",
		idNumber: "21463122",
		role: "Student",
		imageLink: "https://picsum.photos/id/455/40/40"
	},
	{
		name: "Brown, Madeleine",
		course: "XO-GO",
		idNumber: "12007835",
		role: "Student",
		imageLink: "https://picsum.photos/id/384/40/40"
	},
	{
		name: "Weston, Hanna",
		course: "QD-DO",
		idNumber: "57412766",
		role: "Student",
		imageLink: "https://picsum.photos/id/1/40/40"
	},
	{
		name: "Couch, Tasnia",
		course: "YN-LJ",
		idNumber: "13158723",
		role: "Student",
		imageLink: "https://picsum.photos/id/50/40/40"
	},
	{
		name: "Kaur, Alastair",
		course: "FN-EI",
		idNumber: "06121934",
		role: "Student",
		imageLink: "https://picsum.photos/id/800/40/40"
	},
	{
		name: "Figueroa, Tamanna",
		course: "IQ-RZ",
		idNumber: "00423153",
		role: "Student",
		imageLink: "https://picsum.photos/id/988/40/40"
	},
	{
		name: "Curtis, Emma",
		course: "HL-HK",
		idNumber: "96168254",
		role: "Student",
		imageLink: "https://picsum.photos/id/188/40/40"
	},
	{
		name: "Thorpe, Ellisha",
		course: "LS-PZ",
		idNumber: "79787171",
		role: "Student",
		imageLink: "https://picsum.photos/id/322/40/40"
	},
	{
		name: "Woodcock, Ranveer",
		course: "VF-IM",
		idNumber: "14789073",
		role: "Student",
		imageLink: "https://picsum.photos/id/433/40/40"
	},
	{
		name: "George, Kayden",
		course: "IR-LN",
		idNumber: "06199372",
		role: "Student",
		imageLink: "https://picsum.photos/id/145/40/40"
	},
	{
		name: "Mccartney, Sapphire",
		course: "AJ-TY",
		idNumber: "75383727",
		role: "Student",
		imageLink: "https://picsum.photos/id/200/40/40"
	},
	{
		name: "Dunkley, Desiree",
		course: "JF-TR",
		idNumber: "63852575",
		role: "Student",
		imageLink: "https://picsum.photos/id/201/40/40"
	},
	{
		name: "Barclay, Kyla",
		course: "OD-TW",
		idNumber: "29375102",
		role: "Student",
		imageLink: "https://picsum.photos/id/202/40/40"
	},
	{
		name: "Hodson, Ramon",
		course: "IOE-FD",
		idNumber: "38591037",
		role: "Student",
		imageLink: "https://picsum.photos/id/203/40/40"
	}
];

const randomAwards = ["Most Disciplined", "Most Punctual", "Dean's List", "High Scorer", "Good Friend Awardee", "Helping Hand Awardee", "Excellent Effort Award", "Awesome Attitude Awardee", "Perfect Attendance"];
const bootstrapBadgeColors = ["secondary", "danger", "warning", "info", "dark"];

const generateRandomNumberForColor = () => {
	return Math.floor(Math.random() * bootstrapBadgeColors.length)
}

const generateClassList = () => {
	const max = students.length;
	const min = 8;
	const randomNumber = Math.floor(Math.random() * (max - min) + min);
	const classListTBody = document.querySelector(".classListTBody");
	const randomStudents = getRandom(randomNumber);

	randomStudents.forEach((student) => {
		const newTr = document.createElement("tr");
		const randomNumberForAwards = Math.floor(Math.random() * randomAwards.length);

		const img = document.createElement("img");
		img.setAttribute("src", student.imageLink);

		const th = document.createElement("th");
		th.setAttribute("scope", "row");
		th.appendChild(img);

		const td1 = document.createElement("td");
		td1.innerHTML = `<span>${student.name}</span> ${Math.random() < 0.5 ? `<span class="dot"></span>` : ""}`;

		const td2 = document.createElement("td");
		td2.textContent = student.idNumber;

		const td3 = document.createElement("td");
		td3.innerHTML = `${student.role === "Student" && `
		<span class="badge bg-primary">Student</span> 
		<span class="badge bg-success">${student.course}</span>
		${Math.random() < 0.4 ? `<span class="badge bg-${bootstrapBadgeColors[generateRandomNumberForColor()]}">${randomAwards[randomNumberForAwards]}</span>` : ""}
		`}`;

		newTr.appendChild(th);
		newTr.appendChild(td1);
		newTr.appendChild(td2);
		newTr.appendChild(td3);
		classListTBody.appendChild(newTr);
	})

}

function getRandom(n) {
	var result = new Array(n),
		len = students.length,
		taken = new Array(len);
	if (n > len)
		throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
		var x = Math.floor(Math.random() * len);
		result[n] = students[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}

generateClassList();