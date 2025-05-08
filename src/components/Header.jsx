import Menu from "./Menu"
import Logo from "./Logo"

function Header() {
  
    return (
        <div className="container">
            <div className="header">
             <Logo/>
             <Menu/> 
            </div>
           
        </div>
    );
  }
  
  export default Header;
  