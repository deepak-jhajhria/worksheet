import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton';

const LoginPage = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            {isAuthenticated || (<div className="flex items-center justify-center w-full min-h-screen">
                <div className="p-10 bg-white rounded-xl">
                    <h1 className="font-sans text-2xl">To access this page, you must be logged in.</h1>
                    <div className="flex flex-col items-center justify-center gap-6 pt-10">
                        <LoginButton />
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default LoginPage
