const ITINFRA = {
	courseName: "ITINFRA",
	section: "ITINFRA OT0112 201918",
	announcements: [
		{
			announcementTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing",
			description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
			datePosted: "June 2, 2021 5:04 PM"
		},
		{
			announcementTitle: "At vero eos et accusamus et iusto odio dignissimos ",
			description: "est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
			datePosted: "March 3, 2021 7:30 AM"
		},
		{
			announcementTitle: "Nemo enim ipsam voluptatem quia voluptas",
			description: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
			datePosted: "February 12, 2021 12:30 PM"
		}
	],
	upcomingEvents: [
		{
			eventDate: "January 24 12:00 PM",
			eventName: "Income Statement",
			dropboxLink: "/Drop-box/Drop-box.html"
		},
		{
			eventDate: "June 25 8:00 AM",
			eventName: "Final Examination - Software Architecture",
			dropboxLink: "/Drop-box/Drop-box.html"
		}
	],
	nextSynchronousSession: {
		sessionDate: "May 29, 2019",
		sessionDay: "Thursday",
		sessionTime: "3:00 - 4:10 pm",
		videoCallLink: "https://meet.google.com/ogp-yurk-dif"
	},
	professor: {
		firstName: "Ryan",
		lastName: "Cartano",
		emailAddress: "ryan.cartano@org.edu.xyz",
		profilePictureLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10PKiP_JgIwAEgEN0iQjXUcx0HfCFmuB-rRDZQkj-0GxtZgb7hZmX9Ks4HEAAgY0832w&usqp=CAU",
		consultation: {
			SUN: {
				day: "SUN",
				available: false
			},
			MON: {
				day: "MON",
				available: true
			},
			TUE: {
				day: "TUE",
				available: true
			},
			WED: {
				day: "WED",
				available: true
			},
			THUR: {
				day: "THU",
				available: true
			},
			FRI: {
				day: "FRI",
				available: true
			},
			SAT: {
				day: "SAT",
				available: false
			}
		}
	}
}

const displayAnnouncements = () => {
	const announcementsContainer = document.querySelector(".announcements");

	ITINFRA.announcements.forEach((announcement) => {

		const newRow = document.createElement("div");
		newRow.innerHTML = `
									<div class="row" style="height: 80px">
										<div class="col-8">
											<!-- Announcement Card -->
											<div style="font-size: 12px; margin: 5px 0">
												<div class="row">
													<div class="col-2">
														<img
															src="/GLOBALS/images/megaphone.png"
															width="40"
															style="margin-top: 13px"
														/>
													</div>
													<div class="col-10">
														<p
															style="
																margin: 2px 0;
																padding: 0;
																font-weight: bold;
															"
														>
															${announcement.announcementTitle}
														</p>
														<p style="margin: 0; padding: 0">
															${announcement.description}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div class="col-4">
											<!-- Date Posted DIV -->
											<div
												style="font-size: 12px; height: 100px; margin: 20px 0"
											>
												<p>${announcement.datePosted}</p>
											</div>
										</div>
									</div>
		`

		announcementsContainer.appendChild(newRow);

	});
}

const displayNextSyncSession = () => {
	const nextSyncSessionBodyContainer = document.querySelector(".nextSyncSessionBodyContainer");

	nextSyncSessionBodyContainer.innerHTML = `

			<h4>Next Synchronous Session</h4>
			<div
				style="
					border-bottom: 1px solid black;
					width: 90px;
					height: 7px;
					margin-bottom: 14px;
				"
			>
				&nbsp;
			</div>
			<div>
				<h3 style="color: #2097f3">${ITINFRA.nextSynchronousSession.sessionDate}</h3>
				<p>${ITINFRA.nextSynchronousSession.sessionDay}, ${ITINFRA.nextSynchronousSession.sessionTime}</p>
				<p style="margin: 0; font-size: 12px; color: #484848">
					Video Call Link
				</p>
				<a href="${ITINFRA.nextSynchronousSession.videoCallLink}"
					>${ITINFRA.nextSynchronousSession.videoCallLink}</a
				>
			</div>

	`
}

const displayCourseInstructor = () => {
	const courseInstructorContainer = document.querySelector(".courseInstructorInformation");

	courseInstructorContainer.innerHTML = `
	<!-- Instructor Information -->
	<div class="row">
		<div class="col-2">
			<img src="${ITINFRA.professor.profilePictureLink}" width="60" class="rounded-circle"/>
		</div>
		<div class="col-10">
			<p style="margin: 4px 2px 0 2px;"><img src="/GLOBALS//images/user.png" width="16" style="margin: -3px 20px 0 0"/> ${ITINFRA.professor.firstName} ${ITINFRA.professor.lastName}</p>
			<p style="margin: 0 2px;"><img src="/GLOBALS//images/email.png" width="16" style="margin: -3px 20px 0 0"/> <a href="mailto:${ITINFRA.professor.emailAddress}">${ITINFRA.professor.emailAddress}</a></p>
		</div>
	</div>
	<!-- Consulatation -->
	<div class="row mt-4">
		<div class="col-12">
			<h5 class="mb-3">Consultation</h5>
			<table class="table table-bordered text-center" style="font-size: 12px; border: 1px solid #8B8B8B;">
				<tbody>
					<tr>
						<td scope="col" class="${ITINFRA.professor.consultation.SUN.available && 'activeConsultationDay'}">${ITINFRA.professor.consultation.SUN.day}</td>
						<td scope="col" class="${ITINFRA.professor.consultation.MON.available && 'activeConsultationDay'}">${ITINFRA.professor.consultation.MON.day}</td>
						<td scope="col" class="${ITINFRA.professor.consultation.TUE.available && 'activeConsultationDay'}">${ITINFRA.professor.consultation.TUE.day}</td>
						<td scope="col" class="${ITINFRA.professor.consultation.WED.available && 'activeConsultationDay'}">${ITINFRA.professor.consultation.WED.day}</td>
						<td scope="col" class="${ITINFRA.professor.consultation.THUR.available && 'activeConsultationDay'}">${ITINFRA.professor.consultation.THUR.day}</td>
						<td scope="col" class="${ITINFRA.professor.consultation.FRI.available && 'activeConsultationDay'}">${ITINFRA.professor.consultation.FRI.day}</td>
						<td scope="col" class="${ITINFRA.professor.consultation.SAT.available && 'activeConsultationDay'}">${ITINFRA.professor.consultation.SAT.day}</td>
					</tr>
				</tbody>
				</table>
		</div>
	</div>
	`;
}

const displayUpcomingEvents = () => {
	const upcomingEventsContainer = document.querySelector(".upcomingEventsContainer");

	ITINFRA.upcomingEvents.forEach((event) => {

		const newEventRow = document.createElement("div");
		newEventRow.classList.add("row");
		newEventRow.innerHTML = `
									<div class="row mb-2">
										<!-- Date -->
										<div class="col-3">
											<span class="text-center date">${event.eventDate}</span>
										</div>
										<!-- Event Name -->
										<div class="col-6">${event.eventName}</div>
										<!-- Go To Dropbox -->
										<div class="col-2">
											<a href="${event.dropboxLink}">
												<button type="button">Dropbox</button>
											</a>
										</div>
									</div>
		`;

		upcomingEventsContainer.appendChild(newEventRow);
	});
}

const displaySubjectInformation = () => {
	displayAnnouncements();
	displayNextSyncSession();
	displayCourseInstructor();
	displayUpcomingEvents();
}