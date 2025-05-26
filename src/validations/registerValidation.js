import * as yup from "yup";

const registerValidationSchema = yup.object({
  first_name: yup
    .string()
    .min(2, "First name must be at least 2 characters long")
    .required("First name is required"),
  last_name: yup
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  phone_number: yup.string().required("Phone number is required"),
  address: yup
    .string()
    .min(10, "Address must be at least 10 characters long")
    .required("Address is required"),
  city: yup
    .string()
    .min(2, "City must be at least 2 characters long")
    .required("City is required"),
});

export default registerValidationSchema;
