import {
	Flex,
	HStack,
	Heading,
	ScaleFade,
	SlideFade,
	Stack,
	Text,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { restaurants } from "../assets/data/restaurants";
import "../assets/styles/restaurant.css";
import RestaurantInfo from "../components/restaurants/menu/RestaurantInfo";
import RestaurantMenuSidebar from "../components/restaurants/menu/RestaurantMenuSidebar";
import RestaurantMenuContent from "../components/restaurants/menu/RestaurantMenuContent";
import Cart from "../components/restaurants/ordercart/Cart";

const RestaurantMenuPage = () => {
	const [restaurant, setRestaurant] = useState(restaurants[0]);
	const [showResInfoNav, setShowResInfoNav] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const desiredLength = 150;

			if (scrollPosition >= desiredLength) {
				setShowResInfoNav(true);
			} else {
				setShowResInfoNav(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Flex p={"1rem"} flexDir={"column"}>
			{/* About the restaurant */}
			<RestaurantInfo
				restaurant={restaurant}
				showResInfoNav={showResInfoNav}
			/>

			{/* Menu */}
			<VStack mt={showResInfoNav ? "17rem" : "4rem"}>
				<HStack alignItems={"flex-start"} flex={100}>
					<RestaurantMenuSidebar />
					<RestaurantMenuContent />
					<Cart />
				</HStack>
			</VStack>
		</Flex>
	);
};

export default RestaurantMenuPage;
