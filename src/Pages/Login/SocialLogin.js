import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Utility/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
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
