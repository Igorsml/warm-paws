import { useForm } from "react-hook-form";
import "./HookForm.module.scss";

export const HookForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data: object) => {
    alert(JSON.stringify(data));
    reset();
  };

  console.log("render:");
  console.log(isValid);

  return (
    <div>
      <h1>Связаться</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register("firstName", {
              required: "Обязательное поле",
              minLength: {
                value: 3,
                message: "Слишком короткое имя",
              },
            })}
          />
        </label>
        <div>
          {errors?.firstName && (
            <p>{errors?.firstName?.message?.toString() || "Error!"}</p>
          )}
        </div>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          autoFocus
          {...register("email", {
            required: "Email неверный",
          })}
        />

        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};
