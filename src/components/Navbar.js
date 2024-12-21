import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <form className="d-flex ms-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search now"
            aria-label="Search"
          />
        </form>
        <div className="navbar-icons d-flex align-items-center">
          <i className="bi bi-bell-fill text-primary me-4"></i>
          <img style={{height:"50px",width:"50px"}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYOzPaEV4C7mtlWjivYt1wIQgF2JJ8fJJcA&s"
            alt="Profile"
            className="rounded-circle"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
