export const userRegister = {
  name: "user",
  title: "User Register",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: true,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      required: true,
      unique: true,
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      required: true,
    },
  ],
};
