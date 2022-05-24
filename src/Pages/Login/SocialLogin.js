import axios from "axios";
import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Utility/Loading";

const SocialLogin = () => {
  const [user1, loading1, error1] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  useEffect(() => {
    if (user) {
      const url = "http://localhost:5000/login";
      axios
        .post(url, { email: user1?.email })
        .then((response) => {
          const { data } = response;
          localStorage.setItem("accessToken", data.token);
          console.log(data);
          navigate(from, { replace: true });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if (loading) {
      <Loading />;
      return;
    }
    if (error) {
      toast(error?.message);
    }
  }, [from, user, navigate, error, loading]);
  return (
    <div className="">
      <button className="btn btn-accent" onClick={() => signInWithGoogle()}>
        Log in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
