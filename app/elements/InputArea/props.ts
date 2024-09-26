/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import React from "react";

export interface InputAreaProps {
	name: string;
	label?: string;
	iconPath?: string;
	required?: boolean;
	type?: string;
	endIconPath?: string;
	startIconPath?: string;
	control: Control<any>;
	onEndIconClick?: React.MouseEventHandler<HTMLElement>;
	onStartIconClick?: React.MouseEventHandler<HTMLElement>;
	[x: string]: any;
}
