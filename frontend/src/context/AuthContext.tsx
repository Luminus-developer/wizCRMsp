import { createContext, useState, useContext, ReactNode } from 'react';
import {User} from '../dto/user.tsx';

// Questa struttura contiene tutti gli attributi e metodi utilizzabili nel Provider del Context
type AuthContextType = {
    user: User | null;
    assignDataForAuthentication(user: User):void;
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
      setUser(user);
    }

    return (
      <AuthContext.Provider value={{ user,assignDataForAuthentication }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    return useContext(AuthContext) as AuthContextType;
};
