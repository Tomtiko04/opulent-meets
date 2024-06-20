import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { PropTypes } from "prop-types";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import useCreateCabin from "./useCreateCabin";
import useEdithCabin from "./useEditCabin";

const Label = styled.label`
	font-weight: 500;
`;
CreateCabinForm.propTypes = {
	cabinToEdit: PropTypes.any,
	onCloseModal: PropTypes.any,
};

export default function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
	const { id: editId, ...editValues } = cabinToEdit;
	const isEditSession = Boolean(editId);
	const { register, handleSubmit, reset, getValues, formState } = useForm({
		defaultValues: isEditSession ? editValues : {},
	});
	const { errors } = formState;

	const { isCreating, createCabin } = useCreateCabin();
	const { isEditing, editCabin } = useEdithCabin();
	const isWorking = isCreating || isEditing;

	function onSubmit(data) {
		const image = typeof data.image === "string" ? data.image : data.image[0];
		if (isEditSession) {
			editCabin(
				{ newCabinData: { ...data, image }, id: editId },
				{
					onSuccess: (data) => {
						reset();
						onCloseModal?.();
					},
				}
			);
		} else {
			createCabin(
				{ ...data, image: data.image[0] },
				{
					onSuccess: (data) => {
						reset();
						onCloseModal?.();
					},
				}
			);
		}
	}

	function onError(errors) {
		// console.log(errors);
	}
	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? "modal" : "regular"}>
			<FormRow label="Space name" error={errors?.name?.message}>
				<Input
					type="text"
					id="name"
					disabled={isWorking}
					{...register("name", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
				<Input
					type="number"
					id="maxCapacity"
					disabled={isWorking}
					{...register("maxCapacity", {
						required: "This field is required",
						min: {
							value: 1,
							message: "Capacity should be at least 1",
						},
					})}
				/>
			</FormRow>

			<FormRow label="Regular price" error={errors?.regularPrice?.message}>
				<Input
					type="number"
					id="regularPrice"
					disabled={isWorking}
					{...register("regularPrice", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Discount" error={errors?.discount?.message}>
				<Input
					type="number"
					id="discount"
					disabled={isWorking}
					defaultValue={0}
					{...register("discount", {
						required: "This field is required",
						validate: (value) =>
							value <= getValues().regularPrice || "Discount should be less than regular price",
					})}
				/>
			</FormRow>

			<FormRow label="Description for website">
				<Textarea
					type="number"
					id="description"
					disabled={isWorking}
					defaultValue=""
					{...register("description", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow>
				<Label htmlFor="image">Space photo</Label>
				<FileInput
					id="image"
					accept="image/*"
					{...register("image", {
						required: isEditSession ? false : "This field is required",
					})}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
					Cancel
				</Button>
				<Button disabled={isWorking} >
					{isEditSession ? "Edit space" : "Create new space"}
				</Button>
			</FormRow>
		</Form>
	);
}
