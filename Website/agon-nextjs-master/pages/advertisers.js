/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
const ModalVideo = dynamic(import("react-modal-video"), {
  ssr: false,
});

function Career() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-3">
            <div className="container">
              <div className="text-center">
                <span className="tag-1 bg-6 color-green-900">
                  Да успяваме заедно
                </span>
                <h1 className="text-display-2 color-gray-900 mt-30">
                  Дигитална мрежа за
                  <br className="d-lg-block d-none" />
                  рекламиране извън дома
                </h1>
                <div className="text-body-lead-large color-gray-500 mt-40">
                  Пленете аудиторията във вашия град с лекота!
                  <br className="d-lg-block d-none" />
                </div>
                <div className="mt-50"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="box-image">
                  <a
                    className="popup-youtube btn-play-video btn-play-middle"
                    onClick={() => setOpen(true)}
                  ></a>
                  <img
                    className="img-responsive bdrd-16"
                    src="assets/imgs/page/career/img.png"
                    alt="Agon"
                  />
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
        </div>

        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Mестоположения на търговци,
                  <br className="d-lg-block d-none" />
                  от които да избирате
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Изберете кварталите и покажете вашата бизнес реклама на нашите
                  сензорни екрани.
                  <br className="d-lg-block d-none" />
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/phone.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">Статични и видео реклами</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Съдържанието на вашия рекламен банер ще се показва в цикъл
                      през целия ден на нашите DOOH екрани по ваш избор.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/thumb.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">Целеви маркетинг</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Получете максимална възвръщаемост на инвестициите от
                      маркетинговия си бюджет с насочени реклами.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/sms.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">SMS съобщения</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Планирайте SMS съобщения, за да привлечете клиентите си
                      въз основа на географско ограждане.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/ana.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">Месечно отчитане</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Получавайте месечни отчети за статистическите данни за
                      импресиите и обхвата на аудиторията.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-40 hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/repeat.png"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">Повторете видимостта</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Клиентите ще виждат вашата реклама няколко пъти седмично.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section-box">
            <div className="banner-hero banner-2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 mt-50">
                    <span className="tag-1 bg-green-900">PayByFace</span>
                    <h1 className="text-display-3 mt-30">
                      Достигайте до хиляди хора на месец в Букурещ в
                      най-иновативната мрежа за дигитална реклама извън дома в
                      града!
                    </h1>
                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                      Свържете се с нас и поискайте безплатна консултация за
                      това как външната реклама може да ви донесе нови клиенти.
                    </p>
                    <div className="mt-40">
                      <Link href="https://paybyface.io/wp-content/uploads/2021/05/Paybyface-DOOH-adnetwork2021_compressed.pdf">
                        <a className="btn btn-black shape-square icon-arrow-right-white">
                          Изтеглете медийния комплект PDF
                        </a>
                      </Link>
                    </div>
                    <div className="mt-50">
                      <div className="row">
                        <div className="col-lg-3 col-sm-4 col-4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 d-none d-lg-block">
                    <div className="banner-imgs">
                      <div className="block-1 shape-2">
                        <img
                          src="/assets/imgs/page/homepage2/global12.png"
                          alt="Agon"
                        />
                      </div>
                      <div className="block-2 shape-3">
                        <img
                          src="/assets/imgs/page/homepage2/payment.png"
                          alt="Agon"
                        />
                      </div>
                      <img
                        className="img-responsive shape-1"
                        alt="Agon"
                        src="assets/imgs/page/homepage2/advpay.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

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

export default Career;
