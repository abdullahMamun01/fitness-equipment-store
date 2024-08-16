import ControlledInput from "@/components/Form/ControlledInput";
import { Spinner } from "@/components/ui/spinner";
import { useLoginMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/features/auth/authSLice";
import { useAppDispatch } from "@/redux/hooks";
import { loginSchema } from "@/zod/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
type TLogin = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const form = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (formData: TLogin) => {
    try {
      const credential = await login(formData).unwrap();
      const user = credential.data;
      const token = credential.token;
      
      dispatch(setUser({user,token}))
      toast.success("Login successfully", { position: "top-right" });
      navigate('/')
      
    } catch (error) {
      if (error && typeof error === "object" && "data" in error) {
        const err = error as { data: { message: string } };

        toast.error(err.data.message || "An unexpected error occurred", {
          position: "top-right",
        });
      } else {
        toast.error("An unexpected error occurred", { position: "top-right" });
      }
    }
  };

  return (
    <FormProvider {...form}>
      <form action="" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-6">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            inputType="email"
            label="email"
            name="email"
            placeholder="pat@saturn.dev"
          />
        </div>
        <div className="mb-7">
          <div className="flex mb-1.5 items-center justify-between">
            <div></div>
            <a
              className="inline-block text-xs font-semibold text-orange-900 hover:text-gray-900"
              href="#">
              Forget password?
            </a>
          </div>
          <div className="relative">
            <ControlledInput
              className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="password"
              label="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="flex mb-6 items-center">
          <input type="checkbox" id="remember-me" />
          <label className="ml-2 text-xs text-gray-800" htmlFor="remember-me">
            Remember for 30 days
          </label>
        </div>
        <button
          className="relative group block w-full mb-32 py-3 px-5 text-center hover:text-secondary text-sm font-semibold text-primary bg-secondary rounded-full overflow-hidden"
          type="submit">
          <div className="absolute top-0 right-full w-full h-full bg-gray-900  transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          <span className="relative ">
            {isLoading ? (
              <Spinner className="text-white " size="small" />
            ) : (
              "Login"
            )}
          </span>
        </button>
        <div className="text-center">
          <span className="text-xs font-semibold text-gray-900">
            <span>Don’t have an account?</span>
            <Link
              className="inline-block ml-1 text-orange-900 hover:text-orange-700"
              to="/auth/register">
              Sign up
            </Link>
          </span>
        </div>
      </form>
    </FormProvider>
  );
}
