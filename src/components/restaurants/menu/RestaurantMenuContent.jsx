import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { menu } from "../../../assets/data/menu";
import RestaurantMenuContentItem from "./RestaurantMenuContentItem";

const RestaurantMenuContent = () => {
	return (
		<VStack
			flex={60}
			alignItems={"flex-start"}
			height={"70vh"}
			ml={"1rem"}
			overflowY={"scroll"}
		>
			<MenuCategoryItem
				type={"Starters"}
				content={menu[0].veg.starters}
			/>
			<MenuCategoryItem
				type={"Main Course"}
				content={menu[0].veg.mainCourse}
			/>
			<MenuCategoryItem type={"Sweets"} content={menu[0].veg.sweets} />
			<MenuCategoryItem
				type={"Starters"}
				content={menu[0].nonVeg.chicken.starters}
				id={"nonVeg"}
			/>
			<MenuCategoryItem
				type={"Main Course"}
				content={menu[0].nonVeg.chicken.mainCourse}
			/>
			<MenuCategoryItem
				type={"Main Course"}
				content={menu[0].nonVeg.beef.mainCourse}
			/>
			<MenuCategoryItem
				type={"Main Course"}
				content={menu[0].nonVeg.beef.mainCourse}
			/>
		</VStack>
	);
};

const MenuCategoryItem = ({ type, content, id }) => {
	return (
		<Box mb={"3rem"} id={id}>
			<Heading fontSize={"2xl"} m={"1rem"} textAlign={"center"}>
				{type}
			</Heading>
			<VStack>
				{content.map((item, index) => {
					return (
						<RestaurantMenuContentItem
							key={index}
							name={item.name}
							description={item.description}
							price={item.price}
						/>
					);
				})}
			</VStack>
		</Box>
	);
};

export default RestaurantMenuContent;
