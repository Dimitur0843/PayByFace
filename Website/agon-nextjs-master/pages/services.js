/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import OfferSlider from "../components/slider/Offer";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Service1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero bg-service-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1 className="text-display-2">
                    Интеграция на NextGen биометрични плащания
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Цифрова трансформация и биометрични решения за финансовата
                    индустрия и търговията на дребно като продукт с бял етикет.
                  </p>
                </div>
                <div className="col-lg-12 d-none d-lg-block">
                  <div className="row">
                    <div className="col-lg-2" />
                    <div className="col-lg-8">
                      <div className="banner-imgs">
                        <div className="block-1 shape-2">
                          <img
                            src="/assets/imgs/page/services/1/banner100.jpg"
                            alt="Agon"
                          />
                        </div>
                        <div className="block-2 shape-2">
                          <img
                            src="/assets/imgs/page/services/1/banner4.png"
                            alt="Agon"
                          />
                        </div>
                        <div className="block-3 shape-2">
                          <img
                            src="/assets/imgs/page/services/1/banner101.png"
                            alt="Agon"
                          />
                        </div>
                        <img
                          src="/assets/imgs/page/services/1/architecture-banks.png"
                          alt="Agon"
                        />
                      </div>
                    </div>
                    <div className="col-lg-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mt-120">
            <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                  <h2 className="text-heading-1 color-gray-900">
                    Изберете компонентите, които най-добре отговарят на вашите
                    нужди
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    Изберете измежду няколкото налични интегрирани решения. Или
                    се свържете с нас, за да персонализираме решението според
                    интересите на вашето предприятие.
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
              <div className="container mt-70">
                <OfferSlider />
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-70">
          <div className="container">
            <div
              className="box-green br-16"
              style={{
                backgroundImage:
                  "url('assets/imgs/page/services/1/magnify.png')",
              }}
            >
              <h3 className="text-heading-3 color-white">
                Открийте нови данни за клиентите и увеличете тяхната лоялност
                чрез приложими решения, ориентирани към клиента.
              </h3>
              <br />
              <br />
              <p className="text-desc-white">
                Поискайте безплатна консултация, за да разберете как
                интегрираните решения на PayByFace добавят ценни иновативни
                функции към вашата оферта.
              </p>
              <br />
              <br />
              <Link href="/page-contact">
                <a className="btn btn-pink icon-arrow-right-white text-heading-6">
                  Контакти{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="NT3DAMn6_tA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}

export default Service1;
