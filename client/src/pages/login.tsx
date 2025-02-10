import React from 'react'
import { createUser } from "../functions/dbConnectApi";
import { SubmitHandler, useForm } from "react-hook-form";




interface iFormInput {
  name: string;
  email: string;
  pass: string;
}

const login = () => {

    const Create: SubmitHandler<iFormInput> = async (data) => {
        await createUser(data); // change this
      };
    
      const {
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
      } = useForm({
        defaultValues: {
          name: "",
          email: "",
          pass: "",
        },
      });



  return (
    <>
        <div>login</div>
        
        <form onSubmit={handleSubmit(Create)} className=" m-2">
        <div>email</div>
        <input
          type="text"
          {...register("email", {
            required: "email is required",
          })}
          className=" outline-1"
          placeholder="Enter email"
        />
        {errors.email && (
          <div className=" text-red-500">{errors.email.message}</div>
        )}
        <br />
        <div>password</div>
        <input
          type="text"
          {...register("pass", {
            required: "pass is required",
          })}
          className=" outline-1"
          placeholder="Enter password"
        />
        {errors.pass && (
          <div className=" text-red-500">{errors.pass.message}</div>
        )}

        <br />
        <br />
        <button type="submit" className="bg_primary p-2">
          {isSubmitSuccessful ? "Submitted" : "Submit"}
        </button>
      </form>

    </>
  )
}

export default login