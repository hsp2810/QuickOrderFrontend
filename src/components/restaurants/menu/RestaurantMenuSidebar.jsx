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
			p={"3rem"}
			bg={tertiaryBgColor}
			height={"70vh"}
			alignItems={"center"}
			borderRadius={"2rem"}
			flex={10}
		>
			<Heading fontSize={"lg"}>Categories</Heading>
			<VStack p={"1rem"} alignItems={"flex-end"}>
				<Heading
					mt={"1rem"}
					fontSize={"md"}
					p={"1rem"}
					borderRadius={"2rem"}
					w={"100%"}
					textAlign={"center"}
				>
					<Link className='menu-item-link'>Veg</Link>
				</Heading>
				<Heading
					mt={"1rem"}
					fontSize={"md"}
					p={"1rem"}
					borderRadius={"2rem"}
					w={"100%"}
					textAlign={"center"}
				>
					<Link to={"#nonVeg"} className='menu-item-link'>
						Non-veg
					</Link>
				</Heading>
				<Heading
					mt={"1rem"}
					fontSize={"md"}
					p={"1rem"}
					borderRadius={"2rem"}
					w={"100%"}
					textAlign={"center"}
				>
					<Link className='menu-item-link'>Vegan</Link>
				</Heading>
			</VStack>
		</VStack>
	);
};

export default RestaurantMenuSidebar;
