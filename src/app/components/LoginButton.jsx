import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className="text-[#1B59F8] bg-[#E9EFFF] text-base capitalize font-sans py-3 px-10 rounded-lg" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;