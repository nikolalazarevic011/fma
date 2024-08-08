import React from "react";
import { MainMenu } from "components/MainMenu";
import FooterMenu from "components/FooterMenu/FooterMenu";

export const Layout = ({ children, mainMenuItems, footerMenuItems }) => {
  return (
    <div>
      <MainMenu items={mainMenuItems} /> {/* Main menu at the top */}
      <main>{children}</main> {/* Page content */}
      <FooterMenu socialLinks={footerMenuItems} /> {/* Footer at the bottom */}
    </div>
  );
};

export default Layout;
