import './App.css';
import injectContext from "./store/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
		<Routes>
	  		<Route path="/" element={<Home />} />				
		</Routes>
	</BrowserRouter>
  );
}

export default injectContext(App);
