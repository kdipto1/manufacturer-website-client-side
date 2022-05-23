import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="">
      <button className="btn btn-accent" onClick={() => signInWithGoogle()}>
        Log in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
