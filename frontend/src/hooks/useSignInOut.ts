import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export function useSignInOut() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { signin, signout } = useAuth();
  const auth = getAuth();

  const login = (email: string, password: string) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        signin(userCredential.user.uid);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  const register = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        axios
          .post("http://localhost:5000/api/users", {
            id: userCredential.user.uid,
            email: email,
          })
          .then(() => {
            signin(userCredential.user.uid);
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        signout();
        navigate("/login");
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const resetError = () => {
    setError(false);
  };

  return { loading, error, login, register, logout, resetError };
}
