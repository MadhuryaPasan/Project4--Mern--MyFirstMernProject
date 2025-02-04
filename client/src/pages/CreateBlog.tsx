import { SubmitHandler, useForm } from "react-hook-form";
import { createDoc } from "../functions/dbConnectApi";

interface iFormInput {
  name: string;
  age: number;
}

const CreateBlog = () => {
  const Create: SubmitHandler<iFormInput> = async (data) => {
    await createDoc(data);
  };

  // register is used to register the input field
  // errors is used to show the error message
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      age: 0,
    },
  });

  return (
    <>
      <div>CreateBlog</div>
      <form onSubmit={handleSubmit(Create)} className=" m-2">
        <div>name</div>
        <input
          type="text"
          {...register("name", {
            required: "name is required",
            minLength: { value: 2, message: "minimum 2 characters" },
            maxLength: { value: 100, message: "maximum 100 characters" },
          })}
          className=" outline-1"
          placeholder="Enter name"
        />

        {/* error message */}
        {errors.name && (
          <div className=" text-red-500">{errors.name.message}</div>
        )}

        <div>age</div>
        <input
          type=" number"
          {...register("age", {
            required: "age is required",
            max: { value: 100, message: "max age is 100" },
            min: { value: 18, message: "min age is 18" },
          })}
          className=" outline-1"
          placeholder=" Enter age"
        />
        {/* error message */}
        {errors.age && (
          <div className=" text-red-500">{errors.age.message}</div>
        )}
        <br />
        <br />
        <button type="submit" className="bg_primary p-2">
          {isSubmitSuccessful ? "Submitted" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default CreateBlog;

/*
email example
<Input {...register("email",{ required: "Email is required",pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid Email" }})
} placeholder="Email" />

*/
