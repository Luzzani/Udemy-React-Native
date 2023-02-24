import { useForm } from "../hooks/useForm";
export const Formularios = () => {
  const { onChange, state } = useForm({
    email: "test@test.com",
    password: "123456",
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        placeholder="Email"
        className="form-control"
        value={state.email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <input
        type="text"
        placeholder="Password"
        className="form-control mt-2 mb-2"
        value={state.password}
        onChange={({ target }) => onChange(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </code>
    </>
  );
};
