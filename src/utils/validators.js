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

export const signupSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must contain at least 6 characters")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Password confirmation doesn't match the password"
    )
    .required("Confirm password is required"),
});

export const signinSchema = yup.object().shape({
  usernameOrEmail: yup.string().required("Username or Email is required"),
  password: yup
    .string()
    .min(6, "Password must contain at least 6 characters")
    .required("Password is required"),
});