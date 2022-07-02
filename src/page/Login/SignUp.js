import React from "react";
import Loading from "../Sheared/Loading";
import {
  
    useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  // google user
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  //  new Register user
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
//  update 
const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
const navigate = useNavigate();

  let signInError;
  if (gerror || error || updatingError) {
    signInError = (
      <p className="text-red-400 py-2">
        Error:{" "}
        <small>
          {gerror?.message} {error?.message}
        </small>
      </p>
    );
  }

  if (guser || user) {
    console.log(guser, user);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async data => {
    console.log(data);
  await  createUserWithEmailAndPassword( data.email, data.password);
  await updateProfile({displayName: data.name})
     console.log('updating name');
     navigate('/appointment')
  };

  if (gloading || loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-4xl font-bold">SignUp</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs my-5">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your name"
                class="input input-bordered w-full max-w-xs"
                {...register("name", { required: "name Address is required" })} 
              />
            </div>
            {/* ----------------- */}
            <div class="form-control w-full max-w-xs my-5">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", { required: "Email Address is required" })} 
              />
            </div>
            {/* -------------- */}
            <div class="form-control w-full max-w-xs my-5">
              <label class="label">
                <span class="label-text">Password</span>
             
              </label>
              <input
                type="password"
                placeholder="Your password"
                class="input input-bordered c"
                {...register(
                  "password",
                  { required: true },
                  { pattern: /(?=.*?[#?!@$%^&*-])/ }
                )}
              />
                 {errors.password && <p className="text-red-400">Last one Special Charckter</p>}
            </div>
            {signInError}
            <input
              type="submit"
              className="bg-black btn w-full max-w-xs"
              value="Sing Up"
            />
          </form>
          <p>
            AllReady...Have Account?  <Link className="text-success" to="/login">
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn bg-black">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
