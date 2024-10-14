import React from "react";

export default function AcessLayout({ children }: { children: React.ReactNode}) {
    return (
        <main className="flex min-h-screen flex-col items-center ">
            <div className="Header">
                <h1>Acesse a rede Artiszt de portifólios e entreterimento</h1>
            </div>
            {children}

        </main>
    )
}