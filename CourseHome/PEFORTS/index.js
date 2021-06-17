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
	displayUpcomingEvents();
}