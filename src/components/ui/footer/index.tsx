import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Footer } = Layout;

export const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};
