const MANSTRA = {
	courseName: "MANSTRA",
	section: "MANSTRA OTP012 202012",
	announcements: [
		{
			announcementTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing",
			description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
			datePosted: "June 2, 2021 5:04 PM"
		},
	],
	upcomingEvents: [
	],
	nextSynchronousSession: {
		sessionDate: "December 15, 2021",
		sessionDay: "Friday",
		sessionTime: "12:30 - 1:50 pm",
		videoCallLink: "https://meet.google.com/oop-dgrr-ffd"
	},
	professor: {
		firstName: "Carlos",
		lastName: "de Mundo",
		emailAddress: "carlos.demundo@org.edu.xyz",
		profilePictureLink: "https://galileoenrichment.com/wp-content/uploads/2020/03/man.png",
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
				available: false
			},
			FRI: {
				day: "FRI",
				available: false
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

	MANSTRA.announcements.forEach((announcement) => {

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
				<h3 style="color: #2097f3">${MANSTRA.nextSynchronousSession.sessionDate}</h3>
				<p>${MANSTRA.nextSynchronousSession.sessionDay}, ${MANSTRA.nextSynchronousSession.sessionTime}</p>
				<p style="margin: 0; font-size: 12px; color: #484848">
					Video Call Link
				</p>
				<a href="${MANSTRA.nextSynchronousSession.videoCallLink}"
					>${MANSTRA.nextSynchronousSession.videoCallLink}</a
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
			<img src="${MANSTRA.professor.profilePictureLink}" width="60" class="rounded-circle"/>
		</div>
		<div class="col-10">
			<p style="margin: 4px 2px 0 2px;"><img src="/GLOBALS//images/user.png" width="16" style="margin: -3px 20px 0 0"/> ${MANSTRA.professor.firstName} ${MANSTRA.professor.lastName}</p>
			<p style="margin: 0 2px;"><img src="/GLOBALS//images/email.png" width="16" style="margin: -3px 20px 0 0"/> <a href="mailto:${MANSTRA.professor.emailAddress}">${MANSTRA.professor.emailAddress}</a></p>
		</div>
	</div>
	<!-- Consulatation -->
	<div class="row mt-4">
		<div class="col-12">
			<h5 class="mb-3">Consultation</h5>
			<table class="table table-bordered text-center" style="font-size: 12px; border: 1px solid #8B8B8B;">
				<tbody>
					<tr>
						<td scope="col" class="${MANSTRA.professor.consultation.SUN.available && 'activeConsultationDay'}">${MANSTRA.professor.consultation.SUN.day}</td>
						<td scope="col" class="${MANSTRA.professor.consultation.MON.available && 'activeConsultationDay'}">${MANSTRA.professor.consultation.MON.day}</td>
						<td scope="col" class="${MANSTRA.professor.consultation.TUE.available && 'activeConsultationDay'}">${MANSTRA.professor.consultation.TUE.day}</td>
						<td scope="col" class="${MANSTRA.professor.consultation.WED.available && 'activeConsultationDay'}">${MANSTRA.professor.consultation.WED.day}</td>
						<td scope="col" class="${MANSTRA.professor.consultation.THUR.available && 'activeConsultationDay'}">${MANSTRA.professor.consultation.THUR.day}</td>
						<td scope="col" class="${MANSTRA.professor.consultation.FRI.available && 'activeConsultationDay'}">${MANSTRA.professor.consultation.FRI.day}</td>
						<td scope="col" class="${MANSTRA.professor.consultation.SAT.available && 'activeConsultationDay'}">${MANSTRA.professor.consultation.SAT.day}</td>
					</tr>
				</tbody>
				</table>
		</div>
	</div>
	`;
}

const displayUpcomingEvents = () => {
	const upcomingEventsContainer = document.querySelector(".upcomingEventsContainer");

	MANSTRA.upcomingEvents.forEach((event) => {

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