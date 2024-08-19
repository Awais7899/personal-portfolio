import React from "react";
import { Layout, ConfigProvider } from "antd";
import {
  FooterComponent,
  HeaderComponent,
  Intro,
  About,
  TechStack,
  Services,
  Projects,
  Contact,
} from "../../components/ui";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <HeaderComponent />
      <Content>
        <Intro />
        <About />
        <TechStack />
        <Services />
        <Projects />
        <Contact />
      </Content>
      <FooterComponent />
    </Layout>
  );
}
