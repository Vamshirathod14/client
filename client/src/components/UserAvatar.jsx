import {Menu, Transition} from "@headlessui/react";
import { Fragment, useState } from "react";
import {FaUser, FaUserLock} from "react-icons/fa";
import {IoLogOutOutline} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { getInitials } from "../utils";

const UserAvatar = () => {
    const [open, setOpen] = useState(false);
    const [openPassword, setOpenPassword] = useState(false);
    const {user} = useSelector((state)=> state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        console.log("logout");
        
    };
  return (
    <div >
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="w-10 h-10 2x1:w-12 2x1:h-12 items-center justify-center rounded-full
                bg-red-600" >
                    <span className="text-white font-semibold">
                        {getInitials(user?.name)}

                    </span>
                </Menu.Button>


                <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="trasnition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transorm opacity-0 scale-95"
                
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-gray-100 rounded-md
                    bg-white shadow-2x1 ring-1 ring-black/5 focus:outline">
                        <div className="p-4 ">
                <Menu.Item>
                    {({active}) => (
                        <button 
                        onClick={()=> setOpen(true)}
                        className="text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base">
                            <FaUser className="mr-2" aria-hidden="true" />
                            Profile

                        </button>
                    )}
                    
                </Menu.Item>
                <Menu.Item>
                    {({active}) => (
                        <button 
                        onClick={()=> setOpenPassword(true)}
                        className="text-gray-700  group flex w-full items-center rounded-md px-2 py-2 text-base">
                            <FaUserLock className="mr-2" aria-hidden="true" />
                            Change Password

                        </button>
                    )}
                    
                </Menu.Item>
                <Menu.Item> 
                {({active}) => (
                        <button 
                        onClick={logoutHandler}
                        className="text-red-700 group flex w-full items-center rounded-md px-2 py-2 text-base">
                            <IoLogOutOutline className="mr-2" aria-hidden="true" />
                            Logout

                        </button>
                    )}
                    </Menu.Item>
                        </div>

                    </Menu.Items>
                </Transition>
                </div> 
                </Menu>
    </div>
  )
}

export default UserAvatar
