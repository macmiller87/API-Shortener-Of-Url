export interface ICreateUserDTO {
  user_id?: string;
  userName: string;
  email: string;
  password: string;
  createdAt?: Date;
}
