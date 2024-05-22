import { createContext, useState, useContext, ReactNode } from 'react';

type User = {
    name: string;
    company: string;
}

type AuthContextType = {
    user: User | null;
    login: (userCredentials: User, callback: VoidFunction) => void;
    logout: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
  
    const login = (userCredentials: User, callback: VoidFunction) => {
      // Perform login logic, then:
      setUser(userCredentials);
      callback();
    };
  
    const logout = (callback: VoidFunction) => {
      setUser(null);
      callback();
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    return useContext(AuthContext) as AuthContextType;
};
