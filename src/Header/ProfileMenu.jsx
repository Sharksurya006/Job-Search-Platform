import React, { useState } from 'react'
import { Menu, Button, Text, Avatar } from '@mantine/core';
import { Switch } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { CiLogout } from "react-icons/ci";
import {
	IconSettings,
	IconSearch,
	IconPhoto,
	IconMessageCircle,
	IconTrash,
	IconArrowsLeftRight,
	IconUserCircle,
	IconFileAi,
	IconFileText,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
const ProfileMenu = () => {
	const [checked, setChecked] = useState(false);
	const [opened, setOpened] = useState(false);
	return (
		<div>
			<Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
				<Menu.Target>
					<Avatar className="h-12 w-12 cursor-pointer" src="avatar.png" alt="it's me" />
				</Menu.Target>

				<Menu.Dropdown onChange={()=>setOpened(true)} className="[&>*]:hover:!bg-green-500" >
					<Link to='user-profile'>
					<Menu.Item leftSection={<IconUserCircle size={14} />}>
					    Profile
					</Menu.Item>
					</Link>
					<Menu.Item leftSection={<IconMessageCircle size={14} />}>
						Messages
					</Menu.Item>
					<Menu.Item leftSection={<IconFileText size={14} />}>
						Resume
					</Menu.Item>
					<Menu.Item
						leftSection={<IconMoonStars size={14} />}
						rightSection={
							<Switch
								checked={checked}
								onChange={(event) => setChecked(event.currentTarget.checked)}
								size="md"
								color="dark.4"
								onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
								offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
							/>
						}
					>

					</Menu.Item>

					<Menu.Divider />

					<Menu.Item>
						<div className="flex gap-3">
							<CiLogout className="text-red-600 h-6 w-6"/>
						     <p className="font-semibold">Logout</p>
						</div>
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</div>
	)
}

export default ProfileMenu