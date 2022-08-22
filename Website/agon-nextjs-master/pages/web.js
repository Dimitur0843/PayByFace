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
                  <h3 className="text-display-4 mt-30">
                    Добавете удостоверяване с лицево разпознаване
                    към вашия онлайн процес на плащане.
                  </h3>
                  <div className="mt-40">
                    <Link href="page-contact">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Контакти
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div style={{ borderRadius: '50px', overflow: 'hidden' }}>
                      <img src="assets/imgs/page/services/1/15.jpg" layout="fill" objectFit="cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default About1;
