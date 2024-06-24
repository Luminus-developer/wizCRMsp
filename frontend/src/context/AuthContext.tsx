import { createContext, useState, useContext, ReactNode } from 'react';
import {User} from '../dto/user.tsx';

// Questa struttura contiene tutti gli attributi e metodi utilizzabili nel Provider del Context
type AuthContextType = {
    user: User | null;
    assignDataForAuthentication (user: User):void;
    assignDataForLogout():void;
    isUserAutheticated (): boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode;
}

/**
 * Il componente AuthProvider contiene i metodi che possono essere utilizzati per
 * agire sugli attributi o metodi definiti nel Context 
 * 
 * @returns 
 */

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const assignDataForAuthentication = (user: User) => {
      // Aggiorna lo stato e genera un render
      setUser(user);

      // salva l'oggetto user nel session storage e quindi quando l'utente chiude il browser il valore salvato è eliminato
      sessionStorage.setItem("user",JSON.stringify(user));
    }

    /**
     * Pone a NULL la variabile di stato User per forzare il Rendering
     * Rimuove dal Session Storage l'oggetto "user"
     * 
     */
    const assignDataForLogout = () => {
      setUser(null);
      sessionStorage.removeItem("user");
    }

    const isUserAutheticated = () => {

      let result: boolean = true;

      // I dati dello User sono sempre salvati nel SessionStorage
      let userString: string | null =sessionStorage.getItem("user");

      if (userString == null || userString.trim() === "") {
        result = false;
      } 


      if (userString != null) {
        let user: User = JSON.parse(userString);

        let token: string = user.token;
        let tokenTimeoutInSeconds: number = user.tokenTimeout;

        let tokenDateInSeconds : number = Number(atob(token));

        let nowInSeconds =Math.round(Date.now() / 1000);

        if ((tokenDateInSeconds + tokenTimeoutInSeconds) > nowInSeconds )
          result = false;
      }

      return result;
    }

    return (
      <AuthContext.Provider value={{ user,assignDataForAuthentication,assignDataForLogout,isUserAutheticated}}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    return useContext(AuthContext) as AuthContextType;
};
