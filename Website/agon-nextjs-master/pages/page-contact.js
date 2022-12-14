import Layout from "../components/layout/Layout";

function Contact() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container text-center">
              <h1 className="text-heading-2 color-gray-1000 mb-20">Контакти</h1>
              <p className="text-body-text color-gray-500">
                Свържете се с нас
                <br className="d-lg-block d-none" />
              </p>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                <h2 className="text-heading-1 color-gray-900 mb-20">
                  Нашите локации
                </h2>
              </div>
            </div>
          </div>
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">Централа в София</h4>
                    <p className="text-body-text color-gray-1100 mt-15">
                      Сан Стефано 22, 1504
                      <br />
                      София, България
                      <br />
                      ДДС №: BG206655616
                      <br />
                      Булстат: 206655616
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">Централа в Букурещ</h4>
                    <p className="text-body-text color-gray-1100 mt-15">
                      Колентина №8, бл. 5, вх. 4, ет. 3, ап. 148-1
                      <br />
                      Букурещ, Румъния
                      <br />
                      ДДС №: RO41854280
                      <br />
                      Рег. №: J40/15002/2019
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons hover-up">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-retent.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">Централа в Амстердам</h4>
                    <p className="text-body-text color-gray-1100 mt-15">
                      Херенгахт 420 (1017BZ),
                      <br />
                      Амстердам, Холандия
                      <br />
                      ДДС №: NL861495159B01
                      <br />
                      Търговска камара: №78687748
                      <br />
                      Рег. №: NL000046297308
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
