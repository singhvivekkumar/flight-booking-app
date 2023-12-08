"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/useUser";

const UserIcon = () => {
  const { user } = useUser();
	return (
		<button onClick={ ()=> {}}>
			<Avatar>
				<AvatarImage src="" />
				<AvatarFallback>{user?.user.name.charAt(0).toUpperCase()}</AvatarFallback>
			</Avatar>
		</button>
	);
};

export default UserIcon;
