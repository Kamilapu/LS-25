import { Outlet } from "react-router-dom"
import { Header } from "./components/header/Header"
import { Sidebar } from "./components/sidebar/Sidebar"


export const Layout = () => {
     return (
          <>
               <div>
                    <Header />
                    <Outlet/>
                    <Sidebar />
               </div>
          </>
     )
}
