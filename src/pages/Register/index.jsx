import { useFormik } from "formik";
import { useStore } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerValidationSchema } from "../../validations/index";

export default function Register() {
  const navigate = useNavigate();
  const { createUser } = useStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      address: "",
      city: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("first_name", values.first_name);
      formData.append("last_name", values.last_name);
      formData.append("phone_number", values.phone_number);
      formData.append("address", values.address);
      formData.append("city", values.city);

      try {
        const response = await createUser(formData);

        if (response?.status === 200) {
          toast.success("Registered successfully");
          navigate("/login");
        }
      } catch (err) {
        toast.error(
          `Error: ${err?.response?.data?.message || "Something went wrong"}`
        );
      }
    },
  });

  return (
    <>
      <form
        className="h-full w-full flex justify-center overflow-hidden  md:p-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="lg:border lg:border-black mt-2 md:border md:border-black overflow-hidden rounded-md lg:w-[32rem] md:w-[48rem] w-full lg:mx-0 md:mx-0 lg:p-2.5 md:p-2">
          <h3 className="lg:text-2xl md:text-lg text-base font-medium">
            Sign Up
          </h3>
          <div className="flex flex-col lg:mt-2.5 md:mt-2 mt-1.5 lg:p-2.5 md:p-1.5 p-0.5">
            <label
              htmlFor="email"
              className="mb-1.5 lg:text-lg md:text-base text-sm"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              type="text"
              className="border border-b rounded-md p-0.5 md:p-1 lg:p-1.5 w-full"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs">
                <p>{formik.errors.email}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:mt-2.5 md:mt-2 mt-1.5 lg:p-2.5 md:p-1.5 p-0.5">
            <label
              htmlFor="password"
              className="mb-1.5 lg:text-lg md:text-base text-sm"
            >
              Password
            </label>
            <input
              name="password"
              id="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              className="border border-b rounded-md p-0.5 md:p-1 lg:p-1.5 w-full"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-xs">
                <p>{formik.errors.password}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:mt-2.5 md:mt-2 mt-1.5 lg:p-2.5 md:p-1.5 p-0.5">
            <label className="mb-1.5 lg:text-lg md:text-base text-sm">
              First Name
            </label>
            <input
              name="first_name"
              id="first_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.first_name}
              type="text"
              className="border border-b rounded-md p-0.5 md:p-1 lg:p-1.5 w-full"
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <div className="text-red-500 text-xs">
                <p>{formik.errors.first_name}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:mt-2.5 md:mt-2 mt-1.5 lg:p-2.5 md:p-1.5 p-0.5">
            <label className="mb-1.5 lg:text-lg md:text-base text-sm">
              Last Name
            </label>
            <input
              name="last_name"
              id="last_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.last_name}
              type="text"
              className="border border-b rounded-md p-0.5 md:p-1 lg:p-1.5 w-full"
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <div className="text-red-500 text-xs">
                <p>{formik.errors.last_name}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:mt-2.5 md:mt-2 mt-1.5 lg:p-2.5 md:p-1.5 p-0.5">
            <label className="mb-1.5 lg:text-lg md:text-base text-sm">
              Phone Number
            </label>
            <input
              name="phone_number"
              id="phone_number"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone_number}
              type="text"
              className="border border-b rounded-md p-0.5 md:p-1 lg:p-1.5 w-full"
            />
            {formik.touched.phone_number && formik.errors.phone_number && (
              <div className="text-red-500 text-xs">
                <p>{formik.errors.phone_number}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:mt-2.5 md:mt-2 mt-1.5 lg:p-2.5 md:p-1.5 p-0.5">
            <label className="mb-1.5 lg:text-lg md:text-base text-sm">
              Address
            </label>
            <input
              name="address"
              id="address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address}
              type="text"
              className="border border-b rounded-md p-0.5 md:p-1 lg:p-1.5 w-full"
            />
            {formik.touched.address && formik.errors.address && (
              <div className="text-red-500 text-xs">
                <p>{formik.errors.address}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:mt-2.5 md:mt-2 mt-1.5 lg:p-2.5 md:p-1.5 p-0.5">
            <label className="mb-1.5 lg:text-lg md:text-base text-sm">
              City
            </label>
            <input
              name="city"
              id="city"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.city}
              type="text"
              className="border border-b rounded-md p-0.5 md:p-1 lg:p-1.5 w-full"
            />
            {formik.touched.city && formik.errors.city && (
              <div className="text-red-500 text-xs">
                <p>{formik.errors.city}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col lg:mt-2.5 md:mt-2 mt-1.5 lg:p-2.5 md:p-1.5 p-0.5">
            <button
              type="submit"
              disabled={!formik.isValid}
              className={`cursor-pointer bg-blue-500 text-white rounded-md lg:text-lg md:text-base text-sm lg:p-2.5 md:p-1.5  p-1 ${
                !formik.isValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
