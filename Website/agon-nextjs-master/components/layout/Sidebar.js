/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Sidebar = ({ openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner mt-70">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li className={isActive.key == 1 ? "active" : ""}>
                      <span onClick={() => handleToggle(1)} className=""></span>
                      <Link href="/">
                        <a className="active">Начало</a>
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 2
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(2)}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      <Link href="/how-it-works">
                        <a>Как работи</a>
                      </Link>
                      <ul
                        className={
                          isActive.key == 2
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="https://paybyface.io/locations/">
                            <a>Локации</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key == 3
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(3)}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      <Link href="/merchants">
                        <a>Терминали</a>
                      </Link>
                      <ul
                        className={
                          isActive.key == 3
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
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
                    <li
                      className={
                        isActive.key == 4
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(4)}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      <Link href="/services">
                        <a>Услуги</a>
                      </Link>
                      <ul
                        className={
                          isActive.key == 4
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="https://paybyface.azurewebsites.net/dooh-portal/">
                            <a>Рекламодателски портал</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={isActive.key == 5 ? "active" : ""}>
                      <span onClick={() => handleToggle(5)} className=""></span>

                      <Link href="/blog-1">
                        <a>Рекламодатели</a>
                      </Link>
                    </li>
                    <li className={isActive.key == 5 ? "active" : ""}>
                      <span onClick={() => handleToggle(5)} className=""></span>

                      <Link href="https://paybyface.myshopify.com/">
                        <a>VIP Store</a>
                      </Link>
                    </li>
                    <li className={isActive.key == 5 ? "active" : ""}>
                      <span onClick={() => handleToggle(5)} className=""></span>

                      <Link href="/page-contact">
                        <a>Контакт</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="site-copyright color-gray-400">
                Copyright 2022 © PayByFace.
                <br />
                Created by
                <Link href="https://javery.bg">
                  <a>&nbsp; Javery</a>
                </Link>
                .
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Sidebar;
