import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marqees from "./components/Marqees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className='w-full h-full bg-zinc-900 font-sans'>
			<Navbar />
			<Work />
			<Stripes />
			<Products />
			<Marqees />
            <Cards />
            <Footer />
		</div>
	);
};

export default App;
