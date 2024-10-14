"use client"

import { useRouter } from "next/navigation";
import SignPage from "./RegisterComponents/SignInPage";
import { useSession } from "next-auth/react";


export default function MainPage() {
  const sessao = useSession()
  const url = useRouter()
  console.log(sessao)
  if (sessao.status == "authenticated") {
    return (
      url.push("/")
    )
  } else {
    return (
      <>
        <SignPage />
      </>
    );
  }
}

