"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";

const UserIcon = () => {
  const { authUser } = useAuth();
	if (!authUser) {
		return null;
	}
	// console.log(authUser);
	return (
		<button onClick={ ()=> {}}>
			<Avatar>
				<AvatarImage src="" />
				<AvatarFallback>{authUser?.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
			</Avatar>
		</button>
	);
};

export default UserIcon;
