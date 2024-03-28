import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button className="text-[#1B59F8] bg-[#E9EFFF] text-base capitalize font-sans py-3 px-10 rounded-lg" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
    );
};

export default LogoutButton;