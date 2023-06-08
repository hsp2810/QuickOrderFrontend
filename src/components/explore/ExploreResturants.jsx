import { Grid, GridItem, HStack, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import RestaurantCard from "../restaurants/RestaurantCard";
import { restaurants } from "../../assets/data/restaurants";

const ExploreResturants = () => {
	return (
		<VStack>
			<Heading size={"md"} textTransform={"uppercase"}>
				restaurants near you
			</Heading>
			<Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
				{restaurants &&
					restaurants.map((res, index) => {
						return (
							<GridItem key={index}>
								<RestaurantCard
									id={res.id}
									name={res.name}
									description={res.description}
									categories={res.categories}
									famousFor={res.famousFor}
									address={res.address}
									opensAt={res.opensAt}
									closesAt={res.closesAt}
								/>
							</GridItem>
						);
					})}
			</Grid>
		</VStack>
	);
};

export default ExploreResturants;
