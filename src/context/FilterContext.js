import React, { useState, createContext } from "react"
export const FilterContext = createContext()

/* le component-provider qui embracera la partie de notre app où on utilise ce context */

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("all")
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider