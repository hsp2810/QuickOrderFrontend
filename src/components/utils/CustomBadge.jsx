import { Badge } from "@chakra-ui/react";
import React from "react";

const CustomBadge = ({ color, text }) => {
	return (
		<Badge
			colorScheme={color}
			width={"fit-content"}
			position={"absolute"}
			fontSize={"sm"}
			p={"0rem .25rem"}
			right={5}
		>
			{text}
		</Badge>
	);
};

export default CustomBadge;
