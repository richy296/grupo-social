import Image from "next/image"
import { IoBrowsersOutline, IoList, IoLogoReact } from "react-icons/io5"
import { SidebarMenuItem } from "./SidebarMenuItem"

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/listado',
        icon: <IoList size={40} />,
        title: 'Posts',
        subTitle: 'Listado de posts'
    }
]

export const Sidebar = () => {
  return (
    <div id="menu" 
        style={{width: '400px'}}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">

        <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white flex item-center">
                <IoLogoReact className="mr-2"/>
                <span>Colmena Seguros</span>
            </h1>
            <p className="text-slate-500 text-sm">Fundación Grupo Social</p>
        </div>
        <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Bienvenido de nuevo,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image 
                        width={50}
                        height={50}
                        className="rounded-full w-8 h-8" 
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
                        alt="User avatar"
                    />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Richard Rojas
                </span>
                </a>
        </div>

        <div id="nav" className="w-full px-6">
            {
                menuItems.map(item => (
                    <SidebarMenuItem key={item.path} {...item} />
                ))
            }
        </div>
    </div>
  )
}
