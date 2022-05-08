import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function navbar(props) {
	const textColor = props.mode === "dark" ? "light" : "dark";
	return (
		<div>
			<nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode}`}>
				<div className="container-fluid">
					<Link className={`navbar-brand text-${textColor}`} to="/">
						{props.title}
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className={`nav-link active text-${textColor}`}
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`nav-link active text-${textColor}`}
									aria-current="page"
									to="/about"
								>
									About
								</Link>
							</li>
						</ul>
						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								role="switch"
								onClick={props.toggleMode}
								id="flexSwitchCheckDefault"
							/>
							<label
								className={`form-check-label text-${textColor}`}
								htmlFor="flexSwitchCheckDefault"
							>
								Dark Mode
							</label>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

navbar.propTypes = {
	title: propTypes.string.isRequired,
};

navbar.defaultProps = {
	title: "set title here",
};
