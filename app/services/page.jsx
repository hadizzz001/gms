"use client";


import Header from "../_components/Header"; 
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Footer from "../_components/Footer"; 


export default function Home() {




  return (
    <>
      <div className="site-wrapper">
      <link rel="dns-prefetch" href="https://code.jquery.com/" />
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net/" />
  <link rel="dns-prefetch" href="https://maps.googleapis.com/" />
  <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 0.07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n"
    }}
  />
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
    href="mystyle.css"
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
        <Header />















        <div className="site-wrapper">
 
  <div
    className="page-banner"
    style={{
      backgroundImage:
        'url( "https://www.gps-ltd.com/app/uploads/2021/09/Diesel-generator-maintenance-himoinsa-1920x600-2.jpg" )'
    }}
  >
    <div className="page-banner__title">
      <h1>Services</h1>
    </div>
  </div>
  <div className="section section--half-image-half-text">
    <div className="half-image">
      <img
        alt="Generator installation by Generated Power Services Ltd"
        data-src="https://www.gps-ltd.com/app/uploads/2020/11/20190518_074252.jpg"
        className=" ls-is-cached lazyloaded"
        src="https://www.gps-ltd.com/app/uploads/2020/11/20190518_074252.jpg"
      />
      <noscript>
        &lt;img
        src="https://www.gps-ltd.com/app/uploads/2020/11/20190518_074252.jpg"
        alt="Generator installation by Generated Power Services Ltd"&gt;
      </noscript>
    </div>
    <div className="half-text">
      <div className="title">Maintenance contracts</div>
      <p>
        Whether you have recently purchased a generator from us, or have an
        existing generator, GPS can provide you with either our standard
        maintenance packages or, a tailored maintenance package to your specific
        requirements. We guarantee a fast, friendly and responsive service for
        all our customers whatever their requirements.
      </p>
      <ul>
        <li>Maintenance only</li>
        <li>GENCARE</li>
        <li>GENCARE24</li>
        <li>GENCARE24+</li>
        <li>Tailored packages specific to your requirements</li>
      </ul>
    </div>
  </div>
  <div className="section section--half-image-half-text">
    <div className="half-image">
      <img
        alt="Generator Load Bank Testing by Generated Power Services Ltd"
        data-src="https://www.gps-ltd.com/app/uploads/2020/11/Generator-Load-Bank-Testing.jpg"
        className=" ls-is-cached lazyloaded"
        src="https://www.gps-ltd.com/app/uploads/2020/11/Generator-Load-Bank-Testing.jpg"
      />
      <noscript>
        &lt;img
        src="https://www.gps-ltd.com/app/uploads/2020/11/Generator-Load-Bank-Testing.jpg"
        alt="Generator Load Bank Testing by Generated Power Services Ltd"&gt;
      </noscript>
    </div>
    <div className="half-text">
      <div className="title">Load bank testing</div>
      <p>
        Load bank testing is a crucial part of generator maintenance to ensure
        your generator can run to its maxiimum designed output. Load bank
        testing will ensure the engine acheives correct operating temperatures,
        this helps to prevent “wet stacking” which is a build up of unburnt fuel
        and oil deposits within the engine and exhaust system. Acheiving correct
        operating and combustions temperatures ensures this is cleared from the
        engine. Load bank testing has many benifits.
      </p>
      <p>
        GPS recommned that load bank testing is performed once per year to
        ensure your generator operates at its best
      </p>
      <ul>
        <li>Resistive and reactive load bank hire</li>
        <li>Cable hire</li>
        <li>Installation</li>
        <li>Highly experienced test engineers</li>
      </ul>
    </div>
  </div>
  <div className="section section--half-image-half-text">
    <div className="half-image">
      <img
        alt="For Sale Diesel Power Generator Sales Power Generator Sales London Essex Hertfordshire Generator Sales UK"
        data-src="https://www.gps-ltd.com/app/uploads/2021/09/Syncronising-control-panel-upgrade-1000x700-1.jpg"
        className=" ls-is-cached lazyloaded"
        src="https://www.gps-ltd.com/app/uploads/2021/09/Syncronising-control-panel-upgrade-1000x700-1.jpg"
      />
      <noscript>
        &lt;img
        src="https://www.gps-ltd.com/app/uploads/2021/09/Syncronising-control-panel-upgrade-1000x700-1.jpg"
        alt="For Sale Diesel Power Generator Sales Power Generator Sales London
        Essex Hertfordshire Generator Sales UK"&gt;
      </noscript>
    </div>
    <div className="half-text">
      <div className="title">Generator Upgrades</div>
      <p>
        Control systems and electronic components quickly become dated as new
        improved systems become available. We can upgrade your generator where
        possible so that you can benefit from advances in technology whilst not
        having to purchase a new machine. GPS will advise and guide you through
        this process.
      </p>
      <ul>
        <li>Full site survey</li>
        <li>Generator control panels</li>
        <li>ATS panels</li>
        <li>Full syncronising systems</li>
        <li>Installation</li>
        <li>Commissioning</li>
        <li>Canopy upgrades and repairs</li>
        <li>Engine overhaul and rebuild</li>
      </ul>
    </div>
  </div>
  <div className="section section--half-image-half-text">
    <div className="half-image">
      <img
        alt="Generated Power Services Ltd Emergency Support Vehicle"
        data-src="https://www.gps-ltd.com/app/uploads/2020/11/Emergency-support.jpg"
        className=" lazyloaded"
        src="https://www.gps-ltd.com/app/uploads/2020/11/Emergency-support.jpg"
      />
      <noscript>
        &lt;img
        src="https://www.gps-ltd.com/app/uploads/2020/11/Emergency-support.jpg"
        alt="Generated Power Services Ltd Emergency Support Vehicle"&gt;
      </noscript>
    </div>
    <div className="half-text">
      <div className="title">Emergency Support</div>
      <p>
        Our generator engineers are available 24 hours a day, every day of the
        year to provide support for our customers, whatever their requirements.
        Our engineer will attend your generator and rectify or identify the
        problem and provide a solution, ensuring continuity of your operation.
      </p>
      <ul>
        <li>24/7/365 support</li>
        <li>Experienced engineers</li>
        <li>Nationwide coverage</li>
        <li>Critical spares on vans</li>
        <li>Large stocks of filters and consumables</li>
        <li>Vans and 4×4 vehicles</li>
      </ul>
    </div>
  </div>
  <div className="section section--half-image-half-text">
    <div className="half-image">
      <img
        alt="Cummins Power Generator Standby Generators Emergency Diesel Power Generator sales London Essex Hertfordshire"
        data-src="https://www.gps-ltd.com/app/uploads/2020/11/Generator-Testing.jpg"
        className=" lazyloaded"
        src="https://www.gps-ltd.com/app/uploads/2020/11/Generator-Testing.jpg"
      />
      <noscript>
        &lt;img
        src="https://www.gps-ltd.com/app/uploads/2020/11/Generator-Testing.jpg"
        alt="Cummins Power Generator Standby Generators Emergency Diesel Power
        Generator sales London Essex Hertfordshire"&gt;
      </noscript>
    </div>
    <div className="half-text">
      <div className="title">Generator Repairs</div>
      <p>
        We are able to handle all types and sizes of both mechanical and
        electrical generator repair work. These repairs can either happen on
        site or at our workshops. All worked is carried out to the highest
        standards and parts used are covered by warranty. We will also provide
        temporary power whilst yours is being repaired, if required.
      </p>
      <ul>
        <li>Engine repairs</li>
        <li>Engine overhaul and rebuild</li>
        <li>Fuel systems and control</li>
      </ul>
    </div>
  </div>
  <div className="section section--half-image-half-text">
    <div className="half-image">
      <img
        alt="Generator servicing and maintenance by Generated Power Services Ltd"
        data-src="https://www.gps-ltd.com/app/uploads/2020/11/Generator-Maintenance.jpg"
        className=" lazyloaded"
        src="https://www.gps-ltd.com/app/uploads/2020/11/Generator-Maintenance.jpg"
      />
      <noscript>
        &lt;img
        src="https://www.gps-ltd.com/app/uploads/2020/11/Generator-Maintenance.jpg"
        alt="Generator servicing and maintenance by Generated Power Services
        Ltd"&gt;
      </noscript>
    </div>
    <div className="half-text">
      <div className="title">Summary of maintenance services</div>
      <ul>
        <li>Maintenance contracts</li>
        <li>Generator upgrades</li>
        <li>Workshop services (Repairs, servicing and overhauls)</li>
        <li>Emergency support services</li>
        <li>Generator repairs</li>
        <li>Load bank testing</li>
        <li>Oil sampling</li>
        <li>Fuel polishing</li>
        <li>Fuel management</li>
        <li>Fast and responsive service</li>
      </ul>
    </div>
  </div>
 
 
</div>

















        <div className="footer-top">
          TO DISCUSS YOUR NEEDS CALL <a href="tel:+9613502927">03502927</a> |{" "}
          <a href="mailto:sales@gps-ltd.com">SALES@GPS-LTD.COM</a>{" "}
        </div>
        <Footer />
      </div>

 

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.main-footer__inner .top-footer .footer-column .menu li a:hover {\n    color: #0b5cad;\n}\n"
        }}
      />



    </>

  );
}
