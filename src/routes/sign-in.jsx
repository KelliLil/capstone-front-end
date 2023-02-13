import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useSubmit } from "react-router-dom";
import * as yup from "yup";
import InputText from "../components/input-text";

// TODO: Go home if there is a token in localStorage
export default function SignIn() {
  const [isRegistering, setIsRegistering] = useState(true);

  // Manually set up the submit handler
  const submit2Router = useSubmit();

  const formSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: isRegistering
      ? yup.string().oneOf([yup.ref("password")], "Passwords must match")
      : null,
  });

  const {
    register,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <div className="h-screen bg-gray-400 text-rose-600">
        <Container component="main" maxWidth="xs">
          <h1 className="p-9 text-center font-serif capitalize">Iron Out</h1>
          <Form
            className="mt-4 flex flex-col items-center gap-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.target);

              // * ⚠️ FormData doesn't support boolean
              // We will send it as a string, or not send it at all (if it's false) 🤓
              isRegistering && fd.append("isRegistering", isRegistering);

              // Let the router handle the submit
              submit2Router(
                fd,

                // * Need this to trigger the action in the router
                { method: "POST" }
              );
            }}
          >
            <InputText label="Username" id="username" register={register}>
              {errors.username && (
                <Alert severity="error">{errors.username.message}</Alert>
              )}
            </InputText>
            <InputText
              label="Password"
              id="password"
              type="password"
              register={register}
            >
              {errors.password && (
                <Alert severity="error">{errors.password.message} </Alert>
              )}
            </InputText>
            {isRegistering && (
              <InputText
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                register={register}
              >
                {errors.confirmPassword && (
                  <Alert severity="error">
                    {errors.confirmPassword.message}
                  </Alert>
                )}
              </InputText>
            )}
            <div className="my-4 flex flex-col items-center gap-y-8">
              <Button type="submit" fullWidth variant="contained">
                {isRegistering ? "Sign Up" : "Login"}
              </Button>
              <Button
                // * Avoid the HTML 'reset' for React Hook Form instead use the reset() method ☝️
                type="button"
                onClick={() => {
                  reset();
                  setIsRegistering((prev) => !prev);
                }}
              >
                {isRegistering
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </Button>
            </div>
          </Form>
        </Container>
        <DevTool control={control} /> {/* set up the dev tool */}
      </div>
    </>
  );
}
