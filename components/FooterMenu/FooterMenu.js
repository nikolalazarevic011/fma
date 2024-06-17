import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function FooterMenu({ socialLinks }) {
  const { url1, url2, url3, url4 } = socialLinks;

  return (
    <footer
      className="px-4 py-3 text-white"
      style={{
        backgroundImage: "url('/images/asset-3.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between py-3">
        <div className="mb-2 flex space-x-4">
          <a href={url1} className="hover:text-secondary" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href={url2} className="hover:text-secondary" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href={url3} className="hover:text-secondary" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a
            href={url4}
            className="hover:text-secondary"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-center">
          © 2024 Faith Alliance Ministries. All rights reserved. Design by{" "}
          <a href="https://www.livingwd.org/" className="hover:text-secondary">
            livingwd.org
          </a>
        </p>
      </div>
    </footer>
  );
}
