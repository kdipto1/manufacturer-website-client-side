import React, { useEffect, useRef } from "react";
import {
  useAuthState,
  useSendEmailVerification,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Utility/Loading";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const [user1, loading1, error1] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (loading || loading1) {
      return;
    }
    if (error || error1) {
      toast(error?.message || error1?.message);
    }
    if (user || user1) {
      navigate(from, { replace: true });
    }
  }, [error, from, loading, user, navigate, error1, user1, loading1]);
  const onSubmit = async (data) => {
    // console.log(data);
    await signInWithEmailAndPassword(data?.email, data?.password);
  };
  const resetPassword = async () => {
    const email = emailRef?.current?.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <h2 className="text-4xl mb-4">Login To Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          ref={emailRef}
          placeholder="Your email"
          className="input input-bordered input-secondary w-full max-w-xs"
          {...register("email", {
            required: {
              value: true,
              message: "Please input your email",
            },
          })}
        />
        <label className="label">
          {errors?.email?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors?.email.message}
            </span>
          )}
        </label>
        {/* ++++++++++++++++++++++ */}
        <input
          type="password"
          placeholder="Your password"
          className="input input-bordered input-secondary w-full max-w-xs"
          {...register("password", {
            required: {
              value: true,
              message: "Please input password",
            },
            minLength: {
              value: 6,
              message: "Password should be more than 6 character",
            },
          })}
        />
        <label className="label">
          {errors?.password?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors?.password.message}
            </span>
          )}
          {errors?.password?.type === "minLength" && (
            <span className="label-text-alt text-red-500">
              {errors?.password.message}
            </span>
          )}
        </label>
        <input
          className="btn btn-secondary w-full max-w-xs text-white"
          type="submit"
          value="Login"
        />
      </form>
      <p>
        Don't have an account, Please{" "}
        <Link className="text-blue-600" to="/register">
          Register
        </Link>{" "}
      </p>
      <p className="">
        Forget password?{" "}
        <span className="text-primary" onClick={resetPassword}>
          Reset Password
        </span>
      </p>
      <div className="w-2/5 mx-auto divider">OR</div>
      <SocialLogin className="inline-block text-center mx-auto" />
    </div>
  );
};

export default Login;
