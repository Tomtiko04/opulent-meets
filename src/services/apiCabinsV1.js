import { supabaseUrl } from "./supabase";
import supabase from "./supabase";
export default async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		console.error();
		throw new Error("Cabin could not be loaded");
	}

	return data;
}

export async function createCabin(newCabin) {
	//https://mbxmsimfzupucyqgawzv.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-01-18T14%3A30%3A17.845Z
	const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
	const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
	//1. Create cabin
	const { data, error } = await supabase
	.from("cabins")
	.insert([{...newCabin, image: imagePath}])
	.select()
	.single();
	if (error) {
		console.error();
		throw new Error("Cabin could not be created");
	}

	//2. Upload image
	const { error: storageError } = await supabase.storage
		.from("cabin-images")
		.upload(imageName, newCabin.image);

	//3. Delete the cabin IF there was an error uploading image
	if (storageError) {
		await supabase.from("cabins").delete().eq("id", data.id);
		console.error(storageError);
		throw new Error("Cabin could not be uploaded and the cabin was not created");
	}
	return data;
}

export async function deleteCabin(id) {
	const { data, error } = await supabase.from("cabins").delete().eq("id", id);

	if (error) {
		console.error();
		throw new Error("Cabin could not be loaded");
	}
	return data;
}
