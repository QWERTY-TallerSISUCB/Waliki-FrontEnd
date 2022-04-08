// tiene que ser igual al dto del backend
export interface UserSignUpMO {
    email: string;
    //userId: number;
    userName: string;
    userPassword: string;
    rol: string;
  }

export interface UserLoginMO {
    userName: string;
    userPassword: string;
}

