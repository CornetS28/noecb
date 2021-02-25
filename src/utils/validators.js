import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
  subject: yup
    .string()
    .max(30, "Subject must contain 30 characters in max")
    .min(8, "Subject must contain at least 8 characters")
    .required("Subject is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  message: yup
    .string()
    .max(1000, "Message must contain 1000 characters in max")
    .min(5, "Message must contain at least 5 characters")
    .required("Message is required"),
});