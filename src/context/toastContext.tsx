import React, { createContext, useState, ReactNode, useContext } from "react";

interface Toast {
    mensaje: string;
    type : "success" | "error" | "info" | "warning";

}


interface ToastContextType {
    showToast: (mensaje: string, type: "success" | "error" | "info" | "warning") => void;
    toast : Toast | null;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({children} : {children: React.ReactNode}) => {
    const [toast, setToast] = useState<Toast | null>(null);

    const showToast = (mensaje: string, type: "success" | "error" | "info" | "warning") => {
        setToast({mensaje, type});
    };

    return (
        <ToastContext.Provider value={{showToast, toast}}>
            {children}
        </ToastContext.Provider>
    );
}

export const useToast = () : ToastContextType  => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast() must be used within a toastProvider');
    }
    return context;
}