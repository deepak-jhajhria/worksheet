import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className="block font-sans text-sm font-semibold text-black opacity-90" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;