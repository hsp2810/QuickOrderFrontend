import { HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { secondaryBgColor } from "../../assets/colors/color";

const Footer = () => {
	return (
		<HStack bg={secondaryBgColor} padding={"1rem"} mt={"5rem"}>
			<Heading size={"sm"}>
				© 2023 QuickOrder. All rights reserved.
			</Heading>
		</HStack>
	);
};

export default Footer;
