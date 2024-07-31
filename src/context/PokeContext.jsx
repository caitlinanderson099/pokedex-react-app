// Import the CreateContext and UseState
import { Children, createContext, useState } from "react";

// Export the Context
export const PokeContext = createContext();

// Export the createContextProvider -- provides context for the 'children'
export const PokeContextProvider = ({children}) => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    return (
        <PokeContext.Provider value={{selectedPokemon, setSelectedPokemon}}>
            {children}
        </PokeContext.Provider>
    )
}