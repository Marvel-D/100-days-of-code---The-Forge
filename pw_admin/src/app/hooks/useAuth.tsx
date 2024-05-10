"use client";
import { useState } from "react";
import {
  loginWithEmailAndPassword,
  signUpWithEmailAndPassword,
  addUserToDb,
  getUserData,
} from "../lib/data";
import { iUser } from "../lib/definitions";
import { useRouter } from "next/navigation";
import { create } from "zustand";
import { updateProfile } from "firebase/auth";

const useUserState = create((set) => ({
  userData: {},
  updateUserData: (userData: unknown) => set(() => ({ userData: userData })),
}));

export const useAuth = () => {
  // "use client";
  // const userData = useUserState((state: any) => state.userData);
  // const updateUserData = useUserState((state: any) => state.updateUserData);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUpnWithEP = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    setError(null);

    console.log("...signing in");
    signUpWithEmailAndPassword({ email, password })
      .then((userCredentials) => {
        const fetchUser = userCredentials.user;

        const user: iUser = {
          name: name,
          uid: fetchUser.uid,
          authProvider: "local",
          email: fetchUser.email,
        };
        updateProfile(fetchUser, { displayName: name });
        addUserToDb(user);
      })
      .then(() => {
        router.push("/auth");
      })
      .catch((error: any) => {
        console.log("error creating user"); //
        setError(error.message);
        console.log(error); //
      });
  };

  const loginWithEP = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    setError(null);

    console.log("...signing in");
    await loginWithEmailAndPassword({ email, password })
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        const userId = user.uid;

        let data = await getUserData(userId);

        localStorage.setItem("userData", JSON.stringify(data));
      })
      .then(() => {
        router.push("/dashboard");
      })
      .catch((error: any) => {
        console.log("error creating user");
        setError(error.message);
        console.log(error);
      });
  };
  let test = localStorage.getItem("userData")!;
  // if (test) {
  let userData = JSON.parse(test);
  // }

  return { userData, isLoading, error, signUpnWithEP, loginWithEP };
};
