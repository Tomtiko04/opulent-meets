import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
export default function useEdithCabin() {
	const queryClient = useQueryClient();
	const { isLoading: isEditing, mutate: editCabin } = useMutation({
		mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
		onSuccess: () => {
			toast.success("Space sucessfully edited");
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (error) => toast.error(error.message),
	});
	return { isEditing, editCabin };
}