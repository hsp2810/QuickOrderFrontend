import React, { useEffect, useState } from "react";
import {
	Card,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Text,
	Heading,
	Divider,
	ButtonGroup,
	Badge,
	Button,
	Box,
} from "@chakra-ui/react";
import { primaryColor } from "../../assets/colors/color";
import PrimaryButton from "../utils/PrimaryButton";
import { calcClosingTime } from "../../assets/calculations/resTime";
import CustomBadge from "../utils/CustomBadge";
import { Link } from "react-router-dom";

const RestaurantCard = ({
	id,
	name,
	status,
	description,
	categories,
	famousFor,
	address,
	opensAt,
	closesAt,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDesc, setIsOpenDesc] = useState(null);

	useEffect(() => {
		if (calcClosingTime(parseInt(closesAt))) {
			setIsOpen(true);
		}
	}, []);

	useEffect(() => {
		if (description.length > 100) {
			setIsOpenDesc(false);
		}
	}, []);

	const toggleDescText = () => {
		if (isOpenDesc) {
			setIsOpenDesc(false);
		} else {
			setIsOpenDesc(true);
		}
	};

	return (
		<Card maxW='sm'>
			<CardBody>
				<Image
					src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
					alt='Green double couch with wooden legs'
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<CustomBadge
						color={isOpen ? "green" : "red"}
						text={isOpen ? "open" : "closes soon"}
					/>
					<Heading size='md' color={primaryColor}>
						{name}
					</Heading>
					<Box>
						<Text display={"inline"}>
							{!isOpenDesc
								? description.substr(0, 100).concat(" ")
								: description}
						</Text>
						{isOpenDesc !== null && (
							<Button
								variant={"link"}
								size={"xs"}
								onClick={toggleDescText}
							>
								{isOpenDesc ? "Read less" : "Read more"}
							</Button>
						)}
					</Box>
					<Text>{categories}</Text>
					<Text>Famous for {famousFor}</Text>
					<Text>Located at {address}</Text>
					<Text>
						Timings from {opensAt}-{closesAt}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing={2}>
					<Link to={`/restaurants/${id}/menu`}>
						<PrimaryButton
							text={"View menu"}
							color={"orange"}
							size={"xs"}
							variant={"solid"}
						/>
					</Link>
					<PrimaryButton
						text={"add to favourites"}
						color={"orange"}
						size={"xs"}
						variant={"outline"}
					/>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};

export default RestaurantCard;
