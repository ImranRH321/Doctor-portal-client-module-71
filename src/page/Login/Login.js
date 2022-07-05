import React, { useEffect, useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Sheared/Loading";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { async } from "@firebase/util";

const Login = () => {
  // google
  const [signInWithGoogle, userG, gloading, gerror] = useSignInWithGoogle(auth);
  //  login user
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  /* reset password send  */
  const [sendPasswordResetEmail, sending, errorR] =
    useSendPasswordResetEmail(auth);
  /* email  */
  // const emailRef = useRef('')

  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  let signInError;

  if (gerror || error) {
    signInError = (
      <p className="text-red-400 py-2">
        Error:{" "}
        <small>
          {gerror?.message} {error?.message}
        </small>
      </p>
    );
  }

  useEffect(() => {
    if (user || userG) {
      navigate(from, { replace: true });
    }
  }, [userG, user, navigate, from]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async data => {
    console.log(data);
    await signInWithEmailAndPassword(data.email, data.password);
  };


  /*  reset click hanlde button  */
  const handleResetPass = async () => {
    console.log(email);
    await sendPasswordResetEmail(email);
    alert('Sent email');
  };

  if (gloading || loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-4xl font-bold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs my-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  onChange: (e) => setEmail(e.target.value)})}
              />
            </div>
            {/* -------------- */}
            <div className="form-control w-full max-w-xs my-5">
              <label className="label">
                <span className="label-text">Password</span>
                {errors.password && <p>Last one Special Charckter</p>}
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered c"
                {...register(
                  "password",
                  { required: true },
                  { pattern: /(?=.*?[#?!@$%^&*-])/ }
                )}
              />
            </div>
            {signInError}
            <input
              type="submit"
              className="bg-black btn w-full max-w-xs"
              value="Login"
            />
          </form>
          <p>
            New to Doctor portal ?{" "}
            <Link className="text-secondary" to="/signup">
              Create Account
            </Link>
          </p>
          <p>
            Forget password ---?{" "}
            <button onClick={handleResetPass} className="text-green-600">
              Reset
            </button>
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

export default Login;
