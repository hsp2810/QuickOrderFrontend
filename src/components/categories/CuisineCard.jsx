import React from "react";
import {
	Card,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Text,
	Heading,
	Button,
	Divider,
} from "@chakra-ui/react";
import { primaryColor } from "../../assets/colors/color";
import PrimaryButton from "../utils/PrimaryButton";

const CuisineItem = ({ name, description }) => {
	return (
		<Card maxW='sm'>
			<CardBody>
				<Image
					src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
					alt='Green double couch with wooden legs'
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<Heading size='md' color={primaryColor}>
						{name}
					</Heading>
					<Text>{description}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<PrimaryButton
					text={"explore"}
					color={"orange"}
					size={"xs"}
					variant={"solid"}
				/>
			</CardFooter>
		</Card>
	);
};

export default CuisineItem;
