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
                  <h1 className="text-display-3 mt-30">
                    Използвайте биометрични плащания
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    СПЕЦИАЛНА ОФЕРТА!! <br /> Свържете се с нас, за да разберете
                    как как можете да получите БЕЗПЛАТЕН iPad киоск от нас в
                    Букурещ И КРЕДИТ от 500 евро за таксите за обработка на
                    карти!
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
                    <div className="block-1 shape-2">
                      <img
                        src="/assets/imgs/page/services/1/banner.png"
                        alt="Agon"
                      />
                    </div>
                    <img
                      src="/assets/imgs/page/services/1/tucano.jpg"
                      alt="Agon"
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
              <div className="col-lg-12 col-sm-12 col-12">
                <h2 className="text-heading-2 color-gray-900 mb-50">
                  Изберете подходящото за <br className="d-lg-block d-none" />
                  Вас биометрично плащане
                </h2>
              </div>
            </div>
          </div>
          <div className="container mt-20">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/smart.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Smart POS</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Опростете процеса на поръчка за клиентите си и намалете
                      разходите за управление на бизнеса си.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/coffee.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6"> Поръчване в заведение</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Седнете, сканирайте кода, поръчайте храна и платете!
                      Когато клиентите ви приключат, те могат просто да станат и
                      да си тръгнат.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/sign.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Указателен POS</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      Използвайте таблетното устройство, за да пускате в
                      магазина дигитални табла с вашите промоции и да ангажирате
                      клиентите. То дава възможност и за обработка на
                      биометрични плащания.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/iphone.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Мобилен POS</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      Използвайте таблетното устройство, за да пускате в
                      магазина дигитални табла с вашите промоции и да ангажирате
                      клиентите. То дава възможност и за обработка на
                      биометрични плащания.
                    </p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/web.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Уеб POS</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      Добавете биометрична автентификация към онлайн магазина си
                      за електронна търговия, за да потвърдите самоличността на
                      клиентите си и да намалите вероятността от измама.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/loyalty.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Loyalty POS</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      Създайте игри за Вашите клиенти и увеличете лоялността им
                      към Вашата марка.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-70">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="card-grid-1 bg-5 hover-up">
                <div className="grid-1-img">
                  <img src="/assets/imgs/page/services/1/merchant-dashboards-1.png" />
                </div>
                <h3 className="text-heading-3 mt-20 text-center">
                  График на промоциите
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="card-grid-1 bg-9 hover-up">
                <div className="grid-1-img">
                  <img src="/assets/imgs/page/services/1/merchant-dashboards-2.png" />
                </div>
                <h3 className="text-heading-3 mt-20 text-center">
                  Месечен отчет <br /> на продажбите
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="card-grid-1 bg-2 hover-up">
                <div className="grid-1-img">
                  <img src="/assets/imgs/page/services/1/merchant-dashboards-3.png" />
                </div>
                <h3 className="text-heading-3 mt-20 text-center">
                  Опознайте клиентите Ви
                </h3>
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

export default Service1;
