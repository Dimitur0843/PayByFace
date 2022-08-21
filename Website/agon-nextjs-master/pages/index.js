/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Index4() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h1 className="text-display-2 color-white">PayByFace</h1>
                  <p className="text-body-lead-large color-white mt-30 pr-40">
                    Актуализирайте магазина си с биометрични данни!
                  </p>
                  <div className="mt-40">
                    <Link href="/page-about-1">
                      <a className="btn btn-pink icon-arrow-right-white text-heading-6">
                        Как работи
                      </a>
                    </Link>
                    <Link href="/page-contact">
                      <a className="btn btn-link color-white text-heading-6 btn-link-inter">
                        Свържете се с нас
                      </a>
                    </Link>
                  </div>

                  <div className="mt-60">
                    <div className="row">
                      <div className="col-lg-3 col-sm-4 col-4">
                        <h3 className="text-heading-2 color-white mb-15">
                          5000+
                        </h3>
                        <p className="text-body-normal color-gray-300">
                          Happy Clients
                        </p>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-4">
                        <h3 className="text-heading-2 color-white mb-15">
                          756+
                        </h3>
                        <p className="text-body-normal color-gray-300">
                          Project Done
                        </p>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-4">
                        <h3 className="text-heading-2 color-white mb-15">
                          100%
                        </h3>
                        <p className="text-body-normal color-gray-300">
                          Client Satisfaction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <a
                      className="popup-youtube btn-play-video-2"
                      onClick={() => setOpen(true)}
                    ></a>

                    <img
                      className="img-responsive shape-2"
                      height={700}
                      alt="Agon"
                      src="assets/imgs/page/homepage4/banner3.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 mt-50">
                <h2 className="text-heading-1 color-gray-900 mb-30">
                  Добре дошли в PayByFace®
                </h2>
                <p className="text-heading-6 color-gray-600">
                  Ориентирана към клиента, безпроблемна и сигурна екосистема за
                  цифрови плащания за по-безопасно, по-бързо и по-удобно
                  пазаруване.
                </p>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                <div className="list-icons">
                  <div className="item-icon pl-0">
                    <div className="mb-15">
                      <img
                        src="/assets/imgs/page/homepage2/shopping.png"
                        alt="Agon"
                      />
                    </div>
                    <h4 className="text-heading-4">1. Kлиент</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Извършвайте сигурни покупки със селфи, без да се нуждаете
                      от пари в брой, карта или телефон.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                <div className="list-icons">
                  <div className="item-icon pl-0">
                    <div className="mb-15">
                      <img
                        src="/assets/imgs/page/homepage2/Settings.png"
                        alt="Agon"
                      />
                    </div>
                    <h4 className="text-heading-4">Търговци</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Модернизирайте магазина си с биометрична система за
                      продажба, спестете време за транзакции и бъдете по-лични с
                      клиентите си.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                <div className="list-icons">
                  <div className="item-icon pl-0">
                    <div className="mb-15">
                      <img
                        src="/assets/imgs/page/homepage2/chain.png"
                        alt="Agon"
                      />
                    </div>
                    <h4 className="text-heading-4">3. Предприятие </h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Насърчаване на цифровата трансформация чрез биометрични
                      решения за финансовата, туристическата и търговската
                      индустрия.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mt-90">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <div className="inner-image">
                  <img
                    className="bdrd-16 img-responsive"
                    src="assets/imgs/page/homepage2/img-2.png"
                    alt="Agon"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <span className="tag-1 color-orange-900">
                  What We Do, What You Get
                </span>
                <h3 className="text-heading-1 mt-30">
                  The intelligent way to manage projects
                </h3>
                <div className="list-icons mt-50">
                  <div className="item-icon none-bd hover-up">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-work.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">
                      Work smarter with powerful features
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                  <div className="item-icon none-bd hover-up">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-design.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">
                      Designed for teams of all sorts and sizes
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                  <div className="item-icon none-bd hover-up">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-advance.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">
                      Advanced analytics to grow your business
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>
        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Направете плащанията по-бързи, сигурни и изключително удобни
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Приложението за цифров портфейл на клиентите им дава
                  възможност да контролират и двете си цифровата идентичност,
                  така и сигурността на данните.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-90 mb-lg-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div
                  className="bg-2 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Посетете нашия Vip магазин
                  </h4>
                  <p className="text-body-text-md color-gray-600">
                    Снабдете се с екипировка на PAYBYFACE и се присъединете към
                    нашата Fintech общност
                  </p>
                  <div className="box-image-inner bg-color-1">
                    <img
                      src="/assets/imgs/page/homepage2/scan3.png"
                      alt="Agon"
                    />
                    <div className="mt-0    ">
                      <Link href="/page-about-1">
                        <a className="btn btn-pink icon-arrow-right-white text-heading-6">
                          Пазарувай
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div
                  className="bg-6 box-square hover-up wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <h4 className="text-heading-4 color-gray-900 mb-15">
                    Намерете ни в сайта Product Hunt
                  </h4>
                  <p className="text-body-text-md color-gray-600">
                    Ориентирана към клиента, безпроблемна и сигурна екосистема
                    за дигитални плащания за по-безопасно, по-бързо и по-удобно
                    пазаруване.
                  </p>
                  <div className="box-image-inner bg-color-2">
                    <img
                      src="/assets/imgs/page/homepage2/scan2.png"
                      alt="Agon"
                      width={400}
                      height={400}
                    />
                    <div className="mt-0">
                      <Link href="/page-about-1">
                        <a className="btn btn-pink icon-arrow-right-white text-heading-6">
                          Product Hunt
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>
        <div className="section-box mt-70">
          <div className="container">
            <div className="box-green br-16">
              <h3 className="text-heading-1 color-white">
                Създайте своя безплатен
                <br className="d-lg-block d-none" />
                акаунт днес...
              </h3>
              <p className="text-desc-white">
                и от утре започнете да пазарувате само с лицето си!
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
          videoId="7e90gBu4pas"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}

export default Index4;
