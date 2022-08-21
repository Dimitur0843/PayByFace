/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-6">
                <span className="color-gray-400 text-body-lead">
                  © 2022 PayByFace B.V.
                </span>
                <Link href="https://paybyface.io/terms-conditions-bg/">
                  <a className="text-body-text color-gray-400 ml-50">
                    Общи условия
                  </a>
                </Link>
                <Link href="https://paybyface.io/privacy-policy-bg/">
                  <a className="text-body-text color-gray-400 ml-50">
                    Политика за поверителност
                  </a>
                </Link>
              </div>
              <div className="col-md-6 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <Link href="https://www.facebook.com/paybyface.io/">
                    <a className="icon-socials icon-facebook"></a>
                  </Link>
                  <Link href="https://twitter.com/paybyface">
                    <a className="icon-socials icon-twitter"></a>
                  </Link>
                  <Link href="https://www.instagram.com/paybyface/">
                    <a className="icon-socials icon-instagram"></a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/paybyface?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=ro">
                    <a className="icon-socials icon-linkedin"></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
