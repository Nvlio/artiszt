import LoginPage from "./RegisterComponents/Login";
import RegisterPage from "./RegisterComponents/Register";
import SignPage from "./RegisterComponents/SignInPage";


export default function MainPage({form}:{form: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <SignPage>
        <LoginPage tipo={"login"}/>
        <RegisterPage tipo={"register"}/>
      </SignPage>
    </main>
  );
}

