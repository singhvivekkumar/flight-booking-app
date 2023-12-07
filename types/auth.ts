export type TUser = {
	email: string;
	firstName: string;
	lastName: string;
  };
  
  export type AuthUser = {
	token: string;
	user: TUser;
  };
  
  export type TLogin = {
	email: string;
	password: string;
  };
  
  export type AuthResponse = {
	message: string;
	data?: AuthUser;
	success?: boolean;
  };