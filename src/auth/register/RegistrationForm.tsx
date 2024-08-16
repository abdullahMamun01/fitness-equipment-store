import ControlledInput from "@/components/Form/ControlledInput";
import { Spinner } from "@/components/ui/spinner";
import { useLoginMutation, useRegisterMutation } from "@/redux/api/authApi";
import { registerSchema } from "@/zod/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FormEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type TReg = {
  fullName: string;
  email: string;
  password: string;
};

export default function RegistrationForm() {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: { fullName: "", email: "", password: "" },
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (formData: TReg) => {
    try {
      await register(formData).unwrap();
      toast.success("Register successfully", { position: "top-right" });
      navigate("/auth/login");
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
            inputType="text"
            label="fullName"
            name="fullName"
            placeholder="Enter your Full name"
          />
        </div>
        <div className="mb-6">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            inputType="email"
            label="email"
            name="email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="mb-6">
          <div className="relative">
            <ControlledInput
              className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="password"
              label="password"
              name="password"
              placeholder="enter your password"
            />
          </div>
        </div>
        <div className="flex mb-6 items-center">
          <input type="checkbox" id="rememberMe" />
          <label className="ml-2 text-xs text-gray-800" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button
          className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-primary hover:text-secondary bg-secondary rounded-full overflow-hidden"
          type="submit"
          disabled={isLoading}>
          <div className="absolute top-0 right-full hover:text-secondary w-full h-full bg-primary transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          <span className="relative">
            {" "}
            {isLoading ? (
              <Spinner className="text-white " size="small" />
            ) : (
              "Sign up"
            )}{" "}
          </span>
        </button>

        <div className="text-center">
          <span className="text-xs font-semibold text-gray-900">
            <span>Already have an account?</span>
            <a
              className="inline-block ml-1 text-orange-900 hover:text-orange-700"
              href="#">
              Sign in
            </a>
          </span>
        </div>
      </form>
    </FormProvider>
  );
}
