import { createContext, useContext, useState, useEffect } from "react";

const TeaContext = createContext(null);

export const TeaProvider = ({ children }) => {
  // 🔹 Load from localStorage first
  const [selectedTea, setSelectedTea] = useState(() => {
    const storedTea = localStorage.getItem("selectedTea");
    return storedTea ? JSON.parse(storedTea) : null;
  });
  const [addcard, setaddcard] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const HandleIncrementDecrement = (id, type) => {
    if (type == 'increment') {
      setaddcard(
        addcard.map(item =>
          item.id === id && item.quantity < 10
            ? {
              ...item,
              quantity: item.quantity + 1
            }
            : item
        )
      );
    } else {
      setaddcard(
        addcard.map(item =>
          item.id === id && item.quantity > 1
            ? {
              ...item,
              quantity: item.quantity - 1
            }
            : item
        )
      );
    }
  };



  // 🔹 Save to localStorage whenever it changes
  useEffect(() => {
    if (selectedTea) {
      localStorage.setItem("selectedTea", JSON.stringify(selectedTea));
    }
    if (addcard) {
      localStorage.setItem("cart", JSON.stringify(addcard));
    }
  }, [selectedTea, addcard]);


  return (
    <TeaContext.Provider value={{ selectedTea, setSelectedTea, addcard, setaddcard, HandleIncrementDecrement }}>
      {children}
    </TeaContext.Provider>
  );
};

// custom hook
export const useSelectedTea = () => {
  const context = useContext(TeaContext);
  if (!context) {
    throw new Error("useSelectedTea must be used inside SelectedTeaProvider");
  }
  return context;
};
