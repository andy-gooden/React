import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";
import "./styles.css";

let renderCount = 0;

export default function App() {
  const {
    register,
    getFieldState,
    formState,
    formState: { isDirty, dirtyFields, touchedFields, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: ""
    }
  });

  renderCount++;

  // you can invoke before render or within the render function
  const fieldState = getFieldState("firstName");

  // when formState is not subscrbeid, you can supply formState as argument
  getFieldState("firstName", formState);

  return (
    <form>
      <Headers renderCount={renderCount} />
      <input {...register("firstName", { required: true })} />
      <p>{getFieldState("firstName").isDirty && "dirty"}</p>
      <p>{getFieldState("firstName").isTouched && "touched"}</p>
      <button
        type="button"
        onClick={() => console.log(getFieldState("firstName"))}
      >
        field state
      </button>
    </form>
  );
}
