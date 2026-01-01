import { createContext, useContext, useState, useEffect } from "react";

const UserDeatilContext = createContext(null);


export function UserContext({ children }) {
    const [UserDetail, setUserDetail] = useState(() => {
        const storedTea = localStorage.getItem("UserDetail");
        return storedTea ? JSON.parse(storedTea) : null;
    });
    const [OrderID, setOrderID] = useState(() => {
        const storedTea = localStorage.getItem("OrderID");
        return storedTea ? JSON.parse(storedTea) : null;
    });
    useEffect(() => {
        if (UserDetail) {
            localStorage.setItem("UserDetail", JSON.stringify(UserDetail));
        }
        if (OrderID) {
            localStorage.setItem("OrderID", JSON.stringify(OrderID));
        }
    }, [UserDetail, OrderID]);
    return (
        <UserDeatilContext.Provider value={{ setUserDetail, UserDetail, OrderID, setOrderID }}>
            {children}
        </UserDeatilContext.Provider>
    )
}

// custom hook
export const useUserDetail = () => {
    const context = useContext(UserDeatilContext);
    if (!context) {
        throw new Error("useUserDetail must be used inside SelectedTeaProvider");
    }
    return context;
};