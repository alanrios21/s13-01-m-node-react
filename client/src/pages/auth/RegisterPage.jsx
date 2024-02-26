import { RegisterForm } from "../../components/Auth//Register/RegisterForm";
import "./styles.css";

export const RegisterPage = () => {
  return (
    <main className="w-full min-h-screen bg-primary grid place-items-center">
      <section className="lg:h-[75vh]">
        <RegisterForm />
      </section>
    </main>
  );
};
