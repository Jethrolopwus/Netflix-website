"use client";
import { Search } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@public/assets/logo.png";
import icon from "@public/assets/profile_icon.jpg";


const Navbar = () => {
  const [search, setSearch] = useState<string>("");

  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState <boolean>(false)
   
  const handleScroll = () =>{
    if(window.scrollY > 10){
      setIsScrolled(true);

    }else{
      setIsScrolled(false)
    }
  }

  useEffect(() => {
  window.addEventListener("scroll", handleScroll);


  // clean up the function to remove the eventListener when the component unmount
  return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <div className={`navbar ${isScrolled && "bg-black-1"}`}>
      <Link href="/">
        <Image src={logo} alt="logo" className="logo" />
      </Link>

      <div className="nav-links">
        <Link href="/" className="nav-link">
          {" "}
          Home
        </Link>
        <Link href="/my-list" className="nav-link">
          {" "}
          My List
        </Link>
      </div>

      <div className="nav-right">
        <div className="search">
          <input
            placeholder="Search Movies...."
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="icon" />
        </div>
        <Image
          src={icon}
          alt="profile"
          className="profile"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="dropdown-menu">
            <Link href="/">
              {" "}
              Home
            </Link>
            <Link href="/my-list">
              {" "}
              My List
            </Link>
            <a href="">Log Out</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
