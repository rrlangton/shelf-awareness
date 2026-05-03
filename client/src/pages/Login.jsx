import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import AuthForm from "../components/auth/AuthForm";
import useAuthForm from "../hooks/useAuthForm";

export default function Login() {
  const { isAuthenticated } = useAuthContext();

  const [loginUser] = useMutation(LOGIN_USER);

  const { formState, handleChange, handleSubmit } = useAuthForm(
    { email: "", password: "" },
    loginUser,
    "login"
  );

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <AuthForm
      title="Sign in"
      fields={[
        { name: "email", type: "email", label: "Email" },
        { name: "password", type: "password", label: "Password" },
      ]}
      values={formState}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText="Sign in"
    />
  );
}