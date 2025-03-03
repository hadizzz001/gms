"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import Header from "../_components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../_components/Footer";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import React, { useState, useEffect, Suspense } from 'react';

const Dashboard = ({ cat, brnd }) => {
  const [allTemp, setTemp] = useState([]);
  const [allProd, setProd] = useState([]);
  const [allParts, setParts] = useState([]);
  const [allBrands, setBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({
    Products: true,
    Parts: true,
    Brands: true,
  }); // Initialize with all categories expanded
  const [loading, setLoading] = useState(false);
  const [visibleItemsCount, setVisibleItemsCount] = useState(12);  // Number of items to show
  const [totalItemsCount, setTotalItemsCount] = useState(0); // Total number of items

  const router = useRouter();


  // Fetch "allTemp" (Default Data) - All Products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        if (Array.isArray(data)) {
          setTemp(data);
          setFilteredData(data); // Initially display allTemp
          setTotalItemsCount(data.length); // Set the total number of items
        } else {
          console.error("Expected an array, but got:", data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchAllProducts();
  }, []);

  // Fetch based on "cat" parameter
  useEffect(() => {
    const fetchCategoryData = async () => {
      if (cat) {
        try {
          setLoading(true);
        
          const response = await fetch(`/api/products`);
          const data = await response.json();
          console.log("code: ", response.status);
        
          if (Array.isArray(data)) {
            let filteredProducts = data;
            
            if (cat) {
              filteredProducts = data.filter(product => product.category === cat);
            }
        
            setFilteredData(filteredProducts);
            setTotalItemsCount(filteredProducts.length);
          } else {
            setFilteredData([]);
            setTotalItemsCount(0);
            console.error("Expected an array, but got:", data);
          }
        } catch (error) {
          console.error("Failed to fetch products:", error);
        } finally {
          setLoading(false);
        }
        
      } else if (brnd) {
        try {
          setLoading(true);

          const response = await fetch(`/api/brand/${brnd}`);
          const data = await response.json();
          console.log("code: ", response.status);
          if (Array.isArray(data)) {
            console.log("enterz 0");
            if (response.status === 404) {
              console.log("enterz 1");

              // If no data is returned, display an empty message
              setFilteredData([]);
              setTotalItemsCount(0);
            } else {
              console.log("enterz 2");
              setFilteredData(data);
              setTotalItemsCount(data.length); // Set the total number of items for the category
            }
          } else {
            setFilteredData([]);
            setTotalItemsCount(0);
            console.error("Expected an array, but got:", data);
          }
        } catch (error) {
          console.error("Failed to fetch category data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setFilteredData(allTemp); // If no `cat`, fallback to `allTemp`
        setTotalItemsCount(allTemp.length); // Set the total number of items
      }
    };
    fetchCategoryData();
  }, [cat, allTemp]);

  // Fetch Product Categories
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/category1/products");
        const data = await response.json();
        setProd(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Fetch Parts Categories
  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await fetch("/api/category1/parts");
        const data = await response.json();
        setParts(data);
      } catch (error) {
        console.error("Failed to fetch parts:", error);
      }
    };
    fetchParts();
  }, []);

  // Fetch brands 
  useEffect(() => {
    const fetchB = async () => {
      try {
        const response = await fetch("/api/brand");
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
    };
    fetchB();
  }, []);

  // Handle Search Functionality
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = searchQuery.toLowerCase().trim();
      const filtered = allTemp.filter(item =>
        item.title.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
      );
      setFilteredData(query ? filtered : allTemp);
      setTotalItemsCount(query ? filtered.length : allTemp.length);
    }
  };

  // Handle Category Expansion
  const handleCategoryClick = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Handle Show More Button Click
  const handleShowMore = () => {
    setVisibleItemsCount((prevCount) => {
      // Don't allow visibleItemsCount to exceed totalItemsCount
      const newCount = prevCount + 12;
      return newCount > totalItemsCount ? totalItemsCount : newCount;
    });
  };

  const allItemsLoaded = visibleItemsCount >= totalItemsCount; // Check if all items are displayed

  return (
    <>
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
      <header className="p-4 flex justify-center items-center mt-[100px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      <div className="flex flex-wrap md:flex-nowrap mt-4">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-2 md:p-4 bg-gray-100">

          <div>
            <h3
              onClick={() => handleCategoryClick('Brands')}
              className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800"
            >
              Brands
              {expandedCategories['Brands'] ? <AiOutlineUp /> : <AiOutlineDown />}
            </h3>
            {expandedCategories['Brands'] && (
              <ul className="pl-4 mt-2 space-y-1">
                {allBrands.map((item, index) => (
                  <li key={index}>
                    <a href={`?brand=${item.name}`} className="text-gray-600 hover:text-blue-500 transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>


          {/* Products Category */}
          <div>
            <h3
              onClick={() => handleCategoryClick('Products')}
              className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800"
            >
              Products
              {expandedCategories['Products'] ? <AiOutlineUp /> : <AiOutlineDown />}
            </h3>
            {expandedCategories['Products'] && (
              <ul className="pl-4 mt-2 space-y-1">
                {allProd.map((item, index) => (
                  <li key={index}>
                    <a href={`?cat=${item.name}`} className="text-gray-600 hover:text-blue-500 transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Parts Category */}
          <div className="mt-4">
            <h3
              onClick={() => handleCategoryClick('Parts')}
              className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800"
            >
              Parts
              {expandedCategories['Parts'] ? <AiOutlineUp /> : <AiOutlineDown />}
            </h3>
            {expandedCategories['Parts'] && (
              <ul className="pl-4 mt-2 space-y-1">
                {allParts.map((item, index) => (
                  <li key={index}>
                    <a href={`?cat=${item.name}`} className="text-gray-600 hover:text-blue-500 transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-4">
          {loading ? (
            <p>Loading...</p>
          ) : filteredData.length === 0 ? (
            <p>No data available for this category.</p> // Show this message if no data is available
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(filteredData) && filteredData.slice(0, visibleItemsCount).map((item, index) => (
                <a href={`/product?id=${item.id}`} className="text-black hover:text-[#0b5cad] transition">
                  <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
                    {item.img && (
                      <div className="relative">
                        <img
                          src={`/api/proxy?url=${item.img[0]}`}
                          alt={item.title}
                          className="w-full aspect-[1/1] object-cover mb-4 transition-all duration-300"
                        />
                        <img
                          src={`/api/proxy?url=${item.img[1]}`}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                        />
                        <img
                          src="/api/proxy?url=https://ucarecdn.com/4be8ddad-5bbd-4bc5-ba0b-7cae4575a4e5/logo.png"
                          alt="Watermark"
                          className="absolute top-0 right-0 p-4 opacity-50" // Adjust opacity, position, and padding as needed
                        />
                      </div>

                    )}
                    <h2 style={{ textAlign: 'center' }} className="font-semibold text-lg text-[#0b5cad] mt-4">{item.title || `Item ${index + 1}`}</h2>
                    <p style={{ textAlign: 'center' }} className="text-gray-600">{item.category || "No type available."}</p>
                    <p style={{ textAlign: 'center' }} className="text-gray-600">${item.price || "No price available."}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {!allItemsLoaded && (
            <div className="mt-4 text-center">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Show More
              </button>
            </div>
          )}
        </main>
      </div>

    </>
  );
};


const PageWrapper = () => {
  const searchParams = useSearchParams();
  const cat = searchParams.get('cat');
  const brnd = searchParams.get('brand');

  return <Dashboard cat={cat} brnd={brnd} />;
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
