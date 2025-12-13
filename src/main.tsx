// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from "./redux/store";
import Skeleton from "./pages/monitoring/components/Skeleton";
import { ConfigProvider } from "antd";

let persistor = persistStore(store);

AOS.init({ duration: 800, easing: 'ease-in-out', });


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode >
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <BrowserRouter >
          <ConfigProvider
          
            theme={{
              token: {
                // Seed Token
                colorPrimary: '#00b96b',
                colorBgBase	:'#000',
                
                // Alias Token
                colorBgContainer: '#f6ffed',
                colorText: '#ccc',
                colorBgLayout: 'black',
                colorSplit: 'red',
                
                colorBorder: '#ccc',
                // borderRadius: 2,

              },
            }}
          
          >

       
            <div className="  h-screen w-screen overflow-hidden">
          <App />
       </div>
          {/* <Skeleton/> */}
          </ConfigProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);