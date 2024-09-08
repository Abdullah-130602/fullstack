import { createContext, useContext } from "react";

const OverlayLoaderContext = createContext();

export const overlayLoaderProvider = ([children]) => {
  return (
    <OverlayLoaderContext.Provider>
      <div></div>
      {children}
    </OverlayLoaderContext.Provider>
  );
};

export const useOverlayLoader = () => useContext(OverlayLoaderContext);
