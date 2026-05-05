import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Signup() {
  const [addUser, { error }] = useMutation(ADD_USER);

  const [formState, setFormState] = useState({
    username: "",
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
      const { data } = await addUser({
        variables: { ...formState },
      });

      const token = data?.addUser?.token;

      if (!token) throw new Error("No token returned");

      Auth.login(token);

    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="username"
          placeholder="Username"
          value={formState.username}
          onChange={handleChange}
          className="border p-2"
        />

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

        <button className="bg-green-600 text-white p-2">
          Create Account
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