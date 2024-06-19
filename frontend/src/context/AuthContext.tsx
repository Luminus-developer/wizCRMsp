import { createContext, useState, useContext, ReactNode } from 'react';
import {User} from '../dto/user.tsx';

// Questa struttura contiene tutti gli attributi e metodi utilizzabili nel Provider del Context
type AuthContextType = {
    user: User | null;
    assignDataForAuthentication (user: User):void;
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
      // salva l'oggetto user nel local storage del browser
      localStorage.setItem("user",JSON.stringify(user));

      console.log (JSON.stringify(user));

    }

    
    const isUserAutheticated = () => {
      if (user == null) {
        let userString: String | null =localStorage.getItem("user");

        console.log("userString : "+userString);

        if (userString != null) {
          return true;
        } else {
          return false;
        }
      }

      return true;
    }

    return (
      <AuthContext.Provider value={{ user,assignDataForAuthentication,isUserAutheticated}}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    return useContext(AuthContext) as AuthContextType;
};
