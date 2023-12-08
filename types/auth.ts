export type User = {
	email: string;
	name: string;
  };
  
  export type AuthUser = {
	token: string;
	user: User;
  };
  
  export type Login = {
	email: string;
	password: string;
  };
  
  export type AuthResponse = {
	message: string;
	data?: AuthUser;
	success?: boolean;
  };

  export type Register = {
	email: string;
	name: string;
	password: string;
  };