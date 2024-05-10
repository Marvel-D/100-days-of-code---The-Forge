export type PageRoutes = {
  id: number;
  title: string;
  link: string;
  icon: any;
};

export type iUser = {
  email: string | null;
  name: string;
  uid?: string;
  authProvider?: string;
};

// export interface iAuthState {
//   userName: string | null;
//   googleSignIn?: () => void;
// }

export type iSignInInput = {
  name: string;
  email: string;
  password: string;
};

export type iLoginInput = {
  email: string;
  password: string;
};
