import { HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const RestaurantInfo = ({ restaurant, showResInfoNav }) => {
	return (
		<Stack
			className={showResInfoNav ? "res-info-nav" : ""}
			bg={"orange.100"}
			alignItems={"flex-start"}
			p={"1rem"}
			borderRadius={"1rem"}
		>
			<Heading>{restaurant.name}</Heading>
			<HStack fontWeight={"thin"}>
				<Text>{restaurant.address}</Text>
				<Text>{restaurant.rating}</Text>
				<Text>
					{restaurant.opensAt}-{restaurant.closesAt}
				</Text>
			</HStack>
			{!showResInfoNav && (
				<Text fontWeight={"thin"} fontSize={"sm"}>
					{restaurant.description}
				</Text>
			)}
		</Stack>
	);
};

export default RestaurantInfo;
