import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <button onClick={() => signInWithGoogle()}>Log in with Google</button>
    </div>
  );
};

export default SocialLogin;
