import Container from "@/app/components/Container";
import Link from "next/link";
import UserMenu from "./UserMenu";

const NavBar = () => {
    return (<div>
       <Container>
           <div>
               <Link href="#" style={{"display" : "inline"}}>Hello app</Link>
                <div  style={{"display" : "inline"}}>
                    search
                </div>
                <div  style={{"display" : "inline"}}>
                   infor
               </div>
               <div  style={{"display" : "inline"}}>
                   profile
               </div>
               <UserMenu/>
           </div>
       </Container>
    </div>)
}
export default NavBar;