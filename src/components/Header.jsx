import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="top-header">
        <img
          src="/images/idsg-logo-cropped.png"
          width="150px"
          height="150px"
          alt="IDSG Logo"
        />
        <div className="title-text">
          <h1 className="header-title">Intelligence Data Solutions Group</h1>
          <h3>Weaponizing Data for the Modern Battlefield</h3>
        </div>
        <img
          src="/images/innovation-logo2.png"
          width="160px"
          height="160px"
          alt="Innovation Logo"
        />
      </div>

      <div className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "nonActive")}>
          Home
        </NavLink>
        <NavLink
          to="/mission"
          className={({ isActive }) => (isActive ? "active" : "nonActive")}>
          Mission
        </NavLink>
        <NavLink
          to="/vision"
          className={({ isActive }) => (isActive ? "active" : "nonActive")}>
          Vision
        </NavLink>
        <NavLink
          to="/capabilities"
          className={({ isActive }) => (isActive ? "active" : "nonActive")}>
          Capabilities
        </NavLink>
        <NavLink
          to="/tools"
          className={({ isActive }) => (isActive ? "active" : "nonActive")}>
          Tools
        </NavLink>
      </div>
    </>
  );
}
