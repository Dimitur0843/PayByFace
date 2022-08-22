/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/">
                  <a className="d-flex">
                    {headerStyle ? (
                      <img
                        alt="Agon"
                        src="/assets/imgs/template/logo-white.svg"
                      />
                    ) : (
                      <img alt="Agon" src="/assets/imgs/logo.png" />
                    )}
                  </a>
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li className="">
                      <Link href="/">
                        <a className="active">Начало</a>
                      </Link>
                    </li>
                    <li className="has-children">
                      <Link href="/how-it-works">
                        <a>Как работи</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="https://paybyface.io/locations/">
                            <a>Локации</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="/merchants">
                        <a>Терминали</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/tableside">
                            <a>Поръчване в заведение</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/smart-pos">
                            <a>Smart POS</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/signage">
                            <a>Указателен POS</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/mobile">
                            <a>Мобилен POS</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/web">
                            <a>Уеб POS</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/loyalty">
                            <a>Loyalty POS</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="/services">
                        <a>Услуги</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="https://paybyface.azurewebsites.net/dooh-portal/">
                            <a>Рекламодателски портал</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <Link href="/advertisers">
                        <a className="active">Рекламодатели</a>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="https://paybyface.myshopify.com/">
                        <a className="active">VIP Shop</a>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/page-contact">
                        <a className="active">Контакт</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className="burger-icon burger-icon-white"
                  onClick={handleOpen}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
