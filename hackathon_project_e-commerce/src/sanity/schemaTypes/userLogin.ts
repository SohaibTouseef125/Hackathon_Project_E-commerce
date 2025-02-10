export const userLogin = {
    name: "userLogin",
    title: "User Login",
    type: "document",
    fields: [
        {
            name: "email",
            title: "Email",
            type: "string",
            required: true,
            unique: true
        },
        {
            name: "password",
            title: "Password",
            type: "string",
            required: true
        },
    ],
};