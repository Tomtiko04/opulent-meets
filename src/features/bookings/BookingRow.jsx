import styled from "styled-components";
import { PropTypes } from "prop-types";
import { format, isToday } from "date-fns";
import { useNavigate } from "react-router-dom";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye, HiTrash } from "react-icons/hi2";
import useCheckout from "../check-in-out/useCheckout";
import useDelete from "../check-in-out/useDelete";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Cabin = styled.div`
	font-size: 1.6rem;
	font-weight: 600;
	color: var(--color-grey-600);
	font-family: "Sono";
`;

const Stacked = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;

	& span:first-child {
		font-weight: 500;
	}

	& span:last-child {
		color: var(--color-grey-500);
		font-size: 1.2rem;
	}
`;

const Amount = styled.div`
	font-family: "Sono";
	font-weight: 500;
`;

BookingRow.propTypes = {
	booking: PropTypes.any,
};

function BookingRow({ booking }) {
	const navigate = useNavigate();
	const {
		id: bookingId,
		created_at,
		startDate,
		endDate,
		numNights,
		numGuests,
		totalPrice,
		status,
		guests: { fullName: guestName, email },
		cabins: {name: cabinName},
		// cabins: { name: cabinName },
	} = booking;

	const {checkout, isCheckingOut} = useCheckout()
	const {deleteBookin, isDeletingBooking} = useDelete()

	const statusToTagName = {
		"unconfirmed": "blue",
		"checked-in": "green",
		"checked-out": "silver",
	};

	return (
		<Table.Row>
			<Cabin>{cabinName}</Cabin>

			<Stacked>
				<span>{guestName}</span>
				<span>{email}</span>
			</Stacked>

			<Stacked>
				<span>
					{isToday(new Date(startDate)) ? "Today" : formatDistanceFromNow(startDate)}
					&rarr; {numNights} stay
				</span>
				<span>
					{format(new Date(startDate), "MMM dd yyyy")} &mdash;
					{format(new Date(endDate), "MMM dd yyyy")}
				</span>
			</Stacked>

			<Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

			<Amount>{formatCurrency(totalPrice)}</Amount>
			<Modal>
				<Menus.Menu>
					<Menus.Toggle id={bookingId} />
					<Menus.List id={bookingId}>
						<Menus.Button icon={<HiEye />} onClick={() => navigate(`/bookings/${bookingId}`)}>
							see details
						</Menus.Button>
						{status === "unconfirmed" && (
							<Menus.Button
								icon={<HiArrowDownOnSquare />}
								onClick={() => navigate(`/checkin/${bookingId}`)}>
								Check in
							</Menus.Button>
						)}
						{status === "checked-in" && (
							<Menus.Button
								icon={<HiArrowUpOnSquare />}
								onClick={() => checkout(bookingId)}
								disabled={isCheckingOut}>
								Check out
							</Menus.Button>
						)}
						<Modal.Open opens="delete">
							<Menus.Button icon={<HiTrash />}>Delete Booking</Menus.Button>
						</Modal.Open>
					</Menus.List>
				</Menus.Menu>
				<Modal.Window name="delete">
					<ConfirmDelete resourceName="booking" onConfirm={()=> deleteBookin(bookingId)}/>
				</Modal.Window>
			</Modal>
		</Table.Row>
	);
}

export default BookingRow;

