import React, { createContext, useState, ReactNode } from 'react';

interface LoadingContextType {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType>({ loading: true, setLoading: () => { } });

interface LoadingProviderProps {
    children: ReactNode;
    initialLoading?: boolean;
    delay?: number;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);




    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export { LoadingContext, LoadingProvider };
