"use client"

import { useCallback, useState } from "react";
import Link from "next/link"; 

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isLogin, setIsLogin] = useState(false);
    const userName: String = "hello";
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);

    }, []);

    return (
        <div>
            <div onClick={toggleOpen}>
                {
                    isLogin ? (
                        <div>
                            <img src="./link/of/avatar" alt="avatar of user" />
                            <p>username</p>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <Link className="" href="./login" >Login</Link>

                                <Link className="" href="./register" >Register</Link>
                            </div>

                            <img src="./link/of/generate_avatar" alt="avatar generate" />
                        </div>
                    )
                }
            </div>
            {
                isOpen && (

                    <div>
                        <ul>
                            <li>
                                <Link className="" href="./" >Home</Link>
                            </li>
                            <li>
                                <Link className="" href="./login" >Login</Link>
                            </li>
                            <li>
                                <Link className="" href="./register" >Register</Link>
                            </li>
                        </ul>
                    </div>


                )
            }
        </div>
    );
}

export default UserMenu;