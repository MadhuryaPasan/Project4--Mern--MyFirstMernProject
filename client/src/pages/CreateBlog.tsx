import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { createDoc } from "../functions/dbConnectApi";


interface iFormInput {
  name: string;
  age: number;
}


const CreateBlog = () => {

const Create:SubmitHandler<iFormInput> = async(data) => {
  await createDoc(data);

}


// register is used to register the input field
// errors is used to show the error message
const {register, formState: { errors }, handleSubmit,} = useForm({
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
          {...register("name", { required: "name is required" })}
          className=" outline-1"
          placeholder="Enter name"
        />

        {/* error message */}
        {errors.name && <div>{errors.name.message}</div>}

        <div>age</div>
        <input type=" number" {...register("age")} className=" outline-1" placeholder=" Enter age"/>
        <br />
        <br />
        <button type="submit" className="bg_primary p-2">
          submit
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
