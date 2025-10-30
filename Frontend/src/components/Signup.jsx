import axios from "axios";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //password match validation
  const validatePasswordMatch = (value) => {
    return value === watch("password") || "Passwords do not match";
  };
  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
    };
    console.log(userInfo);
    axios
      .post("http://localhost:5002/user/signup", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          alert("Signup Successful! Please Login.");
        }
        localStorage.setItem("messenger", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("There was an error!", error);
        if (error.response) {
          alert("Error" + error.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-blue px-6 py-3 rounded-md space-y-3 w-90"
        >
          <h1 className="text-2xl items-center text-blue-600 font-bold">
            Messenger
          </h1>
          <h2 className="text-2xl items-center">
            Create a new{" "}
            <span className="text-blue-600 font-semibold">Account</span>
          </h2>
          {/* <div className="grid items-center-safe justify-center space-y-5"> */}
          <div className="grid space-y-5">
            {/* USERNAME */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                {...register("name", { required: true })}
                type="text"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
              />
            </label>
            {/* {errors.name && <span>This field is required</span>} //custom validation */}

            {/* EMAIL */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="mail@site.com"
                required
              />
            </label>
            {/* {errors.email && <span>This field is required</span>} //custom validation */}
            <div className="validator-hint hidden">
              Enter valid email address
            </div>

            {/* PASSWORD */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                className="grow"
                required
                placeholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                {...register("password", { required: true })}
              />
            </label>
            {/* {errors.password && <span>This field is required</span>} //custom validation */}

            {/* CONFIRM PASSWORD */}
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="confirmpassword"
                className="grow"
                required
                placeholder="Confirm Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                {...register("confirmpassword", {
                  required: true,
                  validate: validatePasswordMatch,
                })}
              />
            </label>
            {errors.confirmpassword && (
              <span className="text-red-600 font-semibold">
                {errors.confirmpassword.message}
              </span>
            )}
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            {/* text and button */}
            <div className="justify-center px-4">
              <input
                type="submit"
                value="Signup"
                className="text-white bg-blue-600 cursor-pointer w-full rounded-lg py-3"
              ></input>
            </div>
            <div className="flex justify-between">
              <p>
                Already have an Account?{" "}
                <span className="text-blue-500 underline cursor-pointer ml-1">
                  Login
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
