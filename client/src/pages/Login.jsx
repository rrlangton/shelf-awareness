import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      const token = data?.login?.token;

      if (!token) throw new Error("No token returned");

      Auth.login(token); // stores token + redirects

    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
          className="border p-2"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={handleChange}
          className="border p-2"
        />

        <button className="bg-blue-600 text-white p-2">
          Login
        </button>

        {error && (
          <p className="text-red-500">
            {error.message}
          </p>
        )}
      </form>
    </div>
  );
}