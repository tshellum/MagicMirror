/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				symbol: "calendar-check",
		// 				url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
		// 		]
		// 	}
		// },
		{
			module: "calendar",
			header: "Kalender",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://p14-caldav.icloud.com/published/2/MTYyMDUzNTIyOTE2MjA1M6ioeQYBk-ve9nS6-83GR0xlp3eF6XfBipU3IdycsMhMAJIuME4oFJ3p_MC7KJIWJ_tgI8K5gF-3cJUxBtuXLsc",
					},
					
					{
						symbol: "calendar-check",
						url: "webcal://www.facebook.com/events/ical/upcoming/?uid=567851712&key=LIrLdchx9ctiHzPa"

					}
				]
			}
		},

		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		// {
		// 	module: "currentweather",
		// 	position: "top_right",
		// 	config: {
		// 		location: "New York",
		// 		locationID: "",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		appid: "YOUR_OPENWEATHER_API_KEY"
		// 	}
		// },
		// {
		// 	module: "weatherforecast",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		location: "New York",
		// 		locationID: "5128581",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		appid: "YOUR_OPENWEATHER_API_KEY"
		// 	}
		// },
		{
			module: "newsfeed",
			position: "bottom_left",
			config: {
				feeds: [
					// {
					// 	title: "BBC",
					// 	url: "http://feeds.bbci.co.uk/news/video_and_audio/news_front_page/rss.xml?edition=uk",
					// },

					{
						title: "Aftenposten",
						url: "https://www.aftenposten.no/rss",
					},


				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},

		// 3rd-party-modules: https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules
		
		// {
		// 	module: 'MMM-YrNow', // https://github.com/Yr/MMM-YrNow
		// 	position: 'top_right',
		// 	config: {
		// 		locationId: '1-73738',
		// 		showWeatherForecast: true
		// 	}
		// },
		{
			module: 'MMM-YrThen', // https://github.com/fmandal/MMM-YrThen
			position: 'top_right',
			config: {
				location: '1-211102', // https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/1-211102/Norge/Tr%C3%B8ndelag/Trondheim/Trondheim
				numDays: 3,
				showMaxMin: true,
				maxMinSeparator: ' / ',
				header: true,
				title: 'Værmelding for Trondheim'
			},
		},
		{
			module: 'MMM-AtbSanntid', // https://github.com/Springvar/MMM-AtbSanntid
			position: 'top_right',
			config: {
				stops: [
						{id: 16011476, name: "Samfundet 1"},  // http://st.atb.no/New/minskjerm/FullScreenTransitConfig.aspx
						{id: 16010476, name: "Samfundet 2"}, 
						{id: 16011477, name: "Samfundet 3"},
						{id: 16010477, name: "Samfundet 4"}
					],
				rows: 8,
			},
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
