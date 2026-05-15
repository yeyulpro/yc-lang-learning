import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../api/auth";

export const useSignup = () => {
  return useMutation({
    mutationFn: signupUser,

    onSuccess: (data) => {
      console.log("signup success", data);
    },

    onError: (error) => {
      console.log(
        error.response?.data?.message
      );
    },
  });
};