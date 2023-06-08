import React from "react";
import Navbar from "./components/utils/Navbar";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/utils/Footer";
import Login from "./components/auth/Login";
import { Box } from "@chakra-ui/react";
import Register from "./components/auth/Register";
import RestaurantMenuPage from "./pages/RestaurantMenuPage";

const App = () => {
	return (
		<>
			<Navbar />
			<Box minH={"71vh"}>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route
						path='/restaurants/:id/menu'
						element={<RestaurantMenuPage />}
					/>
				</Routes>
			</Box>
			<Footer />
		</>
	);
};

export default App;
