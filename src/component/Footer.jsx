import logo from "../logo-veliki.png";
import facebook from '../icons/facebook.png'
import twitter from '../icons/twitter.png'
import instagram from '../icons/instagram.png'
import youtube from '../icons/youtube.png'

function Footer() {
  return (
    <div >
      <footer className="text-center text-lg-start " style={{ backgroundColor: "lightgrey" }}>
        <div className="container d-flex justify-content-center py-5">
          <button type="button" className="btn btn-primary btn-lg rounded-circle mx-2" style={{ backgroundColor: "#54456b" }} >
            <img src={facebook} alt="ikcon facebook" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg rounded-circle mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <img src={youtube} alt="icon youtube" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg rounded-circle mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <img src={instagram} alt="icon instagram" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg rounded-circle mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <img src={twitter} alt="icon twiter" />
          </button>
        </div>

        <div className="text-center text-white p-3" style={{ backgroundColor: "lrgba(0, 0, 0, 0.2" }}>
          © 2023 Copyright: <img src={logo} alt="logo" style={{height:'40px'}} />
      
        </div>
      </footer>
    </div>
  );
}

export default Footer;
