export interface ButtonProps {
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary" | "danger";
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
}
