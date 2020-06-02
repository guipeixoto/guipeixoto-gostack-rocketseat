export default interface IUpdateUserDTO {
  user_id: string;
  name: string;
  email: string;
  oldPassword?: string;
  password?: string;
}
