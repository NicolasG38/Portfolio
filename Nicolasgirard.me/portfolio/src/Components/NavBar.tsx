import './NavBar.css'

function NavBar() {
    return (
       <nav className="navbar">
           <ul className="navbar-ul">
               <li className={"navbar-li"}><p>&#10094;NicolasGIRARD &#8725;&#10095;</p></li>
               <li className={"navbar-li"}><img className={"navBarIcon"} src={"src/assets/images/nav/home.svg"} alt={""} /></li>
               <li className={"navbar-li"}><img className={"navBarIcon"} src={"src/assets/images/nav/code.svg"} alt={""} /></li>
               <li className={"navbar-li"}><img className={"navBarIcon"} src={"src/assets/images/nav/assignment.svg"} alt={""} /></li>
               <li className={"navbar-li"}><img className={"navBarIcon"} src={"src/assets/images/nav/mail.svg"} alt={""} /></li>
           </ul>
       </nav>
    )
}

export default NavBar;