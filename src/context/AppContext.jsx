import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [openProductDetailModel, setOpenProductDetailModel] = useState(false);
  const [selectedProductCard, setSelectedProductCard] = useState(null);
  const [openCartPanel, setOpenCartPanel] = useState(false)

  // Fixed function names (removed typos)
  const handleClickOpenProductDetailModel = (card) => {
    setSelectedProductCard(card);
    setOpenProductDetailModel(true);
  }


  const toggleDrawer = (newOpen)=>{
    setOpenCartPanel(newOpen)
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
    handleClickOpenProductDetailModel,  
    handleCloseOpenProductDetailModel,
    openCartPanel,setOpenCartPanel,toggleDrawer
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;