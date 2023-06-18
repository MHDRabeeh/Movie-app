import Wrapper from "./Wrapper"
import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"

function Header() {
    return (
        <header>
            <Wrapper>
                <div className="appHeader">
                    <div className="headerleft">
                        <Link to="/">
                            <img src={Logo} width={96} alt="" />
                        </Link>
                       
                    </div>
                    <Link style={{}} to="/favourite" >Favourite</Link>
                    <div className="searchBox">

                        <input className="searchField" type="search" />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}
export default Header