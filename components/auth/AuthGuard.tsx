'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import useLocalStorage from '@/hooks/useLocalStorage';

export interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps): React.JSX.Element | null {
  const router = useRouter();
  const { authUser, refresh } = useAuth();
  const { getUserData } = useLocalStorage();
  const [isChecking, setIsChecking] = React.useState<boolean>(true);

  const checkPermissions = async (): Promise<void> => {
		try {
      const last = getUserData("user");
      console.log(last);
			refresh();
      console.log("user in auth",authUser);
			if (!authUser) {
				router.replace("/sign-in");
			}
			setIsChecking(false);
		} catch (error) {
			console.log(error);
		}
  };

  React.useEffect(() => {
    checkPermissions().catch(() => {
      // noop
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, []);

  if (isChecking) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}