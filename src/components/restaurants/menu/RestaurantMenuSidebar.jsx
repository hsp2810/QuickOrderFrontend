import {
	Box,
	Container,
	Heading,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { menu } from "../../../assets/data/menu";
import { tertiaryBgColor } from "../../../assets/colors/color";
import { Link } from "react-router-dom";

const RestaurantMenuSidebar = () => {
	return (
		<VStack
			bg={tertiaryBgColor}
			height={"70vh"}
			alignItems={"center"}
			borderRadius={"2rem"}
			flex={15}
		>
			<Heading fontSize={"lg"} mt={"2rem"}>
				Categories
			</Heading>
			<VStack mt={"2rem"} alignItems={"center"} w={"100%"}>
				<Heading
					fontSize={"md"}
					borderRadius={"2rem"}
					w={"80%"}
					textAlign={"center"}
				>
					<Link className='menu-item-link' to={"#veg"}>
						Veg
					</Link>
				</Heading>
				<Heading
					fontSize={"md"}
					borderRadius={"2rem"}
					w={"80%"}
					textAlign={"center"}
				>
					<Link to={"#nonVeg"} className='menu-item-link'>
						Non-veg
					</Link>
				</Heading>
				<Heading
					fontSize={"md"}
					borderRadius={"2rem"}
					w={"80%"}
					textAlign={"center"}
				>
					<Link className='menu-item-link'>Vegan</Link>
				</Heading>
			</VStack>
		</VStack>
	);
};

export default RestaurantMenuSidebar;
