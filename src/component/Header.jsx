import "./Header.css";
import miniLogo from "../mini-logo.png";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={miniLogo} alt="img logo" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/edit">
                Edit/Del
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Add todo"
              aria-label="Add"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
