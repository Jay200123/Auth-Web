import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../state/store.js";
import { loginValidationSchema } from "../../validations/index.js";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);

        if (data?.status === 200) {
          toast.success("Logged in successfully");
          navigate("/protected");
        }
      } catch (err) {
        toast.error(err?.response?.data?.message || "Something went wrong");
        navigate("/login");
      }
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-center justify-center"
      >
        {/* Login  page forms */}
        <div className="flex flex-col justify-between lg:w-96 lg:h-96 md:w-80 md:h-80 h-64 w-64 border border-black rounded-md p-2.5">
          <h3 className="lg:text-2xl md:text-lg text-base text-center font-medium">
            Sign In
          </h3>
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-medium text-sm lg:text-base">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="text"
              className="w-full lg:text-base md:text-sm text-xs lg:p-1.5 md:p-1 p-0.5 rounded-sm border border-gray-400"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs">
                <p>{formik.errors.email}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-medium text-sm lg:text-base">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="text"
              className="w-full lg:text-base md:text-sm text-xs lg:p-1.5 md:p-1 p-0.5 rounded-sm  border border-gray-400"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-xs">
                <p>{formik.errors.password}</p>
              </div>
            )}
          </div>
          <div className="gap-2 mt-4">
            <button
              type="submit"
              className={`w-full bg-blue-500 rounded-md lg:text-lg font-medium md:text-base text-sm text-white p-2 cursor-pointer border border-blue-500 hover:bg-white hover:text-blue-500 transition-all duration-500 ${
                !formik.isValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
