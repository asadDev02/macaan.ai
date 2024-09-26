import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { urlPattern } from "@/app/constants";

export const ComposerFormResolver = yupResolver(
	Yup.object().shape({
		url: Yup.string().test("url-or-urls", "URL is required ", function (value) {
			const urls = this.parent.urls;
			if (urls && urls.length === 0) {
				return Yup.string()
					.required("URL is required ")
					.matches(urlPattern, "Must be a valid URL")
					.isValidSync(value);
			}
			return true;
		}),
		urls: Yup.array().of(Yup.string()).min(1, "Please add at least one URL"),

		relatedPart: Yup.string().test(
			"related-part-or-parts",
			"Related part is required ",
			function (value) {
				const relatedParts = this.parent.relatedParts;
				if (relatedParts && relatedParts.length === 0) {
					return Yup.string()
						.required("Related part is required ")
						.isValidSync(value);
				}
				return true;
			}
		),
		relatedParts: Yup.array()
			.of(Yup.string())
			.min(1, "Please add at least one related part."),

		answer: Yup.string().required("Answer is required"),
	})
);
