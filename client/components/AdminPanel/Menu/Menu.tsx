import React, { useState } from "react";
import { useRouter } from "next/router";
import { Menu, Button } from "antd";
const { SubMenu } = Menu;
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { WechatOutlined } from "@ant-design/icons/lib/icons";

import styles from "./Menu.module.scss"

const MenuAdmin = () => {
  const [state, setState] = useState(false);

  const toggleCollapsed = () => {
    setState(!state);
  };

  const router = useRouter();

  return (
    <div className={styles.menuContainer}>
      <div>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(state ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={[
            router.asPath === "/admin-panel/online-chat" ? "3" : "1",
          ]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={state}
        >
          <Menu.Item
            key="1"
            icon={<PieChartOutlined />}
            onClick={() => router.push("/admin-panel")}
          >
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={
              <WechatOutlined style={{ fontSize: "24px", color: "#08c" }} />
            }
            onClick={() => router.push("/admin-panel/online-chat")}
          >
            Online chat
          </Menu.Item>
          <SubMenu key="sub1" title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu
              key="sub3"
              title="Submenu"
              icon={
                <CarOutlined style={{ fontSize: "20px", color: "#a600c3" }} />
              }
            >
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
};

export default MenuAdmin;
