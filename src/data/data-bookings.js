import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
	const date = add(new Date(), { days: numDays });
	if (!withTime) date.setUTCHours(0, 0, 0, 0);
	return date.toISOString().slice(0, -1);
}

export const bookings = [

	{
		created_at: fromToday(-20, true),
		startDate: fromToday(0),
		endDate: fromToday(7),
		cabinId: 1,
		guestId: 2,
		hasBreakfast: true,
		observations:
			"We frequently use whiteboards for brainstorming sessions. Are whiteboards and markers provided in the rooms?",
		isPaid: false,
		numGuests: 10,
	},
	{
		created_at: fromToday(-33, true),
		startDate: fromToday(-23),
		endDate: fromToday(-13),
		cabinId: 1,
		guestId: 3,
		hasBreakfast: true,
		observations:
			"It would be great to receive email or SMS notifications to confirm our room bookings and remind us of upcoming meetings.",
		isPaid: true,
		numGuests: 10,
	},
	{
		created_at: fromToday(-27, true),
		startDate: fromToday(12),
		endDate: fromToday(18),
		cabinId: 1,
		guestId: 4,
		hasBreakfast: false,
		observations:
			"Reliable Wi-Fi access is crucial for our meetings. Can we ensure high-speed internet access in the conference rooms?",
		isPaid: false,
		numGuests: 8,
	},

	{
		created_at: fromToday(-45, true),
		startDate: fromToday(-45),
		endDate: fromToday(-29),
		cabinId: 3,
		guestId: 5,
		hasBreakfast: false,
		observations:
			"We'd like to have refreshments like coffee, tea, and water available during our meetings. Can this be arranged?",
		isPaid: true,
		numGuests: 80,
	},
	{
		created_at: fromToday(-2, true),
		startDate: fromToday(15),
		endDate: fromToday(18),
		cabinId: 3,
		guestId: 6,
		hasBreakfast: true,
		observations:
			"Will there be access to printing services and stationery supplies for handouts and note-taking?",
		isPaid: true,
		numGuests: 90,
	},
	{
		created_at: fromToday(-5, true),
		startDate: fromToday(33),
		endDate: fromToday(48),
		cabinId: 3,
		guestId: 7,
		hasBreakfast: true,
		observations:
			"It's essential to have enough power outlets for all our devices. Are there sufficient power outlets in each room?",
		isPaid: false,
		numGuests: 70,
	},

	{
		created_at: fromToday(-65, true),
		startDate: fromToday(-25),
		endDate: fromToday(-20),
		cabinId: 5,
		guestId: 8,
		hasBreakfast: true,
		observations: "",
		isPaid: true,
		numGuests: 50,
	},
	{
		created_at: fromToday(-2, true),
		startDate: fromToday(-2),
		endDate: fromToday(0),
		cabinId: 5,
		guestId: 9,
		hasBreakfast: false,
		observations: "We need battery for our microphones",
		isPaid: true,
		numGuests: 60,
	},

	{
		created_at: fromToday(-14, true),
		startDate: fromToday(-14),
		endDate: fromToday(-11),
		cabinId: 5,
		guestId: 10,
		hasBreakfast: true,
		observations:
			"We need to ensure that the conference rooms have adjustable climate control for comfort during long meetings.",
		isPaid: true,
		numGuests: 60,
	},

	{
		created_at: fromToday(-30, true),
		startDate: fromToday(-4),
		endDate: fromToday(8),
		cabinId: 4,
		guestId: 11,
		hasBreakfast: true,
		observations: "",
		isPaid: true,
		numGuests: 40,
	},
	{
		created_at: fromToday(-1, true),
		startDate: fromToday(12),
		endDate: fromToday(17),
		cabinId: 4,
		guestId: 12,
		hasBreakfast: true,
		observations: "",
		isPaid: false,
		numGuests: 35,
	},
	{
		created_at: fromToday(-3, true),
		startDate: fromToday(18),
		endDate: fromToday(19),
		cabinId: 4,
		guestId: 13,
		hasBreakfast: false,
		observations: "",
		isPaid: true,
		numGuests: 38,
	},

	{
		created_at: fromToday(0, true),
		startDate: fromToday(14),
		endDate: fromToday(21),
		cabinId: 3,
		guestId: 14,
		hasBreakfast: true,
		observations:
			"We may need technical support during our meetings. Is there an on-site tech support team available to assist us?",
		isPaid: false,
		numGuests: 80,
	},
	{
		created_at: fromToday(-6, true),
		startDate: fromToday(-6),
		endDate: fromToday(-4),
		cabinId: 3,
		guestId: 15,
		hasBreakfast: true,
		observations: "",
		isPaid: true,
		numGuests: 70,
	},
	{
		created_at: fromToday(-4, true),
		startDate: fromToday(-4),
		endDate: fromToday(-1),
		cabinId: 3,
		guestId: 16,
		hasBreakfast: false,
		observations: "",
		isPaid: true,
		numGuests: 90,
	},

	{
		created_at: fromToday(-8, true),
		startDate: fromToday(-5),
		endDate: fromToday(0),
		cabinId: 2,
		guestId: 1,
		hasBreakfast: true,
		observations:
			"We require video conferencing facilities for remote team members to join our meetings.",
		isPaid: true,
		numGuests: 30,
	},
	{
		created_at: fromToday(0, true),
		startDate: fromToday(0),
		endDate: fromToday(5),
		cabinId: 2,
		guestId: 23,
		hasBreakfast: true,
		observations:
			"We need to ensure that a projector is available for all our booked conference rooms for our presentation needs.",
		isPaid: true,
		numGuests: 24,
	},
	{
		created_at: fromToday(-10, true),
		startDate: fromToday(10),
		endDate: fromToday(13),
		cabinId: 2,
		guestId: 24,
		hasBreakfast: false,
		observations:
			"We will need a microphone during our meetings for better audio clarity during presentations and discussions.",
		isPaid: true,
		numGuests: 30,
	},
];
