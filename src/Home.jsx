import React from "react";

// Styles
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          title="Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls"
          price={39.35}
          rating={5}
          image="https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL320_.jpg"
        />
        <Product
          id="2"
          title={`Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)`}
          price={103.66}
          rating={5}
          image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="
          Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg"
        />
        <Product
          id="4"
          title="
          SAMSUNG 970 EVO Plus SSD 2TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology (MZ-V7S2T0B/AM)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41cUfgtV+HL._AC_.jpg"
        />
        <Product
          id="5"
          title="
          Original HP 63XL Black High-yield Ink Cartridge | Works with HP DeskJet 1112, 2130, 3630 Series; HP ENVY 4510, 4520 Series; HP OfficeJet 3830, 4650, 5200..."
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81oGX58ptcL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title={`HP E34m G4 34" WQHD Curved Screen LED LCD Monitor - 21:9-34" Class - Vertical Alignment (VA) - 3440 x 1440-16.7 Million Colors - 400 Nit - 5 ms - 75...`}
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/6143-RHE09L._AC_SL1200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
