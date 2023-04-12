import { createContext, useState } from "react";
  
export const UsuarioContext = createContext({
    getUsuario: "",
    setUsuario: (value: string) => {},
    getToken: "",
    setToken: (value: string) => {}
});

export const UsuarioProvider = ({ children } : { children: React.ReactNode }) => {
    const [getUsuario, setUsuario] = useState<string>("");
    const [getToken, setToken] = useState<string>("");

    return (
        <UsuarioContext.Provider value = {{ getUsuario, setUsuario, getToken, setToken }}>
            { children }
        </UsuarioContext.Provider>
    );
};