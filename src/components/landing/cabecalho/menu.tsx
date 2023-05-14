import { IconBrandGoogle } from "@tabler/icons-react";
import MenuItem from "./menuItem";

function loginGoogle(){
    console.log('login')
}

export default function Menu(){
    return(
        <div className="flex gap-10">
            <MenuItem url="#inicio" className="hidder sm:flex">
                Inicio
            </MenuItem>

            <MenuItem url="#vantagens" className="hidder sm:flex">
                Vantagens
            </MenuItem>

            <MenuItem url="#depoimentos" className="hidder sm:flex">
                Depoimentso
            </MenuItem>

            <MenuItem onClick={loginGoogle} className="bg-gradient-to-r from-indigo-600 to-cyan-600">
                <div className="flex items-center gap-2">
                <IconBrandGoogle size={15}/>
                <span>Login</span>
                </div>
            </MenuItem>
        </div> 
    )
 }