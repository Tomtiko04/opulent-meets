import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
export default function useCreateCabin() {
	const queryClient = useQueryClient();
	const { isLoading: isCreating, mutate: createCabin } = useMutation({
		mutationFn: createEditCabin,
		onSuccess: () => {
			toast.success("New space sucessfully created");
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (error) => toast.error(error.message),
	});
	return { isCreating, createCabin };
}
