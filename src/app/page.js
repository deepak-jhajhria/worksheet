"use client";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Page from "./pages/Page";
import LoginButton from "./components/LoginButton";
export default function Home() {
  const { isAuthenticated } = useAuth0();
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-[#F9F9F9]">
      <Auth0Provider
        domain="dev-dtfvvz54odjlgruy.us.auth0.com"
        clientId="XwQ3KnLulnmepgLghWSebKty5Y0CnSFq"
        authorizationParams={{ redirect_uri: "https://worksheet-alpha.vercel.app" }}>
        {isAuthenticated || (<div className="flex items-center justify-center w-full min-h-screen">
          <div className="p-10 bg-white rounded-xl">
            <h1 className="font-sans text-2xl">To access this page, you must be logged in.</h1>
            <div className="flex flex-col items-center justify-center gap-6 pt-10">
              <LoginButton />
            </div>
          </div>
        </div>)}
        <Page />
      </Auth0Provider>
    </main>
  );
}
