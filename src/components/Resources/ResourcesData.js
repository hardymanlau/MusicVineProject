// Creating an array of resource objects, each representing information about a travel resource.
const resourcesData = [
	{
		name: "Been Travel Map",
		imageUrl: `${process.env.PUBLIC_URL}/Images/Resources/Been.png`,
		description:
			"If you find it hard to keep track of countries you’ve visited, this is perfect. You can see how much of the world you have visited.",
		website: "https://been.app/",
	},
	{
		name: "Booking.com",
		imageUrl: `${process.env.PUBLIC_URL}/Images/Resources/Booking.png`,
		description:
			"Booking.com is great for accommodation - including hotels, hostels & apartments.",
		website: "https://www.booking.com/",
	},

	{
		name: "Government Foreign Travel Advice",
		imageUrl: `${process.env.PUBLIC_URL}/Images/Resources/Government.png`,
		description:
			"Visit the government website to get advice about traveling to specific destinations.",
		website: "https://www.gov.uk/foreign-travel-advice",
	},
	{
		name: "Skyscanner",
		imageUrl: `${process.env.PUBLIC_URL}/Images/Resources/Skyscanner.png`,
		description:
			"Use Skyscanner to compare flight prices across multiple airlines.",
		website: "https://www.skyscanner.net/",
	},
];

export default resourcesData;