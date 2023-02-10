import { signIn } from "next-auth/react";
import Container from "../components/Container";
import { DivMain } from "./styled";
import { fromZodError } from "zod-validation-error";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const InputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type InputSchema = z.infer<typeof InputSchema>;

function Login() {
  const { register, handleSubmit } = useForm<InputSchema>({ mode: "all" });
  const handleSingIn: SubmitHandler<InputSchema> = (data) =>
    signIn(
      "credentials",
      { callbackUrl: "http://localhost:3000/admin/dashboard", redirect: true },
      data
    );
  return (
    <Container background="rgba(0, 0, 0, 0.815)">
      <DivMain>
        <form action="#" onSubmit={handleSubmit(handleSingIn)}>
          <h1>Login</h1>
          <input type="text" id="email" {...register("email")} />
          <input type="password" id="password" {...register("password")} />
          <button type="submit">Enviar</button>
        </form>
      </DivMain>
    </Container>
  );
}

export default Login;
