import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [openProductDetailModel, setOpenProductDetailModel] = useState(false);
  const [selectedProductCard, setSelectedProductCard] = useState(null);

  // Fixed function names (removed typos)
  const handleClickOpenProductDetailModel = (card) => {
    setSelectedProductCard(card);
    setOpenProductDetailModel(true);
  }

  const handleCloseOpenProductDetailModel = () => {
    setOpenProductDetailModel(false);
    setSelectedProductCard(null);
  }

  const value = {
    openProductDetailModel,
    setOpenProductDetailModel,
    selectedProductCard,
    setSelectedProductCard,
    handleClickOpenProductDetailModel,  // Corrected name
    handleCloseOpenProductDetailModel   // Corrected name
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;