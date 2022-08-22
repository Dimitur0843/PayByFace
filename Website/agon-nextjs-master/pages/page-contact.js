import Layout from "../components/layout/Layout";


function Contact() {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <h1 className="text-heading-2 color-gray-1000 mb-20">Контакти</h1>
                            <p className="text-body-text color-gray-500">Свържете се с нас<br className="d-lg-block d-none" /></p>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mb-20 mt-140">
                        <div className="bdrd-58 box-gray-100 icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Задайте вашият въпрос тук.</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Имате интерес?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">Тук можете да се свържете с екипът ни.<br className="d-lg-block d-none" /></p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Офисите ни в Амстердам</h4>
                                    <p className="text-body-text color-gray-600">Херенграхт 420 (1017BZ)<br />Търговска камара #: 78687748</p>
                                    <p className="text-body-text color-gray-600">Регистрационен номер: NL000046297308</p>
                                    <p className="text-body-text color-gray-600">ДДС: NL861495159B01</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Офисите ни в Букурещ</h4>
                                    <p className="text-body-text color-gray-600">Колентина 8 (1017BZ)<br />Търговска камара #: 78687748</p>
                                    <p className="text-body-text color-gray-600">Регистрационен номер: NL000046297308</p>
                                    <p className="text-body-text color-gray-600">ДДС: NL861495159B01</p>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Офисите ни в София</h4>
                                    <p className="text-body-text color-gray-600">1504 София, Сан Стефано 22<br />Търговска камара #: 78687748</p>
                                    <p className="text-body-text color-gray-600">Регистрационен номер: 206655616</p>
                                    <p className="text-body-text color-gray-600">ДДС: BG206655616</p>
                                </div>
                                
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Име" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Компания (по избор)" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Имейл" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Телефон" /></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" placeholder="Въпрос"  /></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Изпрати съобщение</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </section>
                <section className="section-box mt-60">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Търговски услуги</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">Имейл:<br />merchants@paybyface.io<br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Потребителски услуги</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">Имейл:<br />accounts@paybyface.io<br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Отдел за фактуриране</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">Имейл:<br />billing@paybyface.io<br /><br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Рекламни услуги</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">Имейл:<br />advertising@paybyface.io<br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Набиране на персонал</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">Имейл:<br />advertising@paybyface.io<br /><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Техническа поддръжка</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">Имейл:<br />support@paybyface.io<br /><br /></p>
                                    </div>
                                </div>
                            </div>
                </section>

            </Layout>

        </>
    )
}

export default Contact;