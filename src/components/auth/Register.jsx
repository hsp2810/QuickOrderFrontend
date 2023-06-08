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

const defRegister = {
	username: "",
	email: "",
	password: "",
	govID: "",
};

const Register = () => {
	return (
		<Stack display={"flex"} align={"center"} mt={"5rem"}>
			<Heading>Register</Heading>
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
						<RegisterPanel type={"business"} />
					</TabPanel>
					<TabPanel>
						<RegisterPanel type={"customer"} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Stack>
	);
};

const RegisterPanel = ({ type }) => {
	const [registerCred, setRegisterCred] = useState(defRegister);
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const handleChange = (e) => {
		setRegisterCred(e.target.value);
	};

	const handleRegister = () => {};

	return (
		<VStack>
			<InputGroup display={"flex"} flexDir={"column"} padding={"3rem"}>
				<Heading size={"sm"} textAlign={"center"}>
					Register as an authorized {type}
				</Heading>
				<FormControl width={"50%"} margin={"auto"}>
					<Input
						type='text'
						placeholder='Username'
						focusBorderColor={primaryColor}
						mt={"1rem"}
						onChange={handleChange}
						value={registerCred.username}
					/>
					<Input
						type='text'
						placeholder={
							type === "business" ? "Work Email" : "Email"
						}
						focusBorderColor={primaryColor}
						mt={"1rem"}
						onChange={handleChange}
						value={registerCred.email}
					/>
					<Input
						type='tel'
						placeholder={
							type === "business" ? "Work Phone" : "Phone"
						}
						focusBorderColor={primaryColor}
						mt={"1rem"}
						onChange={handleChange}
						value={registerCred.email}
					/>
					{type === "business" && (
						<Input
							type='text'
							placeholder='Government Approved business ID'
							focusBorderColor={primaryColor}
							mt={"1rem"}
							onChange={handleChange}
							value={registerCred.govID}
						/>
					)}
					<InputGroup>
						<Input
							type={show ? "text" : "password"}
							placeholder='Password'
							focusBorderColor={primaryColor}
							mt={"1rem"}
							onChange={handleChange}
							value={registerCred.password}
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
						text={"Register"}
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

export default Register;
