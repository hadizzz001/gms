"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../_components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../_components/Footer";
import ProductsList from "../_components/ProductsList";


const PageContent = ({ search }) => {
  const [productData, setProductData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("details");
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = async (id) => {
    try {
      const response = await fetch(`/api/products1/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    if (search) {
      setLoading(true);
      fetchProductData(search).then((data) => {
        setProductData(data);
        setLoading(false);
      });
    }
  }, [search]);

  useEffect(() => {
    if (productData) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const exists = cart.some((item) => item.id === productData.id);
      setIsInCart(exists);
    }
  }, [productData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!productData) {
    return <p>No data found</p>;
  }

  const { id, img: imgs, title, price, description, type, brand, category } = productData;

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleScrollUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleScrollDown = () => {
    if (startIndex + visibleCount < imgs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleScrollLeft = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (currentImageIndex < imgs.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const updateCartQuantity = (id, qty) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!currentCart.some((item) => item.id === product.id)) {
      currentCart.push({ ...product, quantity });
      localStorage.setItem("cart", JSON.stringify(currentCart));
      setIsInCart(true);
    } else {
      updateCartQuantity(product.id, quantity);
    }
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      const newQty = type === "increase" ? prev + 1 : Math.max(prev - 1, 1);
      if (isInCart && productData) {
        updateCartQuantity(productData.id, newQty);
      }
      return newQty;
    });
  };


  return (
    <>

      <link rel="dns-prefetch" href="https://code.jquery.com/" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net/" />
      <link rel="dns-prefetch" href="https://maps.googleapis.com/" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />

      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="../wp/wp-includes/css/dist/block-library/style.min.css@ver=6.1.7.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="classic-theme-styles-css"
        href="../wp/wp-includes/css/classic-themes.min.css@ver=1.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        href="../mystyle.css"
        type="text/css"
        media="all"
      />
      <style
        id="global-styles-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\nbody{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('index.html');--wp--preset--duotone--grayscale: url('index.html');--wp--preset--duotone--purple-yellow: url('index.html');--wp--preset--duotone--blue-red: url('index.html');--wp--preset--duotone--midnight: url('index.html');--wp--preset--duotone--magenta-yellow: url('index.html');--wp--preset--duotone--purple-green: url('index.html');--wp--preset--duotone--blue-orange: url('index.html');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}\n:where(.wp-block-columns.is-layout-flex){gap: 2em;}\n.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}\n"
        }}
      />
      <link
        rel="stylesheet"
        id="theme-style-css"
        href="../app/themes/popcorn-theme/assets/css/popcorn-theme.css@ver=all.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="popcorn_main_font-css"
        href="https://fonts.googleapis.com/css?family=Lato%3A300%2C400%2C700%2C900&ver=6.1.7"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="moove_gdpr_frontend-css"
        href="../app/plugins/gdpr-cookie-compliance/dist/styles/gdpr-main.css@ver=4.12.3.css"
        type="text/css"
        media="all"
      />
      <style
        id="moove_gdpr_frontend-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n#moove_gdpr_cookie_modal,#moove_gdpr_cookie_info_bar,.gdpr_cookie_settings_shortcode_content{font-family:Nunito,sans-serif}#moove_gdpr_save_popup_settings_button{background-color:#373737;color:#fff}#moove_gdpr_save_popup_settings_button:hover{background-color:#000}#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton,#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton{background-color:#005891}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton,.gdpr_cookie_settings_shortcode_content .gdpr-shr-button.button-green{background-color:#005891;border-color:#005891}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton:hover,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton:hover,.gdpr_cookie_settings_shortcode_content .gdpr-shr-button.button-green:hover{background-color:#fff;color:#005891}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close span.gdpr-icon{background-color:#005891;border:1px solid #005891}#moove_gdpr_cookie_info_bar span.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar span.change-settings-button:focus{-webkit-box-shadow:0 0 1px 3px #005891;-moz-box-shadow:0 0 1px 3px #005891;box-shadow:0 0 1px 3px #005891}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close i:hover,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close span.gdpr-icon:hover,#moove_gdpr_cookie_info_bar span[data-href]>u.change-settings-button{color:#005891}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li.menu-item-selected a span.gdpr-icon,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li.menu-item-selected button span.gdpr-icon{color:inherit}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a span.gdpr-icon,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button span.gdpr-icon{color:inherit}#moove_gdpr_cookie_modal .gdpr-acc-link{line-height:0;font-size:0;color:transparent;position:absolute}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close:hover i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content a:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content span.change-settings-button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button:hover,#moove_gdpr_cookie_info_bar span[data-href]>u.change-settings-button,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content span.change-settings-button.focus-g,span.change-settings-button:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button:focus{color:#005891}#moove_gdpr_cookie_modal.gdpr_lightbox-hide{display:none}#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton,#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton,.gdpr-shr-button,#moove_gdpr_cookie_info_bar .moove-gdpr-infobar-close-btn{border-radius:0}\n"
        }}
      />
      <link rel="https://api.w.org/" href="wp-json/index.html" />
      <link rel="alternate" type="application/json" href="wp-json/../wp/v2/pages/18" />
      <link
        rel="EditURI"
        type="application/rsd+xml"
        title="RSD"
        href="../wp/xmlrpc.php@rsd"
      />
      <link
        rel="wlwmanifest"
        type="application/wlwmanifest+xml"
        href="../wp/wp-includes/wlwmanifest.xml"
      />
      <meta name="generator" content="WordPress 6.1.7" />
      <link rel="shortlink" href="index.html" />
      <link
        rel="alternate"
        type="application/json+oembed"
        href="wp-json/oembed/1.0/embed@url=https%253A%252F%252Fwww.gps-ltd.com%252F"
      />
      <link
        rel="alternate"
        type="text/xml+oembed"
        href="wp-json/oembed/1.0/embed@url=https%253A%252F%252Fwww.gps-ltd.com%252F&format=xml"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\t.no-js img.lazyload { display: none; }\n\t\t\tfigure.wp-block-image img.lazyloading { min-width: 150px; }\n\t\t\t\t\t\t\t.lazyload, .lazyloading { opacity: 0; }\n\t\t\t\t.lazyloaded {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\ttransition: opacity 400ms;\n\t\t\t\t\ttransition-delay: 0ms;\n\t\t\t\t}\n\t\t\t\t\t"
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n\t\t\t\n\t\t.button {\n\t\t\tcolor: #fff;\n\t\t}\n\n\t\t\n\t\t\n\t\t/* output custom styles */\n\n\t\tfooter {\n\t\t\tbackground-color: #333;\n\t\t}\n\n\t\t.footer-top {\n\t\t\tbackground-color: #005891;\n\t\t}\n\n\t\t.site-header__nav.nav-open {\n\t\t\tbackground-color: #0b5cad;\n\t\t}\n\n\t\t.gradient {\n\t\t\tbackground-color: #0b5cad;\n\t\t}\n\n\t\t#cookie-notice .button.bootstrap {\n\t\t\tbackground-color: #0b5cad!important;\n\t\t\tbackground-image: none!important;\n\t\t\tmargin-top: 0!important;\n\t\t}\n\n\t\th1, h2, h3, h4, h5, h6, a {\n\t\t\tcolor: #000;\n\t\t}\n\n\t\t.member-name, .service-title {\n\t\t\tcolor: #000; text-align: center; font-weight: 400;\n\t\t}\n\n\t\t.post-title a {\n\t\t\tcolor: #0b5cad;\n\t\t}\n\n\t\t.button {\n\t\t\tbackground-color: #0b5cad;\n\t\t}\n\n\t\t\n\t\t\n\t\t/* output custom styles */\n\n\t\t.bottom-footer {\n\t\t\tborder-top: 3px solid #fff;\n\t\t}\n\n\t\t.button:hover {\n\t\t\tbackground-color: #005891;\n\t\t}\n\n\t\t\n\t"
        }}
      />
      <link
        rel="icon"
        href="../app/uploads/2020/07/cropped-favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        href="../app/uploads/2020/07/cropped-favicon-192x192.png"
        sizes="192x192"
      />
      <link
        rel="apple-touch-icon"
        href="../app/uploads/2020/07/cropped-favicon-180x180.png"
      />
      <meta
        name="msapplication-TileImage"
        content="https://www.gps-ltd.com/../app/uploads/2020/07/cropped-favicon-270x270.png"
      />
      <link rel="shortcut icon" type="image/png" href="index.html" />
      <link rel="stylesheet" href="https://use.typekit.net/dmf2gez.css" />


      <div className="min-h-screen flex flex-col items-center  py-12 mt-20">
        <div className="flex flex-col lg:flex-row w-full p-6 bg-white rounded-lg  ">
          {/* Image Slider */}

          <div>
            {/* PC Version */}
            <div className="hidden lg:flex space-x-4">
              {/* Thumbnail Slider */}
              <div className="relative flex flex-col">
                <div
                  className="relative overflow-hidden h-96"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="flex flex-col transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateY(-${startIndex * 100}px)`,
                    }}
                  >
                    {imgs.map((img, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg transition-transform duration-500 ease-in-out ${currentImageIndex === index
                          ? "scale-105  "
                          : "scale-95  "
                          }`}
                        style={{
                          transformOrigin: "center",
                          opacity:
                            startIndex <= index && index < startIndex + visibleCount
                              ? 1
                              : 0.5,
                        }}
                      >
                        <img
                          src={img}
                          alt={`thumbnail-${index}`}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() => handleThumbnailClick(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    onClick={handleScrollUp}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                    disabled={startIndex === 0}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 15l-7.5-7.5L4.5 15"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleScrollDown}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                    disabled={startIndex + visibleCount >= imgs.length}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 9l7.5 7.5L19.5 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="relative w-full h-[700px] overflow-hidden"
              >
                {imgs && imgs.length > 0 ? (
                  <>
                    <img
                      src={imgs[currentImageIndex]}
                      alt={`image-${currentImageIndex}`}
                      className="w-full h-full object-cover rounded-lg transition-all ease-in-out relative"
                      id="mainImage"
                    />
                    <img
                      src="https://ucarecdn.com/4be8ddad-5bbd-4bc5-ba0b-7cae4575a4e5/logo.png"
                      alt="Watermark"
                      className="absolute top-0 right-0 p-4 opacity-50" // Adjust opacity, position, and padding as needed
                    />
                  </>
                ) : (
                  <div className="text-center text-gray-500">No main image available</div>
                )}
              </div>
            </div>

            {/* Mobile Version */}
            <div className="block lg:hidden flex flex-col items-center space-y-4">
              <div className="relative flex items-center w-full">
                {/* Left Arrow */}
                <button
                  onClick={handleScrollLeft}
                  className="absolute left-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                  disabled={currentImageIndex === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.5L7.5 12l7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Thumbnails */}
                <div className="flex justify-center overflow-x-auto space-x-4 mx-8">
                  {imgs.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`thumbnail-${index}`}
                      className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${currentImageIndex === index
                        ? "scale-105 border-2 border-blue-600"
                        : "scale-95 border-2 border-transparent"
                        }`}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleScrollRight}
                  className="absolute right-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                  disabled={currentImageIndex === imgs.length - 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19.5l7.5-7.5L9 4.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Main Image */}
              <div className="relative w-full">
                {imgs && imgs.length > 0 ? (
                  <>
                    <img
                      src={imgs[currentImageIndex]}
                      alt={`image-${currentImageIndex}`}
                      className="w-full h-64 object-cover rounded-lg transition-all duration-100 ease-in-out"
                    />
                    <img
                      src="https://ucarecdn.com/4be8ddad-5bbd-4bc5-ba0b-7cae4575a4e5/logo.png"
                      alt="Watermark"
                      className="absolute top-0 right-0 p-4 opacity-50" // Adjust opacity, position, and padding as needed
                    />
                  </>
                ) : (
                  <div className="text-center text-gray-500">No main image available</div>
                )}
              </div>
            </div>
          </div>


          {/* Product Info */}
          <div className="flex-1 px-6 py-4">
            <h1 className="section--title"> {title}</h1>
            <h4  >Brand: {brand}</h4>
            <h4  >Type: {type}</h4>
            <h4  >Category: {category}</h4>
            <h4 className="section--title">${price}</h4>





            <div className="flex items-center mt-6">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l hover:bg-gray-300"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-16 text-center border border-gray-300"
              />
              <button
                onClick={() => handleQuantityChange("increase")}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r hover:bg-gray-300"
              >
                +
              </button>
            </div>




            {isInCart ? (
              <p className="block bg-green-100 text-green-600 text-center py-3 px-8 rounded-lg mt-6">
                Item added to cart successfully!
              </p>
            ) : (
              <a
                onClick={() => addToCart(productData)}
                className="block bg-green-600 text-white text-center py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 mt-6 cursor-pointer"
              >
                Add to Cart
              </a>
            )}


            <ul className="mt-6 space-y-4">
              <li className="text-gray-700 text-sm flex items-start">
                <span className="material-icons mr-2 text-blue-600 flex items-center">
                  <i className="inline-block">
                    <svg
                      fill="#0b5cad"
                      width="34px"
                      height="34px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        <title>shipping</title>
                        <path d="M16.722 21.863c-0.456-0.432-0.988-0.764-1.569-0.971l-1.218-4.743 14.506-4.058 1.554 6.056-13.273 3.716zM12.104 9.019l9.671-2.705 1.555 6.058-9.67 2.705-1.556-6.058zM12.538 20.801c-0.27 0.076-0.521 0.184-0.765 0.303l-4.264-16.615h-1.604c-0.161 0.351-0.498 0.598-0.896 0.598h-2.002c-0.553 0-1.001-0.469-1.001-1.046s0.448-1.045 1.001-1.045h2.002c0.336 0 0.618 0.184 0.8 0.447h3.080v0.051l0.046-0.014 4.41 17.183c-0.269 0.025-0.538 0.064-0.807 0.138zM12.797 21.811c1.869-0.523 3.79 0.635 4.291 2.588 0.501 1.951-0.608 3.957-2.478 4.48-1.869 0.521-3.79-0.637-4.291-2.588s0.609-3.957 2.478-4.48zM12.27 25.814c0.214 0.836 1.038 1.332 1.839 1.107s1.276-1.084 1.062-1.92c-0.214-0.836-1.038-1.332-1.839-1.109-0.802 0.225-1.277 1.085-1.062 1.922zM29.87 21.701l-11.684 3.268c-0.021-0.279-0.060-0.561-0.132-0.842-0.071-0.281-0.174-0.545-0.289-0.799l11.623-3.25 0.482 1.623z" />
                      </g>
                    </svg>
                  </i>
                </span>
                <div className="flex flex-col">
                  <b className="bold">Shipping</b>
                </div>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="material-icons mr-2 text-blue-600 flex items-center">
                  <i className="inline-block">
                    <svg
                      fill="#0b5cad"
                      width="34px"
                      height="34px"
                      viewBox="0 -4.19 122.88 122.88"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ enableBackground: "new 0 0 122.88 114.5" }}
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path d="M118.66,9.63c0.67-0.13,1.37,0,1.95,0.35c0.99,0.41,1.69,1.38,1.69,2.52l0.57,79.58c0.05,0.98-0.43,1.95-1.33,2.48 l-32.5,19.39c-0.46,0.35-1.03,0.55-1.65,0.55c-0.15,0-0.3-0.01-0.44-0.04l-84.34-9.38C1.16,105.02,0,103.82,0,102.35V21.42h0 c-0.03-1.08,0.58-2.13,1.64-2.59l42.31-18.6l0,0c0.44-0.2,0.94-0.28,1.46-0.21L118.66,9.63L118.66,9.63z M90.14,33.86v73.06 l27.26-16.26l-0.53-73.65L90.14,33.86L90.14,33.86z M84.65,108.69V34.63l-35.97-4.59L47.5,64.41l-12.63-8.6l-12.63,7.14L24.85,27 L5.49,24.53v75.37L84.65,108.69L84.65,108.69z M78.96,9.94L52.43,25l34.51,4.4l24.19-15.24L78.96,9.94L78.96,9.94z M28.23,21.91 L53.95,6.66l-8.48-1.11L12.74,19.94L28.23,21.91L28.23,21.91z" />{" "}
                        </g>{" "}
                      </g>
                    </svg>

                  </i>
                </span>
                <div className="flex flex-col">
                  <b className="bold">Free Pick Up At Our Warehouse</b>
                </div>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="material-icons mr-2 text-blue-600 flex items-center">
                  <i className="inline-block  ">
                    <svg
                      version="1.1"
                      id="Icons"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 32 32"
                      xmlSpace="preserve"
                      width="34px"
                      height="34px"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              " .st0{fill:none;stroke:#0b5cad;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#0b5cad;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:3;} .st2{fill:none;stroke:#0b5cad;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;} .st3{fill:none;} "
                          }}
                        />{" "}
                        <polyline className="st0" points="2,9 19,9 19,24 10,24 " />{" "}
                        <circle className="st0" cx={24} cy={24} r={2} />{" "}
                        <circle className="st0" cx={8} cy={24} r={2} />{" "}
                        <polyline className="st0" points="19,24 19,13 25,13 29,18 29,24 26,24 " />{" "}
                        <line className="st0" x1={4} y1={13} x2={13} y2={13} />{" "}
                        <line className="st0" x1={2} y1={17} x2={11} y2={17} />{" "}
                        <rect x={-288} y={-432} className="st3" width={536} height={680} />{" "}
                      </g>
                    </svg>

                  </i>
                </span>
                <div className="flex flex-col">
                  <b className="bold">Fast & Quick Shipping</b>
                </div>
              </li>
            </ul>





          </div>
        </div>


        <div className=" container  ">
          <div className=" "> </div>







          <div className="col-1"> </div>
        </div>
        {/* Full-Width Sections */}
        <div className="w-full bg-white mt-8 px-8 py-6 ">
          <h3 className="section--title">Product Details</h3>
          {activeSection === "details" && (
            <div
              className="prose lg:prose-xl max-w-[500px] custom-list"
              style={{ maxWidth: '500px' }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

        </div>




        <h1 className="section--title">Related Products</h1>

        {type ? <ProductsList type={type} /> : <p>Loading...</p>}



      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: "\n    .section--title {\ntext-align: left !important;\n}\n"
        }}
      />



    </>
  );
};

const PageWrapper = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  return <PageContent search={search} />;
};

const Page = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading parameters...</div>}>
        <PageWrapper />
      </Suspense>
      <Footer />
    </>
  );
};

export default Page;
