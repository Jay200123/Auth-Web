export default function Login() {
  return (
    <>
      <form className="flex items-center justify-center">
        {/* Login  page forms */}
        <div className="flex flex-col justify-between lg:w-96 lg:h-96 md:w-80 md:h-80 h-64 w-64 border border-black rounded-md p-2.5">
          <h3 className="lg:text-2xl md:text-lg text-base text-center font-medium">
            Sign In
          </h3>
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-medium text-sm lg:text-base">Email</label>
            <input
              type="text"
              placeholder="text"
              className="w-full lg:p-1.5 md:p-1 p-0.5 rounded-sm border border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-medium text-sm lg:text-base">Password</label>
            <input
              type="password" 
              placeholder="text"
              className="w-full lg:p-1.5 md:p-1 p-0.5 rounded-sm  border border-gray-400"
            />
          </div>
          <div className="gap-2 mt-4">
            <button className="w-full bg-blue-500 rounded-md lg:text-lg font-medium md:text-base text-sm text-white p-2">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
