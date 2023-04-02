import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs.jsx";
import FormComponent from "./components/FormComponent";
import Footer from "./components/Footer";
import BlogCarousel from "./components/BlogCarousel";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			{/* <Navbar></Navbar> */}
			<div className="app-parent">
				<Home></Home>
				<FormComponent> </FormComponent>
				<Blogs></Blogs>
				<BlogCarousel></BlogCarousel>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
