import { auth } from "@/auth";
import LoginPage from "./RegisterComponents/Login";
import RegisterPage from "./RegisterComponents/Register";
import SignPage from "./RegisterComponents/SignInPage";
import { redirect } from "next/navigation";


export default async function MainPage({ form }: { form: React.ReactNode }) {
  const sessao = await auth()
  console.log(sessao)
  if (sessao) {
    redirect("/")
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center ">
        <SignPage>
          <LoginPage tipo={"login"} />
          <RegisterPage tipo={"register"} />
        </SignPage>
      </main>
    );  
  }
}

