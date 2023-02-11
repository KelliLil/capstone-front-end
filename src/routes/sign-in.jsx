import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputText from "../components/input-text";

export default function SignIn() {
  const [isRegistering, setIsRegistering] = useState(true);

  const formSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Container component="main" maxWidth="xs">
        <h1 className="text-center capitalize">Sign in</h1>
        <form
          className="mt-4 flex flex-col items-center gap-y-4"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
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
                <Alert severity="error">{errors.confirmPassword.message}</Alert>
              )}
            </InputText>
          )}
          <div className="my-4 flex flex-col items-center">
            <Button type="submit" fullWidth variant="contained">
              {isRegistering ? "Sign Up" : "Login"}
            </Button>
            <Button
              type="reset"
              onClick={() => {
                setIsRegistering((prev) => !prev);
              }}
            >
              {isRegistering
                ? "Already have an account?"
                : "Don't have an account?"}
            </Button>
          </div>
        </form>
      </Container>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
}
