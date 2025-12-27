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
import Skeleton from "./pagesUser/monitoring/components/Skeleton";
import { ConfigProvider } from "antd";
import { cardAndSelected, inputText } from "./css/classNames";
import RouterBase from "./Router/RouterBase";

let persistor = persistStore(store);

AOS.init({ duration: 800, easing: 'ease-in-out', });


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode >
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <BrowserRouter >
          <ConfigProvider
            form={{
              // colon:true,
              // variant:'underlined'
              scrollToFirstError: true,
              classNames: {
                // content:cardAndSelected(true)

              }
            }}
            input={{
              className: inputText,
              classNames: { input: inputText },

              // variant:'underlined'


            }}
            select={{
              classNames: {
                root: inputText,
                // prefix: cardAndSelected(true),
                //#endregion
              }
            }}

            theme={{
              // components: {
              //   Select: {

              //     colorIcon: '#ff4d4f', // Dropdown arrow icon
              //     colorIconHover: '#d9363e', // Hover state
              //     colorPrimary: '#1890ff', // Selected/hover items
              //     colorPrimaryHover: '#40a9ff',
              //     optionSelectedColor: '#1890ff', // Selected option text color
              //     optionSelectedBg: '#e6f7ff', // Selected option background
              //   },
              // },
              // components: {
              //   Input: {
              //     colorText: '#1890ff', // Text color
              //     colorTextPlaceholder: '#a0a0a0', // Placeholder color
              //     colorBgContainer: '#f0f0f0', // Background color
              //     colorBorder: '#d9d9d9', // Border color
              //     hoverBorderColor: '#40a9ff', // Hover border color
              //     activeBorderColor: '#1890ff', // Focus border color
              //   },
              // },
              token: {
                // Seed Token
                colorPrimary: '#00b96b',
                colorBgBase: '#000',

                // Alias Token
                // colorBgContainer: 'rgba(50, 50,50,0)',
                colorBgContainer: 'dark',
                // colorBgLayout: 'black',
                colorText: '#ccc',
                colorSplit: 'red',

                colorBorder: '#ccc',
                colorIcon: '#fff', // Eye icon color

                // borderRadius: 2,

              },
            }}

          >


            <div className="  h-screen w-screen overflow-hidden">
              <RouterBase />
              {/* <App /> */}
            </div>
            {/* <Skeleton/> */}
          </ConfigProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);