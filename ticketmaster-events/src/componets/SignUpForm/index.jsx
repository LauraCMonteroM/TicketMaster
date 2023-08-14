import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleClearClick = () => {
          reset(),
  };

  const handleSubmitForm = (data) => {
          console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Nombre
        <input {...register("name", {required: true})} />
      </label>
      <label>
        Edad
        <input {...register("age", {required: true})} />
      </label>
      <label>
        Dirección
        <input {...register("address", {required: true})} />
      </label>
      <label>
        Zipcode
        <input {...register("zipcode", {required: true})} />
      </label>
      <label>
        Teléfono
        <input {...register("phone", {required: true})} />
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>
          Limpiar
        </button>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default SignUpForm;
