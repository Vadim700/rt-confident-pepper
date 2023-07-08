import React from "react";
import { Photo } from "./Photo/component";

export const Photos:React.FC = ():JSX.Element => {
	return (
		<div className="photos">
			<Photo />
			<Photo />
			<Photo />
			<Photo />
		</div>
	);
}