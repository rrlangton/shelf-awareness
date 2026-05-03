import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import AuthForm from "../components/auth/AuthForm";
import useAuthForm from "../hooks/useAuthForm";

export default function Signup() {
  const [addUser] = useMutation(ADD_USER);

  const { formState, handleChange, handleSubmit } = useAuthForm(
    { username: "", email: "", password: "" },
    addUser,
    "addUser"
  );

  if (isAuthenticated) {
  return <Navigate to="/dashboard" replace />;
}

  return (
    <AuthForm
      title="Sign up"
      fields={[
        { name: "username", type: "text", label: "Username" },
        { name: "email", type: "email", label: "Email" },
        { name: "password", type: "password", label: "Password" },
      ]}
      values={formState}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText="Sign up"
    />
  );
}