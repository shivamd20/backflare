// components/AuthProvider.tsx
"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

export function AuthProvider({ children }: { children: ReactNode }) {
    return <SessionProvider basePath="/backflare/api/auth">{children}</SessionProvider>
}
