import axios from "axios";
import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  const [user1, loading1, error1] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (loading || loading1 || updating) {
      return;
    }
    if (error || error1 || error2) {
      toast(error?.message || error1?.message);
    }
    if (user || user1) {
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
  }, [
    error,
    from,
    loading,
    user,
    navigate,
    error1,
    user1,
    loading1,
    error2,
    updating,
  ]);
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data?.email, data?.password);
    await updateProfile({ displayName: data?.name });
    const email = data?.email;
    const name = data?.name;
    const url = "http://localhost:5000/users";
    axios
      .post(url, { name: name, email: email })
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <h2 className="text-4xl mb-4">Login To Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your name"
          className="input input-bordered input-secondary w-full max-w-xs"
          {...register("name", {
            required: {
              value: true,
              message: "Please input your name",
            },
          })}
        />
        <label className="label">
          {errors?.name?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors?.name.message}
            </span>
          )}
        </label>
        {/* ++++++++++++++++ */}
        <input
          type="email"
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
          value="Register"
        />
      </form>
      <p>
        Already have an account, Please{" "}
        <Link className="text-blue-600" to="/login">
          login
        </Link>{" "}
      </p>
      <div className="w-2/5 mx-auto divider">OR</div>
      <SocialLogin className="inline-block text-center mx-auto" />
    </div>
  );
};

export default Register;
