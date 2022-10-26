import Link from "next/link";
import {useRouter} from "next/router";
import {CSSProperties, PropsWithChildren} from "react";

const style: CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
}

type ActiveLinkProps = {
    href: string
}
// Crear componente activo de la ruta
export const ActiveLink = ({children, href}: PropsWithChildren<ActiveLinkProps>) => {

    const {asPath} = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>
                {children}
            </a>
        </Link>
    )
}
