import React from "react";
import {Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bothrefm shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">Янгиликлар</h5>
        <div class="my-2 my-md-0 mr-md-3">
          <Link to="/" className="p-2 text-dark">
            Ўзбекистон
          </Link>
          <Link to="/jahon" className="p-2 text-dark">
            Жаҳон
          </Link>
          <Link to="/texnologiya" className="p-2 text-dark">
            Технология
          </Link>
          <Link to="/sport" className="p-2 text-dark">
            Спорт
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
