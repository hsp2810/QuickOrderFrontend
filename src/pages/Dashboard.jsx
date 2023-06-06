import { VStack } from "@chakra-ui/react";
import React from "react";
import ExploreCuisines from "../components/explore/ExploreCuisines";
import ExploreResturants from "../components/explore/ExploreResturants";

const Dashboard = () => {
	return (
		<VStack>
			{/* Order Now */}
			{/* BUtton -> Takes to the map page */}

			{/* Categories to Explore */}
			<ExploreCuisines />

			{/* Restaurants near you */}
			<ExploreResturants />
		</VStack>
	);
};

export default Dashboard;
