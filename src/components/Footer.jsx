import { BsFacebook } from "react-icons/bs";
import logo from "../assets/logo light.png"
import { FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-[#020043] text-gray-200 text-xl p-16">
      <aside>
        <img src={logo} alt="logo pic" />
        <p>
        123 Main Street Anytown, 
          <br />
          USAPostal Code: 12345
        </p>
        <p>
        Support: support@oyolloo.com <br />
        (Available : 10:00am to 07:00pm)
        </p>
      </aside>
      <nav>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Success Page</a>
        <a className="link link-hover">Terms and Conditions</a>
      </nav>
      <nav>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Scheduling</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Patient Portal</a>
      </nav>
      <nav>
        <p>Follow Us</p>
        <div className="flex gap-3">
        <BsFacebook /> <FaInstagramSquare /> <FaLinkedin /> <FaYoutube />
        </div>
        <p>@Docplus 2024</p>
      </nav>
    </footer>
  );
}
