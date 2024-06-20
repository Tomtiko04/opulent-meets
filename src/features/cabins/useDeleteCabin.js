import {useMutation, useQueryClient} from  "@tanstack/react-query"
import {toast} from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
export default function useDeleteCabin() {
    const queryClient = useQueryClient();
	const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
		mutationFn: (id) => deleteCabinApi(id),
		onSuccess: () => {
			toast.success("Space successfully deleted");
			queryClient.invalidateQueries({
				queryKeyCabindeleteCabin: ["cabins"],
			});
		},
		onError: (error) => toast.error(error.message),
	});
    return { isDeleting, deleteCabin};
}
