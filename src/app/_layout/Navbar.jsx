"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav_icon } from "../_data/photos";
import Link from "next/link";
import Image from "next/image";

/* naming conventions to define responsive design*/
import pc from "../_styling/navbar.module.css";
import mobile from "../_styling/mobile_nav.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { href: "/listen", label: "Listen" },
    { href: "/discover", label: "Discover" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <nav>
        <div className={pc.link_container}>
          <Link
            href="/"
            className={`${pc.icon_container} ${isActive("/") ? pc.active_link : ""}`}
          >
            <Image
              src={nav_icon.src}
              alt={nav_icon.alt}
              height={nav_icon.height}
              width={nav_icon.width}
              className={pc.icon}
            />
          </Link>
          {links
            .filter((link) => link.href)
            .map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${pc.nav_link} ${
                  isActive(href) ? pc.active_link : ""
                }`}
              >
                {label}
              </Link>
            ))}
        </div>

        {/* mobile navigation menu below */}
        <div className={pc.mobile_nav}>
          <Link href="/">
            <Image
              src={nav_icon.src}
              alt={nav_icon.alt}
              height={nav_icon.height}
              width={nav_icon.width}
              className={mobile.icon}
            />
          </Link>
          {/*hamburger menu*/}
          <div id={mobile.hamMenuContainer} onClick={toggleMenu}>
            <div
              className={`${mobile.menuButtonBurger} ${
                menuOpen ? mobile.open : ""
              }`}
            ></div>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <menu
        className={`${pc.menu} ${menuOpen ? pc.active : ""}`}
        aria-label="Mobile Navigation"
      >
        {links
          .filter((link) => link.href !== "/")
          .map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              role="heading"
              className={mobile.nav_link}
            >
              {label}
            </Link>
          ))}
      </menu>
    </>
  );
}
