/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function About1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-2 bg-about-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <span className="tag-1 color-orange-900">Как работи</span>
                  <h1 className="text-display-3 mt-30">
                    Пазаруването става по-бързо и лесно с PayByFace.
                  </h1>
                  <div className="mt-40">
                    <Link href="https://www.youtube.com/watch?v=VUyMrTOTPs4">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Виж клипчето
                      </a>
                    </Link>

                    <Link href="/page-contact">
                      <a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">
                        Нашите локации
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-1">
                      <img
                        src="/assets/imgs/page/about/1/banner2.png"
                        alt="Agon"
                      />
                    </div>
                    <img
                      className="img-responsive shape-2"
                      alt="Agon"
                      src="assets/imgs/page/about/1/banner1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">Стъпки</h2>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img src="/assets/imgs/page/about/1/app.png" />
                    </span>
                    <h4 className="text-heading-4">1.</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Изтеглете приложението от App Store или от Google Play и
                      си създайте акаунт в него.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img src="/assets/imgs/page/about/1/Phone-ok-hand.png" />
                    </span>
                    <h4 className="text-heading-4">2.</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Добавете картата Ви и необходимите селфита. За
                      допълнителна сигурност, добавете и ПИН.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/about/1/Image-6-at-frame-1.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">3.</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Това е! Оставете портфела си във Вас и пазарувайте през
                      съществуващите терминали.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-70">
          <div className="container">
            <div className="box-green br-16">
              <h3 className="text-heading-1 color-white">
                Опростете процеса на поръчка за клиентите си и намалете
                разходите за управление на бизнеса си.
              </h3>
              <br />
              <br />
              <p className="text-desc-white">
                * eCommerce payment gateway is required for use.{" "}
              </p>
              <div className="mt-60">
                <Link href="#">
                  <a className="mr-20">
                    <img src="/assets/imgs/page/homepage5/apple-button.svg" />
                  </a>
                </Link>

                <Link href="#">
                  <a>
                    <img src="/assets/imgs/page/homepage5/google-play.svg" />
                  </a>
                </Link>
              </div>
              <div className="mt-30">
                <span className="cb-layout mr-30">Използвай приложението</span>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="VUyMrTOTPs4"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}

export default About1;
