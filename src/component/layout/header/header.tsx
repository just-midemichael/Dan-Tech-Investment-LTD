"use client";
import {
  HeaderContainer,
  HeaderContentWrapper,
  HeaderHamburgerBox,
  HeaderLogo,
  HeaderLogoBox,
  HeaderNavBox,
  Link,
  MenuContainer,
  MenuContentWrapper,
} from "./style";
import mainLogo from "../../../../public/di-main-logo.png";
import { headerNavLinks } from "@/db/headerNavLink";
import { Sling as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { appStyle } from "@/db/appStyle";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Handle onScroll event
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setShowHeader(false); // Hide header at top 0px
      } else if (window.scrollY < lastScrollY) {
        setShowHeader(true); // Show when scrolling up
      } else {
        setShowHeader(false); // Hide when scrolling down
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle Hamburger Click
  const handleToggleClick = () => {
    setIsOpen(!isOpen);
    const appBody = document.getElementById("app-body");

    if (appBody) {
      appBody.style.overflow = !isOpen ? "hidden" : "auto";
    }
  };

  useEffect(() => {
    //Function that handle screen resize event
    const handleResize = () => {
      if (window.innerWidth > 800 && isOpen) {
        setIsOpen(!isOpen);
        const appBody = document.getElementById("app-body");
        if (appBody) {
          appBody.style.overflow = "auto";
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Get the current pathname
  // This will be used to highlight the active link
  const pathName = usePathname();

  // Userouter hook from next ; router.push(), router.back, router.forward, router.replace(), router.refresh()
  // This will be used to navigate pages in the app
  const router = useRouter();

  return (
    <header style={{ position: "relative" }}>
      <HeaderContainer
        style={{
          position: showHeader ? "fixed" : "absolute",
          backgroundColor: showHeader ? "#ffff" : "transparent",
          boxShadow: showHeader ? "1px 1px 6px 0px #2f2e2e17" : "none",
        }}
      >
        <HeaderContentWrapper
          style={{ maxWidth: `${appStyle.appContentmaxWidth}` }}
        >
          <HeaderLogoBox>
            <HeaderLogo
              src={mainLogo}
              alt="Dan-Tech Logo"
              onClick={() => router.push("/")}
            />
          </HeaderLogoBox>
          <HeaderNavBox>
            {/* Navigation items can be added here */}
            {headerNavLinks.map((link) => (
              <Link
                key={link.label}
                onClick={() => router.push(link.url)}
                style={{
                  color: pathName === link.url ? "#3E71B1" : "#182F58",
                }}
              >
                {link.label}
              </Link>
            ))}
          </HeaderNavBox>
          <HeaderHamburgerBox>
            {/* Hamburger menu can be added here */}
            <Hamburger
              color="#3E71B1"
              size={26}
              duration={0.5}
              easing="ease-in-out"
              rounded
              label="Menu Toggle"
              toggled={isOpen}
              toggle={setIsOpen}
              onToggle={handleToggleClick}
            />
          </HeaderHamburgerBox>
        </HeaderContentWrapper>
      </HeaderContainer>

      <MenuContainer
        sx={{
          transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
          transition: isOpen ? "0.2s ease-in-out" : "0.8s ease-in-out",
        }}
      >
        <MenuContentWrapper
          sx={{
            transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
            transition: isOpen ? "0.8s ease-in-out" : "0.2s ease-in-out",
          }}
        >
          {headerNavLinks.map((link) => (
            <Link
              key={link.label}
              onClick={() => {
                router.push(link.url);
                handleToggleClick();
              }}
              style={{
                fontSize: "1.25rem",
                margin: "10px 0",
                fontWeight: 500,
                color: pathName === link.url ? "#3E71B1" : "#182F58 ",
              }}
            >
              {link.label}
            </Link>
          ))}
        </MenuContentWrapper>
      </MenuContainer>
    </header>
  );
};
