/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const OfferSlider = () => {
  const data = [
    {
      img: "user.png",
      title: "Биометрична идентификация",
      text: "Сигурна и цифрова биометрична система за идентификация, използваща най-новата технология AI/ML, за потвърждаване на самоличността на вашите клиенти.",
    },
    {
      img: "suitcase.png",
      title: "Марка с бял етикет",
      text: "Интересувате се да включите цялата функционалност на PayByFace в екосистемата си от брандирани продукти? Свържете се с нас, за да обсъдим интеграцията с бял етикет.",
    },
    {
      img: "iphone.png",
      title: "SDK Платформа",
      text: "Специално разработен за разработчици, PayByFace SDK може бързо и лесно да интегрира основните функции в собствените ви приложения.",
    },
    {
      img: "chart.png",
      title: "Аналитика",
      text: "Доста готини и завършени анализи на данни в областта на финтех BI табла, предназначени да отговарят на интерфейса на вашите финансови данни - лицензионно споразумение.",
    },
    {
      img: "charger.png",
      title: "Plugin-и & добавки",
      text: "Различни плъгини и разширения, свързани с лоялността и игровизацията, за повишаване на ангажираността на клиентите.",
    },
  ];

  return (
    <>
      <div className="box-swiper">
        <div className="swiper-container swiper-group-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-5",
              nextEl: ".swiper-button-next-5",
            }}
            className="swiper-wrapper pb-70 pt-5"
          >
            {data.map((item, i) => (
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="card-grid-style-2 hover-up">
                    <div className="grid-2-img">
                      <img
                        src={`assets/imgs/page/homepage1/${item.img}`}
                        alt="Agon"
                      />
                    </div>
                    <h3 className="text-heading-5 mt-20">{item.title}</h3>
                    <p className="text-body-text color-gray-600 mt-20">
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OfferSlider;
