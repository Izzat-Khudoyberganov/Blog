import React, { useEffect, useState } from "react"

import { Link, Routes, Route, useLocation } from "react-router-dom"
import { Layout, Menu } from "antd"
import { sidebarData } from "../../utils/data"
import { routes } from "../../utils/routes"
const { Header, Content, Footer, Sider } = Layout

function Root() {
  const [activeMenu, setActiveMenu] = useState(["1"])
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  useEffect(() => {
    for (let item of sidebarData) {
      if (item.path === location.pathname) {
        setActiveMenu([`${item.id}`])
      }
    }
  }, [location])
  return (
    <Layout>
      <Header className='header'>
        <h3 style={{ color: "#fff" }}>Blog</h3>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          className='site-layout-background'
          style={{
            padding: "24px 0",
          }}
        >
          <Sider
            className='site-layout-background'
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={200}
          >
            <Menu
              mode='inline'
              selectedKeys={activeMenu}
              style={{
                height: "100%",
              }}
              items={sidebarData.map((sidebarItem) => ({
                key: sidebarItem.id,
                icon: React.createElement(sidebarItem.icon),
                label: <Link to={sidebarItem.path}>{sidebarItem.title}</Link>,
                children:
                  sidebarItem.link.length === 0
                    ? null
                    : sidebarItem.link.map((item) => ({
                        key: item.id,
                        icon: "",
                        label: <Link to={item.path}>{item.title}</Link>,
                      })),
              }))}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={React.createElement(route.component)}
                />
              ))}
            </Routes>
          </Content>
          <Sider className='site-layout-background' width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={sidebarData.map((sidebarItem) => ({
                key: sidebarItem.id,
                icon: React.createElement(sidebarItem.icon),
                label: <Link to={sidebarItem.path}>{sidebarItem.title}</Link>,
                children:
                  sidebarItem.link.length === 0
                    ? null
                    : sidebarItem.link.map((item) => ({
                        key: item.id,
                        icon: "",
                        label: <Link to={item.path}>{item.title}</Link>,
                      })),
              }))}
            />
          </Sider>
        </Layout>
      </Content>
    </Layout>
  )
}
export default Root
