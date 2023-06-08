import React from "react";
import {
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import PrimaryButton from "../../utils/PrimaryButton";
import { primaryColor } from "../../../assets/colors/color";

const RestaurantMenuContentItem = ({ name, description }) => {
	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			overflow='hidden'
			size={"sm"}
			variant='outline'
			borderRadius={"2rem !important"}
		>
			<Image
				objectFit='cover'
				maxW={{ base: "100%", sm: "200px" }}
				src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
				alt='Caffe Latte'
			/>

			<Stack>
				<CardBody>
					<Heading size='md'>{name}</Heading>

					<Text py='2'>
						Caffè latte is a coffee beverage of Italian origin made
						with espresso and steamed milk.
					</Text>

					<Text color={primaryColor} fontSize='2xl'>
						$450
					</Text>
				</CardBody>

				<CardFooter>
					<PrimaryButton
						color={"orange"}
						size={"sm"}
						text={"add to cart"}
					/>
				</CardFooter>
			</Stack>
		</Card>
	);
};

export default RestaurantMenuContentItem;
