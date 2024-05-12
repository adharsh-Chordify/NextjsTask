"use client"
import React, { createContext, useContext, useState } from 'react';

type SearchDataType = any; // Define the type for searchData, you can replace 'any' with the appropriate type

interface ContextValueType {
    searchData: SearchDataType | undefined;
    setSearchData: React.Dispatch<React.SetStateAction<SearchDataType | undefined>>;
}

export const searchContext = createContext<ContextValueType | undefined>(undefined); // Specify the type for the createContext

export function Appwrapper({ children }: { children: React.ReactNode }) {
    const [searchData, setSearchData] = useState(''); // Specify the type for the state

  
    return (
        <searchContext.Provider value={{searchData,setSearchData}}>
            {children}
        </searchContext.Provider>
    );
}

export function useAppContext(){
    return useContext(searchContext)
}
