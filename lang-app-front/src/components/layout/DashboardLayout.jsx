// import { useState, useEffect, useRef } from "react";

// export default function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // mock auth
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [theme, setTheme] = useState("light");

//   const dropdownRef = useRef(null);

//   // close dropdown on outside click
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   // apply theme
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark");
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
    
//   );
// }