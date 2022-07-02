import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-4xl font-bold">Login</h2>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              class="input input-bordered w-full max-w-xs"
              {...register("email",  {
                pattern: /[A-Za-z]{3}/
              })}
            />
            <label class="label">
              <span class="label-text-alt">Alt label</span>
            </label>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input  />
            {errors.firstName?.type === "required" && "First name is required"}

            <input {...register("lastName", { required: true })} />
            {errors.lastName && <p>Last name is required</p>}

            <input
              {...register("mail", { required: "Email Address is required" })}
            />
            <p>{errors.mail?.message}</p>

            <input type="submit" />
          </form>

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
