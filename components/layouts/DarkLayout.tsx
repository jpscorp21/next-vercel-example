import {PropsWithChildren} from "react";

export const DarkLayout = ({children}: PropsWithChildren<any>) => {
    return (
        <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: '10px',
            borderRadius: "5px"
        }}>
            <h3>Dark-Layout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}
