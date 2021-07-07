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

export const memeGeneratorSchema = yup.object().shape({
  phrase_1: yup.string().required("Tell us who you are"),
  phrase_2: yup
    .string()
    .max(50, "Field must contain in max 50 characters")
    .required("Tell us your reason"),
  file_name: yup
    .mixed()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= 30000000;
    })
    .test("type", "We only support png and jpeg at the moment", (value) => {
      return (
        (value && value[0].type === "image/png") ||
        (value && value[0].type === "image/jpg") ||
        value[0].type === "image/jpeg"
      );
    }),
});