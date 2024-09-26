/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ComposerFormValues } from "@/app/types";
import { ComposerFormResolver } from "@/app/utils";

export const useData = () => {
	const defaultFormValues: ComposerFormValues = {
		url: "",
		urlArray: [],
		relatedPart: "",
		relatedPartsArray: [],
		answer: "",
	};

	const {
		control,
		handleSubmit: onSubmit,
		formState: { errors },
		watch,
		setValue,
		trigger,
		reset,
	} = useForm<ComposerFormValues>({
		resolver: ComposerFormResolver as any,
		defaultValues: defaultFormValues,
	});

	const url = watch("url");
	const urlArray = watch("urlArray");
	const relatedPart = watch("relatedPart");
	const relatedPartsArray = watch("relatedPartsArray");

	const handleKeyDown = async ({
		set,
		type,
		inputValue,
		tags,
	}: {
		set: "urlArray" | "relatedPartsArray";
		type: "url" | "relatedPart";
		tags: string[];
		inputValue: string;
	}) => {
		const fieldToValidate = type === "url" ? "url" : "relatedPart";

		const isValid = await trigger(fieldToValidate);

		if (isValid && inputValue.trim() !== "") {
			const uniqueItems = Array.from(new Set([...tags, inputValue]));
			setValue(set, uniqueItems);
			setValue(type, "");
		}
	};

	const handleRemoveTag = ({
		item,
		tags,
		type,
	}: {
		item: string;
		tags: string[];
		type: "urlArray" | "relatedPartsArray";
	}) => {
		const updatedTags = tags.filter((_item) => item !== _item);
		setValue(type, updatedTags);
	};

	const handleSubmit = onSubmit((values: ComposerFormValues) => {
		console.log(values);
		reset(defaultFormValues);
	});

	return {
		url,
		errors,
		control,
		urlArray,
		relatedPart,
		relatedPartsArray,
		handleSubmit,
		handleKeyDown,
		handleRemoveTag,
	};
};
