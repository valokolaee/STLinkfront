// import { ConfigProvider } from "antd";
import { ConfigProvider } from "antd";
import Layout from "./components/layout/Layout";
import Router from "./Router/Router";

function App() {


  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {

            // contentBg: 'black'
          },
        },

        token: {
          // Seed Token
          colorPrimary: '#00b96b',
          borderRadius: 2,
borderRadiusLG:10
          // Alias Token
          // colorBgContainer: 'black',
          // colorBgBase: 'black',
          // colorBorder: 'white',
          // colorBgTextActive: 'white',
          // colorText: 'white',
          // colorBorderBg: 'white',
          // colorPrimaryBorder: 'white',
          // colorInfoBorder: 'white',

        },
      }}
    >
      <Layout >
        <Router />
      </Layout>
      </ConfigProvider>
  );
}

export default App;