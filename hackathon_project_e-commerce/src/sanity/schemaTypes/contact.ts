export const contact = {
  name: "contact",
  type: "document",
  title: "Contact",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: true
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      unique: true,
      required: true
    },
    {
      name: "subject",
      title: "Subject",
      type: "string",
      required: true
    },
    {
      name: "message",
      title: "Message",
      type: "string",
      required: true
    },
  ],
};
