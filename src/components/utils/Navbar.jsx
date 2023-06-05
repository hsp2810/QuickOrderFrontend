import {
	Box,
	Button,
	ButtonGroup,
	HStack,
	Heading,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/navbar.css";
import { secondaryBgColor } from "../../assets/colors/color";

const Navbar = () => {
	return (
		<HStack
			padding={"1rem"}
			justifyContent={"space-around"}
			bg={"secondaryBgColor"}
		>
			<Box className='logo-container'>
				<Heading
					size={"lg"}
					children={"QuickOrder"}
					textTransform={"uppercase"}
				/>
			</Box>
			<HStack>
				<Box className='nav-items'>
					<Text>
						<Link className='nav-links'>Order Now!</Link>
					</Text>
				</Box>
				<Box className='nav-items'>
					<Text>
						<Link className='nav-links'>Contact the team</Link>
					</Text>
				</Box>
			</HStack>
			<ButtonGroup>
				<Button colorScheme='orange'>Login</Button>
				<Button variant={"outline"} colorScheme='orange'>
					Register
				</Button>
			</ButtonGroup>
		</HStack>
	);
};

export default Navbar;
