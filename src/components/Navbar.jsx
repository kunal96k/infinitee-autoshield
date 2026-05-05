import React, { useEffect, useState, useCallback, useRef } from "react";
import "./Home.css";
import logo from "../assets/logo.jpeg";
import { Link, useLocation } from "react-router-dom";
import BookService from "./BookService";
import {
  Wrench, Settings, Sparkles, Package,
  Search, LifeBuoy, ChevronDown, ArrowUp,
} from "lucide-react";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = React.useRef(0);
  const dropdownRef = useRef(null);

  const location = useLocation();

  // Close menu/dropdown on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdown(false);
  }, [location.pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setDropdown(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpenModal(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Scroll: shadow + hide-on-scroll-down + scroll-to-top button
  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 20);
    setShowScrollTop(y > 400);

    // Hide navbar on scroll down, show on scroll up (desktop only)
    if (window.innerWidth > 768) {
      if (y > lastScrollY.current + 8 && y > 120) {
        setNavHidden(true);
      } else if (y < lastScrollY.current - 4) {
        setNavHidden(false);
      }
    }
    lastScrollY.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isActive = (path) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  const handleServicesToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={[
          "navbar",
          scrolled ? "scrolled" : "",
          navHidden ? "nav-hidden" : "",
        ].filter(Boolean).join(" ")}
        role="banner"
      >
        <Link to="/" className="nav-logo" aria-label="Infinitee Services — Home">
          <img src={logo} alt="Infinitee Services Logo" width="52" height="52" />
        </Link>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((p) => !p)}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <nav className="nav-menu" role="navigation" aria-label="Main navigation">
            <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
            <Link to="/contacts" className={isActive("/contacts") ? "active" : ""}>Contacts</Link>

            <div
              className="dropdown"
              ref={dropdownRef}
            >
               <button
                className={`drop-btn ${isServicesActive || dropdown ? "active" : ""}`}
                onClick={handleServicesToggle}
                aria-haspopup="true"
                aria-expanded={dropdown}
                type="button"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`chevron ${dropdown ? "rotate" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`dropdown-menu ${dropdown ? "show" : ""}`}
                role="menu"
              >
                <Link to="/services" role="menuitem"><Wrench size={15} />Car Service</Link>
                <Link to="/services/car-repair" role="menuitem"><Settings size={15} />Car Repair</Link>
                <Link to="/services/car-detailing" role="menuitem"><Sparkles size={15} />Car Detailing</Link>
                <Link to="/services/spare-parts" role="menuitem"><Package size={15} />Spare Parts</Link>
                <Link to="/services/inspection" role="menuitem"><Search size={15} />Inspection</Link>
                <Link to="/services/roadside-help" role="menuitem"><LifeBuoy size={15} />Roadside Help</Link>
              </div>
            </div>
          </nav>

          <button
            className="book-btn"
            type="button"
            onClick={() => { setOpenModal(true); setMenuOpen(false); }}
            aria-label="Book a car service"
          >
            Book Service
          </button>
        </div>
      </header>

      {/* Scroll to top */}
      <button
        className={`scroll-top ${showScrollTop ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        type="button"
      >
        <ArrowUp size={18} />
      </button>

      {openModal && <BookService close={() => setOpenModal(false)} />}
    </>
  );
}

export default Navbar;