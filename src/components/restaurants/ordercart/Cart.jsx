import {
	Box,
	Card,
	CardBody,
	HStack,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import PrimaryButton from "../../utils/PrimaryButton";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { primaryColor } from "../../../assets/colors/color";

const Cart = () => {
	const { cart } = useSelector((state) => state.cart);
	return (
		<VStack flex={25}>
			<Heading>Your Cart</Heading>
			<VStack m={"2rem 0rem"} overflowY={"scroll"} height={"40vh"}>
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
			</VStack>
			<PrimaryButton
				size={"md"}
				color={"orange"}
				text={"Place Order"}
				full={"full"}
				p={"2rem"}
				w={"80%"}
			/>
		</VStack>
	);
};

const CartItem = () => {
	return (
		<>
			<Card
				borderRadius={"2rem"}
				width={"20rem !important"}
				direction={"row"}
				mb={"1rem"}
			>
				<Image
					objectFit='cover'
					maxW={{ base: "100%", sm: "100px" }}
					src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
					alt='Caffe Latte'
					borderTopLeftRadius={"2rem"}
					borderBottomLeftRadius={"2rem"}
				/>
				<CardBody>
					<HStack>
						<Box lineHeight={"1.25rem"}>
							<Heading fontSize={"sm"}>Butter Chicken</Heading>
							<Text fontSize={"sm"}>
								Quantity:{" "}
								<Text color={primaryColor} display={"inline"}>
									2
								</Text>
							</Text>
							<Text fontSize={"sm"}>
								Item Total:{" "}
								<Text color={primaryColor} display={"inline"}>
									$56
								</Text>
							</Text>
						</Box>
						<SmallCloseIcon
							color={"red"}
							position={"absolute"}
							right={3}
						/>
					</HStack>
				</CardBody>
			</Card>
		</>
	);
};

export default Cart;
