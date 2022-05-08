import React from "react";

export default function About(props) {
	const textColor = props.mode === "dark" ? "light" : "dark";
	return (
		<div className={`bg-${props.mode}`}>
			<p className={`text-${textColor}`}>This is about page.</p>
		</div>
	);
}
