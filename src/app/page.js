"use client";
import { Auth0Provider } from "@auth0/auth0-react";
import Page from "./pages/Page";
import LoginPage from "./pages/LoginPage";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-[#F9F9F9]">
      <Auth0Provider
        domain="dev-dtfvvz54odjlgruy.us.auth0.com"
        clientId="XwQ3KnLulnmepgLghWSebKty5Y0CnSFq"
        authorizationParams={{ redirect_uri: "https://worksheet-alpha.vercel.app" }}>
        <LoginPage />
        <Page />
      </Auth0Provider>
    </main>
  );
}
