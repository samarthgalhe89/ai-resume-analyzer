import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"

export const meta = () => [
    { title: 'ResumX | Auth' },
    { name: 'description', content: 'Log into your account' }
];

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => { //if user tries accessing protected routed without logging in then he is redirected to the auth page!
        if (auth.isAuthenticated) {
            navigate(next); //when logs in then redirected to the pagae they wanna go!
        }
    }, [auth.isAuthenticated, next])

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-3xl font-bold">Welcome</h1>
                        <h2 className="text-gray-600">Log In to Continue Your Job Journey</h2>
                    </div>

                    <div className="flex justify-center w-full">
                        {isLoading ? (
                            <button className="auth-button animate-pulse px-6 py-3 bg-gray-200 rounded-lg">
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth