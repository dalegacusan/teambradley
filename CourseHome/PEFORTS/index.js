const PEFORTS = {
	courseName: "PEFORTS",
	section: "OTI004 21980",
	announcements: [
		{
			announcementTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing",
			description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
			datePosted: "June 2, 2021 5:04 PM"
		},
		{
			announcementTitle: " Excepteur sint occaecat cupidatat non proident",
			description: "ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
			datePosted: "April 24, 2021 10:29 PM"
		},
		{
			announcementTitle: "At vero eos et accusamus et iusto odio dignissimos ",
			description: "est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
			datePosted: "March 3, 2021 7:30 AM"
		},

	],
	upcomingEvents: [

		{
			eventDate: "June 28 10:00 AM",
			eventName: "Inter-class MSW 5v5",
			dropboxLink: "#"
		}
	],
	nextSynchronousSession: {
		sessionDate: "October 12, 2021",
		sessionDay: "Monday",
		sessionTime: "6:00 - 8:00 pm",
		videoCallLink: "https://meet.google.com/ads-432d-okc"
	},
	professor: {
		firstName: "Ted",
		lastName: "Rodriguez",
		emailAddress: "ted.rodriguez@org.edu.xyz",
		profilePictureLink: "data:image/jpeg;base64,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",
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
				available: false
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

	PEFORTS.announcements.forEach((announcement) => {

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
				<h3 style="color: #2097f3">${PEFORTS.nextSynchronousSession.sessionDate}</h3>
				<p>${PEFORTS.nextSynchronousSession.sessionDay}, ${PEFORTS.nextSynchronousSession.sessionTime}</p>
				<p style="margin: 0; font-size: 12px; color: #484848">
					Video Call Link
				</p>
				<a href="${PEFORTS.nextSynchronousSession.videoCallLink}"
					>${PEFORTS.nextSynchronousSession.videoCallLink}</a
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
			<img src="${PEFORTS.professor.profilePictureLink}" width="60" class="rounded-circle"/>
		</div>
		<div class="col-10">
			<p style="margin: 4px 2px 0 2px;"><img src="/GLOBALS//images/user.png" width="16" style="margin: -3px 20px 0 0"/> ${PEFORTS.professor.firstName} ${PEFORTS.professor.lastName}</p>
			<p style="margin: 0 2px;"><img src="/GLOBALS//images/email.png" width="16" style="margin: -3px 20px 0 0"/> <a href="mailto:${PEFORTS.professor.emailAddress}">${PEFORTS.professor.emailAddress}</a></p>
		</div>
	</div>
	<!-- Consulatation -->
	<div class="row mt-4">
		<div class="col-12">
			<h5 class="mb-3">Consultation</h5>
			<table class="table table-bordered text-center" style="font-size: 12px; border: 1px solid #8B8B8B;">
				<tbody>
					<tr>
						<td scope="col" class="${PEFORTS.professor.consultation.SUN.available && 'activeConsultationDay'}">${PEFORTS.professor.consultation.SUN.day}</td>
						<td scope="col" class="${PEFORTS.professor.consultation.MON.available && 'activeConsultationDay'}">${PEFORTS.professor.consultation.MON.day}</td>
						<td scope="col" class="${PEFORTS.professor.consultation.TUE.available && 'activeConsultationDay'}">${PEFORTS.professor.consultation.TUE.day}</td>
						<td scope="col" class="${PEFORTS.professor.consultation.WED.available && 'activeConsultationDay'}">${PEFORTS.professor.consultation.WED.day}</td>
						<td scope="col" class="${PEFORTS.professor.consultation.THUR.available && 'activeConsultationDay'}">${PEFORTS.professor.consultation.THUR.day}</td>
						<td scope="col" class="${PEFORTS.professor.consultation.FRI.available && 'activeConsultationDay'}">${PEFORTS.professor.consultation.FRI.day}</td>
						<td scope="col" class="${PEFORTS.professor.consultation.SAT.available && 'activeConsultationDay'}">${PEFORTS.professor.consultation.SAT.day}</td>
					</tr>
				</tbody>
				</table>
		</div>
	</div>
	`;
}

const displayUpcomingEvents = () => {
	const upcomingEventsContainer = document.querySelector(".upcomingEventsContainer");

	PEFORTS.upcomingEvents.forEach((event) => {

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