import { HStack, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { cuisines } from "../../assets/data/cuisines";
import CuisineItem from "../categories/CuisineCard";

const ExploreCuisines = () => {
	return (
		<VStack alignItems={"flex-start"} p={"5rem"}>
			<Heading size={"md"} textTransform={"uppercase"}>
				Explore Cuisines
			</Heading>
			<HStack>
				{cuisines &&
					cuisines.map((cuisineItem, index) => {
						return (
							<CuisineItem
								key={index}
								name={cuisineItem.name}
								description={cuisineItem.description}
							/>
						);
					})}
			</HStack>
		</VStack>
	);
};

export default ExploreCuisines;
