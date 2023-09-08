import { object, string, date } from "yup";

export const userSchema = object({
  name: string()
    .required("Can not be empty")
    .min(4, "Must be at least 4 characters"),
  username: string()
    .required("Can not be empty")
    .max(6, "You can enter max 6 characters"),
  password: string().required("Enter password").min(6, "Must be 8 characters"),
  // createdOn: date().default(() => new Date()),
});
