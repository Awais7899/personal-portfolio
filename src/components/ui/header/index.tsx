import React from "react";
import { Menu, Layout } from "antd";
const { Header } = Layout;
const items = [
  {
    key: 1,
    label: `Home`,
  },
  {
    key: 2,
    label: `About`,
  },
  {
    key: 3,
    label: `Tech Stack`,
  },
  {
    key: 4,
    label: `Projects`,
  },
  {
    key: 5,
    label: `Contact`,
  },
];

export const HeaderComponent = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px"
      }}
    >
      <div
        style={{
          color: "#fff",
        }}
      >
        Image
      </div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent: "flex-end",
          backgroundColor: "#191919",
          textTransform: "uppercase",
          fontWeight: "normal",
        }}
      />
    </Header>
  );
};
