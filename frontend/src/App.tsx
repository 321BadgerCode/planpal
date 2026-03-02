import React from "react";
import { IonApp } from "@ionic/react";
import Home from "./Home";
import Login from "./login/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./index.css";

const App: React.FC = () => {
	return (
		<IonApp>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</IonApp>
	);
};

export default App;
