
export const billing = {
  name: "billingDetails",
  title: "BillingDetails",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      required: true,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      unique: true,
      required: true,
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      required: true,
    },
    {
      name: "city",
      title: "City",
      type: "string",
      required: true,
    },
    {
      name: "state",
      title: "State",
      type: "string",
      required: true,
    },
    {
      name: "zip",
      title: "Zip",
      type: "string",
      required: true,
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      required: true,
    },
  ],
};
