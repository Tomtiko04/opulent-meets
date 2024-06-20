import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {useNavigate} from "react-router-dom"

import { deleteBooking } from "../../services/apiBookings";
export default function useDelete(id) {
    const navigate = useNavigate();
    const queryClient = useQueryClient()
	const { isLoading: isDeletingBooking, mutate: deleteBookin } = useMutation({
		mutationFn: (id) => deleteBooking(id),
		onSuccess: () => {
			toast.success("Booking deleted sucessfully");
            queryClient.invalidateQueries({
                queryKey: ["bookings"]
            })
            // navigate("/")
		},
		onError: () => {
			toast.error("Unable to delete booking");
		},
	});

	return { deleteBookin, isDeletingBooking };
}
