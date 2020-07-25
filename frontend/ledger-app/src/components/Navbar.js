import React from "react";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <>
      <section>
        <div className="containe2">
          <div class="row">
            <div className="col-sm-6">
              <img id="CustLogo" src={logo} />
            </div>
            <div className="col-sm-6 logOutbtn">
              <button >Log Out</button>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Navbar;