import { ReactNode } from "react";

export interface FormProps {
	className?: string;
	children: ReactNode;
	onSubmit: React.FormEventHandler<HTMLFormElement>;
}
