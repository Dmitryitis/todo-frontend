import { FC } from "react"
import { Outlet } from "react-router"
import { Container } from "@mui/material"
import Header from "../components/header/Header"

const MainLayout: FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}

export default MainLayout
