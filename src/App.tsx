// import { ConfigProvider } from "antd";
import { ConfigProvider } from "antd";
import Layout from "./components/layout";
 import RouterBase from "./Router/RouterBase";
import RouterUser from "./Router/RouterUser";

function App() {


  return (
    // <ConfigProvider
    //   theme={{
    //     components: {
    //       Modal: {

    //         // contentBg: 'black'
    //       },
    //     },

    //     token: {
    //       // Seed Token
    //       colorPrimary: '#00b96b',
    //       borderRadius: 2,
    //       // borderRadiusLG: 100,
    //       borderRadiusOuter:15,
    //       borderRadiusXS:15,
    //       // Alias Token
    //       // colorBgContainer: 'black',
    //       // colorBgBase: 'black',
    //       // colorBorder: 'white',
    //       // colorBgTextActive: 'white',
    //       // colorText: 'white',
    //       // colorBorderBg: 'white',
    //       // colorPrimaryBorder: 'white',
    //       // colorInfoBorder: 'white',

    //     },
    //   }}
    // >
    <Layout >
      <RouterUser />
    </Layout>
    // </ConfigProvider>
  );
}

export default App;