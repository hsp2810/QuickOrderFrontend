import { Button, Text } from "@chakra-ui/react";
import React from "react";

const PrimaryButton = ({
	color,
	size,
	variant,
	text,
	margin,
	display,
	full,
	p,
	w,
}) => {
	return (
		<Button
			variant={variant}
			colorScheme={color}
			margin={margin}
			display={display}
			borderRadius={full}
			p={p}
			w={w}
		>
			<Text fontSize={size} textTransform={"uppercase"}>
				{text}
			</Text>
		</Button>
	);
};

export default PrimaryButton;
