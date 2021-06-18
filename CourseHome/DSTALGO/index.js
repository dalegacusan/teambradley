const DSTALGO = {
	courseName: "DSTALGO",
	section: "OTI003 20214",
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
		{
			announcementTitle: "Nemo enim ipsam voluptatem quia voluptas",
			description: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
			datePosted: "February 12, 2021 12:30 PM"
		},
		{
			announcementTitle: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit",
			description: "esse quam nihil molestiae consequatur, vel illum qui dolorem",
			datePosted: "January 2, 2020 8:04 PM"
		},

	],
	upcomingEvents: [
		{
			eventDate: "June 19 11:59 PM",
			eventName: "Week 6 Topic 01 Lab Act 02 - Generic List",
			dropboxLink: "/Drop-box/Drop-box.html"
		},
		{
			eventDate: "June 24 10:00 AM",
			eventName: "Encapsulation & Abstraction 3 Layer App",
			dropboxLink: "/Drop-box/Drop-box.html"
		},
		{
			eventDate: "June 25 11:59 PM",
			eventName: "Midterm Machine Project",
			dropboxLink: "/Drop-box/Drop-box.html"
		}
	],
	nextSynchronousSession: {
		sessionDate: "July 28, 2021",
		sessionDay: "Wednesday",
		sessionTime: "10:00 - 11:00 am",
		videoCallLink: "https://meet.google.com/szc-c23d-opc"
	},
	professor: {
		firstName: "Olivia",
		lastName: "Walter",
		emailAddress: "olivia.walter@org.edu.xyz",
		profilePictureLink: "data:image/png;base64,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",
		consultation: {
			SUN: {
				day: "SUN",
				available: false
			},
			MON: {
				day: "MON",
				available: false
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

	DSTALGO.announcements.forEach((announcement) => {

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
				<h3 style="color: #2097f3">${DSTALGO.nextSynchronousSession.sessionDate}</h3>
				<p>${DSTALGO.nextSynchronousSession.sessionDay}, ${DSTALGO.nextSynchronousSession.sessionTime}</p>
				<p style="margin: 0; font-size: 12px; color: #484848">
					Video Call Link
				</p>
				<a href="${DSTALGO.nextSynchronousSession.videoCallLink}"
					>${DSTALGO.nextSynchronousSession.videoCallLink}</a
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
			<img src="${DSTALGO.professor.profilePictureLink}" width="60" class="rounded-circle"/>
		</div>
		<div class="col-10">
			<p style="margin: 4px 2px 0 2px;"><img src="/GLOBALS//images/user.png" width="16" style="margin: -3px 20px 0 0"/> ${DSTALGO.professor.firstName} ${DSTALGO.professor.lastName}</p>
			<p style="margin: 0 2px;"><img src="/GLOBALS//images/email.png" width="16" style="margin: -3px 20px 0 0"/> <a href="mailto:${DSTALGO.professor.emailAddress}">${DSTALGO.professor.emailAddress}</a></p>
		</div>
	</div>
	<!-- Consulatation -->
	<div class="row mt-4">
		<div class="col-12">
			<h5 class="mb-3">Consultation</h5>
			<table class="table table-bordered text-center" style="font-size: 12px; border: 1px solid #8B8B8B;">
				<tbody>
					<tr>
						<td scope="col" class="${DSTALGO.professor.consultation.SUN.available && 'activeConsultationDay'}">${DSTALGO.professor.consultation.SUN.day}</td>
						<td scope="col" class="${DSTALGO.professor.consultation.MON.available && 'activeConsultationDay'}">${DSTALGO.professor.consultation.MON.day}</td>
						<td scope="col" class="${DSTALGO.professor.consultation.TUE.available && 'activeConsultationDay'}">${DSTALGO.professor.consultation.TUE.day}</td>
						<td scope="col" class="${DSTALGO.professor.consultation.WED.available && 'activeConsultationDay'}">${DSTALGO.professor.consultation.WED.day}</td>
						<td scope="col" class="${DSTALGO.professor.consultation.THUR.available && 'activeConsultationDay'}">${DSTALGO.professor.consultation.THUR.day}</td>
						<td scope="col" class="${DSTALGO.professor.consultation.FRI.available && 'activeConsultationDay'}">${DSTALGO.professor.consultation.FRI.day}</td>
						<td scope="col" class="${DSTALGO.professor.consultation.SAT.available && 'activeConsultationDay'}">${DSTALGO.professor.consultation.SAT.day}</td>
					</tr>
				</tbody>
				</table>
		</div>
	</div>
	`;
}

const displayUpcomingEvents = () => {
	const upcomingEventsContainer = document.querySelector(".upcomingEventsContainer");

	DSTALGO.upcomingEvents.forEach((event) => {

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