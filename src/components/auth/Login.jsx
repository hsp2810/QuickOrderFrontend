import React, { useState } from "react";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Stack,
	Heading,
	VStack,
	FormControl,
	InputGroup,
	Input,
	Text,
	InputRightElement,
	Button,
} from "@chakra-ui/react";
import { primaryColor } from "../../assets/colors/color";
import PrimaryButton from "../utils/PrimaryButton";
import { Link } from "react-router-dom";

const defUser = {
	email: "",
	password: "",
};

const Login = () => {
	return (
		<Stack display={"flex"} align={"center"} mt={"5rem"}>
			<Heading>Login</Heading>
			<Tabs
				variant='soft-rounded'
				colorScheme='orange'
				mt={"2rem"}
				isFitted
				w={"50rem"}
			>
				<TabList>
					<Tab>Business</Tab>
					<Tab>Customer</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<LoginPanel type={"business"} />
					</TabPanel>
					<TabPanel>
						<LoginPanel type={"customer"} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Stack>
	);
};

const LoginPanel = ({ type }) => {
	const [loginCred, setLoginCred] = useState(defUser);
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const handleChange = (e) => {
		setLoginCred(e.target.value);
	};

	const handleLogin = () => {};

	return (
		<VStack>
			<InputGroup display={"flex"} flexDir={"column"} padding={"3rem"}>
				<Heading size={"sm"} textAlign={"center"}>
					Login as an authorized {type} with Quickorder
				</Heading>
				<FormControl width={"50%"} margin={"auto"}>
					<Input
						type='text'
						placeholder='Username or Email'
						focusBorderColor={primaryColor}
						mt={"1rem"}
						onChange={handleChange}
						value={loginCred.email}
					/>
					<InputGroup>
						<Input
							type={show ? "text" : "password"}
							placeholder='Password'
							focusBorderColor={primaryColor}
							mt={"1rem"}
							onChange={handleChange}
							value={loginCred.password}
						/>
						<InputRightElement width='4.5rem' mt={"1rem"}>
							<Button h='1.75rem' size='sm' onClick={handleClick}>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					</InputGroup>
					<Text fontSize={"xs"} p={"1rem"} fontWeight={"thin"}>
						This site is protected by reCAPTCHA and the Google
						<Link to={"#"} style={{ color: primaryColor }}>
							{" "}
							Privacy Policy{" "}
						</Link>
						and{" "}
						<Link to={"#"} style={{ color: primaryColor }}>
							Terms of Service
						</Link>{" "}
						apply.
					</Text>
					<PrimaryButton
						text={"login"}
						size={"sm"}
						variant={"solid"}
						color={"orange"}
						margin={"1rem auto"}
						display={"block"}
					/>
				</FormControl>
				<Text
					fontSize={"sm"}
					p={"1rem"}
					fontWeight={"thin"}
					textAlign={"center"}
				>
					Forgot
					<Link to={"#"} style={{ color: primaryColor }}>
						{" "}
						username{" "}
					</Link>
					or{" "}
					<Link to={"#"} style={{ color: primaryColor }}>
						password
					</Link>{" "}
					?
				</Text>
			</InputGroup>
		</VStack>
	);
};

export default Login;
