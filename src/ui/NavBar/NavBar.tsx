"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { NavItem } from "./components/NavItem";
import Link from "next/link";
import { menuList } from "./constants/menuList";
import "./NavBar.css";

export const Navbar = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(-1);
  const toggleSelected = (index: number) => {
    setActiveIndex(index === activeIndex ? activeIndex : index);
  };

  useEffect(() => {
    const newIndex = menuList.findIndex((item) => item.link === pathname);
    setActiveIndex(newIndex);
  }, [pathname]);

  return (
    <nav className="navBar">
      <div className="contentNav">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" className="imgLogo" />
        </Link>
        {menuList.map((menu, index) => (
          <div className="items" key={index}>
            <div className="item">
              <NavItem
                label={menu.label}
                link={menu.link}
                toggleSelected={() => toggleSelected(index)}
                activeIndex={activeIndex}
                isActive={index === activeIndex}
              />
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};
