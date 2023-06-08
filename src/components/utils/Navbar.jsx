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
import { primaryColor, secondaryBgColor } from "../../assets/colors/color";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
	return (
		<HStack
			padding={"1rem"}
			justifyContent={"space-around"}
			bg={secondaryBgColor}
		>
			<Box className='logo-container'>
				<Link to={"/"}>
					<Heading
						size={"lg"}
						children={"QuickOrder"}
						textTransform={"uppercase"}
						color={primaryColor}
					/>
				</Link>
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

				{/* If you are login into the application */}
				{/* User login */}
				{/* Favourites Restaurants */}
				{/* Previous Orders */}
			</HStack>
			<ButtonGroup>
				<Link to={"/login"}>
					<PrimaryButton
						color={"orange"}
						variant={"solid"}
						size={"sm"}
						text={"login"}
					/>
				</Link>
				<Link to={"/register"}>
					<PrimaryButton
						color={"orange"}
						variant={"outline"}
						size={"sm"}
						text={"register"}
					/>
				</Link>
			</ButtonGroup>
		</HStack>
	);
};

export default Navbar;
