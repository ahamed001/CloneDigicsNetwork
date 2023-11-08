import { Outlet } from "react-router-dom"
import AboutFr from "../Contents French/AboutFr"
import FRCFr from "../Contents French/FRCFr"
import RingsFr from "../Contents French/RingsFr"
import ServicesFr from "../Contents French/ServicesFr"
import SucceedFr from "../Contents French/SucceedFr"
import WhyBitssFr from "../Contents French/WhyBitssFr"
import FooterFr from "../Footer/FooterFr"
import HomeFr from "../Home/HomeFr"
import NavbarFr from "../Navbar/NavbarFr"

const French = () => {
  return (
    <div>
      <div>
        <NavbarFr/>
        <HomeFr/>
        <RingsFr/>
        <FRCFr/>
        <SucceedFr/>
        <ServicesFr/>
        <AboutFr/>
        <WhyBitssFr/>
        <FooterFr/>
      </div>
      <Outlet/>
    </div>
  )
}

export default French