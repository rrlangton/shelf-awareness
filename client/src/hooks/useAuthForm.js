// src/hooks/useAuthForm.js

import { useState } from "react";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function useAuthForm(initialState, mutationFn, mutationName) {
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await mutationFn({
        variables: { ...formState },
      });

      const token = data?.[mutationName]?.token;

      if (!token) {
        throw new Error("No token returned from server");
      }

      Auth.login(token);

      // Get user ID safely
      const profile = Auth.getProfile();
      const userId = profile?.data?._id || profile?._id;

      navigate(`/profile/${userId}`);
    } catch (err) {
      console.error("Auth error:", err);
    }
  };

  return { formState, handleChange, handleSubmit };
}