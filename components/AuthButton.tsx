'use client'

import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react"

export default function AuthButton() {
    const { data: session, status } = useSession()

    if (status === "loading") return <p>Loading...</p>

    if (session) {
        return (
            <>
                <p>Signed in as {session.user?.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }

    return <button onClick={() => signIn("google")}>Sign in with Google</button>
}
