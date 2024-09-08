import React from "react";

export default function AcessLayout({ children, paral }: { children: React.ReactNode, paral: React.ReactNode }) {
    return (
        <>
            <div className="Header">
                <h1>Acesse dsa rede Artiszt de portifólios e entreterimento</h1>
            </div>
            {paral}
            {children}
            

        </>
    )
}