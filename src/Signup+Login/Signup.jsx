import { Checkbox, PasswordInput, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
	const icon = <IconAt size={16} />;
	const lockicon = <IconLock size={18} stroke={1.5} />;
	return (
		<div className="w-1/2 h-[100vh] flex flex-col items-center justify-center gap-14">
			<h1 className="text-3xl font-semibold">Create Account</h1>
			<div className="flex flex-col gap-4">
				<TextInput
					className="[&_input]:!w-[350px]  [&_input]:focus:!outline-none "
					withAsterisk
					label="Full Name"
					placeholder="Full Name"
				/>
				<TextInput
					className="[&_input]:!w-[350px]  [&_input]:focus:!outline-none "
					withAsterisk
					leftSection={icon}
					label="Email"
					placeholder="Your email"
				/>
				<PasswordInput className="[&_input]:!w-[350px]" withAsterisk leftSection={lockicon} label="Password" placeholder="Enter Password" />
				<PasswordInput className="[&_input]:!w-[350px]" withAsterisk leftSection={lockicon} label="Confirm Password" placeholder="Enter Confirm Password" />
				<Checkbox withAsterisk
					label="I agree to the terms and conditions"
					color="green"
				/>
				<button className="w-[350px] bg-black text-white hover:bg-green-500 hover:text-black py-3 mt-[10px] rounded-md hover:cursor-pointer">Signup</button>
				<div className="mx-auto">
					Have an account already? <Link className="hover:underline text-green-500"to="/login">login</Link>
				</div>
			</div>
		</div>
	)
}

export default Signup