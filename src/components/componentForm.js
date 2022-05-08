import React, { useState } from "react";

export default function ComponentForm(props) {
	const [text, setText] = useState("Enter text here");
	const textColor = props.mode === "dark" ? "light" : "dark";
	const handleOnClickToUppercase = () => {
		let toUpper = text.toUpperCase();
		setText(toUpper);
	};
	const handleOnClickToLowercase = () => {
		let toLower = text.toLowerCase();
		setText(toLower);
	};
	const handleOnClickToClear = () => {
		let clearText = "";
		setText(clearText);
	};
	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const handleOnClickCopyToClipboard = (event) => {
		navigator.clipboard.writeText(text);
	};

	return (
		<div className={`text-${textColor}`}>
			<h1>{props.heading}</h1>
			<div className="mb-3">
				<textarea
					className={`form-control text-${textColor} bg-${props.mode}`}
					id="exampleFormControlTextarea1"
					rows="8"
					onChange={handleOnChange}
					value={text}
				></textarea>
				<button
					className="btn btn-primary my-3 mx-2"
					onClick={handleOnClickToUppercase}
				>
					convert to upper case
				</button>
				<button
					className="btn btn-primary my-3 mx-2"
					onClick={handleOnClickToLowercase}
				>
					convert to lower case
				</button>
				<button
					className="btn btn-primary my-3 
					mx-2"
					onClick={handleOnClickToClear}
				>
					clear text
				</button>
				<button
					className="btn btn-primary my-3 
					mx-2"
					onClick={handleOnClickCopyToClipboard}
				>
					copy to clipboard
				</button>
			</div>
			<div className="container">
				<h1>Text summary</h1>
				<p>
					<em>
						{text.length === 0
							? 0
							: text.split(" ").filter((t) => t !== "").length}{" "}
						words and {text.length} characters
					</em>
				</p>
				<h1>Preview</h1>
				<p>{text}</p>
			</div>
		</div>
	);
}
