interface User {
  name: string;
  age?: number;
  email: string;
}

type PickUser = Pick<User, "name" | "age">;
type OmitUser  = Omit<User, "age">;
type PartialUser  = Partial<User>;
type RequiredUser  = Required<User>;

