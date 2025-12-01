import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (prop)=>{
    const [openProductDetailModel, setOpenProductDetailModel] = useState(false);
     const [selectedProductCard, setSelectedProductCard] = useState(null);

    const hnadleClickOpenProductDeatailModel = (card)=>{
        setSelectedProductCard(card)
        setOpenProductDetailModel(true);
    }

    const handleCloseOpenProductDeatailModel = ()=>{
        setOpenProductDetailModel(false);
        setSelectedProductCard(null)
    }
    const value = {
        openProductDetailModel,setOpenProductDetailModel,
        selectedProductCard,setSelectedProductCard,
        hnadleClickOpenProductDeatailModel,handleCloseOpenProductDeatailModel
    }
    return (
        <AppContext.Provider value={value}>
            {prop.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;