import { LoginForm } from "../../components/Auth/Login/LoginForm";
import "./styles.css";

export const LoginPage = () => {
  return (
    <>
      <main className="w-full h-screen bg-primary grid place-items-center">
        <section className="lg:h-[75vh]">
          <LoginForm />
        </section>
      </main>
    </>
  );
};
