import FooterLogo from "./FooterLogo"
import FooterMenu from "./FooterMenu"
import Copy from "./Copy";


function Footer() {
  
    return (
        <div className="container">
          <div className="foot">
             <FooterLogo/>
           <FooterMenu/>  
           <Copy/>
          </div>
          
         </div> 
    );
  }
  
  export default Footer;
  