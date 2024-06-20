import React from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
	return (
		<Modal>
			<Modal.Open opens="cabin-form">
				<Button>Add new space</Button>
			</Modal.Open>
			<Modal.Window name="cabin-form">
				<CreateCabinForm />
			</Modal.Window>
		</Modal>
	);
}

// export default function AddCabin() {
// 	const [isOpenModal, setisOpenModal] = useState(false);
// 	return (
// 		<>
// 			<Button onClick={() => setisOpenModal(!isOpenModal)}>Add new cabin</Button>
// 			{isOpenModal && (
// 				<Modal onClose={()=> setisOpenModal(false)}>
// 					<CreateCabinForm onCloseModal={()=> setisOpenModal(false)}/>
// 				</Modal>
// 			)}
// 		</>
// 	);
// }
