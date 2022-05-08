import "./App.css";
import Navbar from "./components/navbar";
import ComponentForm from "./components/componentForm";
import { useState } from "react";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");

	const toggleMode = () => {
		if (mode === "dark") {
			setMode("light");
			document.body.style.background = "white";
			document.title = "TextUtils - Light Mode";
		} else if (mode === "light") {
			setMode("dark");
			document.body.style.background = "#010a24";
			document.title = "TextUtils - Dark Mode";
			setInterval(() => {
				document.title = "Amazing";
			}, 2000);
			setInterval(() => {
				document.title = "Great";
			}, 1500);
		}
	};

	return (
		<>
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<div className="container my-3">
								<ComponentForm
									heading="Enter the text in the below text box"
									mode={mode}
									toggleMode={toggleMode}
								/>
							</div>
						}
					/>
					<Route exact path="/about" element={<About mode={mode} />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
