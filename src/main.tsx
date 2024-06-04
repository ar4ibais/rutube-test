import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Questions from "./pages/Questions/index.tsx";
import Thanks from "./pages/Thanks/index.tsx";
import Redirect from "./pages/Redirect/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/questions" element={<Questions />} />
			<Route path="/thanks" element={<Thanks />} />
			<Route path="/redirect" element={<Redirect />} />
		</Routes>
	</BrowserRouter>
);
