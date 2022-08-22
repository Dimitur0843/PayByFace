/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Service1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero bg-service-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 box-banner-left">
                  <h2 className="text-display-4 mt-30">
                    Осигурете на клиентите си по-добро преживяване
                  </h2>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Добавяне на smart поръчка във вашия ресторант или хотел
                  </p>
                  <div className="mt-40">
                    <a
                      className="btn btn-link icon-triangle color-gray-900 ml-40"
                      onClick={() => setOpen(true)}
                    >
                      Виж как работи
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <img
                      src="/assets/imgs/page/services/1/restaurant.png"
                      alt="Agon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                <h2 className="text-heading-1 color-gray-900">
                  Седни, сканирай,
                  <br className="d-lg-block d-none" />
                  поръчай и плати
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Когато клиентите Ви са готови, могат просто да станат и да
                  тръгнат.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-5 hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/business-strategy.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Поръчка на самообслужване
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    Клиентите ви могат сами да направят поръчката си и да платят
                    незабавно директно в заведение.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-9 hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/local.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Управление на поръчки
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    Служителите ви могат лесно да преглеждат и потвърждават
                    поръчките на таблет, който инсталираме за вас и който вече е
                    включен в нашата система.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-2 hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/social.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">SMS съобщения</h3>
                  <p className="text-body-excerpt mt-20">
                    Клиентите могат бързо да се свържат с персонала чрез SMS,
                    ако се нуждаят от помощ за поръчките си.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-70 center">
            <div className="row " style={{ justifyContent: "center" }}>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-5 hover-up">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/business-strategy.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">
                    Управление на инвентара
                  </h3>
                  <p className="text-body-excerpt mt-20">
                    Получавате достъп до нашия уебсайт Merchant Dashboard, за да
                    добавяте и променяте лесно елементи от менюто си.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-1 bg-9 hover-up">
                  <div className="grid-1-img">
                    <img src="/assets/imgs/page/homepage1/local.svg" />
                  </div>
                  <h3 className="text-heading-3 mt-20">Use cases</h3>
                  <p className="text-body-excerpt mt-20">
                    Работи чудесно на тераси на ресторанти и дори в хотели за
                    поръчка на рум сървис!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
