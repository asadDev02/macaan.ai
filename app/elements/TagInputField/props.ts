/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import React from "react";

export interface TagInputFieldProps {
	name: string;
	label?: string;
	iconPath?: string;
	required?: boolean;
	type?: string;
	onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	endIconPath?: string;
	startIconPath?: string;
	control: Control<any>;
	onEndIconClick?: React.MouseEventHandler<HTMLElement>;
	onStartIconClick?: React.MouseEventHandler<HTMLElement>;
	tags: string[];
	handleRemoveTag: (tag: string) => void;
	[x: string]: any;
}
