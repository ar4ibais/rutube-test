import Header from "./components/Header";
import "./styles/reset.scss";
import "./styles/global.scss";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Questions from "./pages/Questions";
import Thanks from "./pages/Thanks";
import Redirect from "./pages/Redirect";

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/questions" element={<Questions />} />
					<Route path="/thanks" element={<Thanks />} />
					<Route path="/redirect" element={<Redirect />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
