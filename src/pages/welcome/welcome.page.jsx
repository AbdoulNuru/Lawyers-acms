import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div className="home page">
        <div
          id="wrap"
          className="wrap fullWidth menuStyle1 menuSmartScrollShow bodyStyleFullWide menuStyleFixed visibleMenuDisplay logoImageStyle logoStyleBG"
        >
          <div id="wrapBox" className="wrapBox">
            <header id="header">
              <div className="menuFixedWrapBlock"></div>
              <div className="menuFixedWrap">
                <a href="index.html#" className="openMobileMenu">
                  {/* <label aria-hidden="true"></label> */}
                </a>
                <a href="index.html#" className="openTopMenu">
                  {" "}
                  {/* <label aria-hidden="true"></label> */}
                </a>
                <div className="usermenuArea">
                  <ul className="usermenuList">
                    <li className="usermenuLogin">
                      <Link to="/login">Login</Link>
                    </li>
                    <li className="usermenuLogin">
                      <Link to="/register">Sign Up</Link>
                    </li>
                  </ul>
                </div>
                <div className="wrapTopMenu">
                  <div className="topMenu main">
                    <ul id="mainmenu" className="">
                      <li className="current-menu-ancestor menu-item-has-children">
                        <a href="index.html#">Home</a>
                      </li>
                      <li className="">
                        <a href="about-us.html">About us</a>
                      </li>

                      <li className="">
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="logoHeader">
                <a href="index.html">
                  <img src="img/my-logo.jpeg" alt="" />
                </a>
              </div>
              <h1 className="subTitle">Agro Link</h1>
            </header>

            <div className="wrapContent">
              <div id="wrapWide" className="wrapWide">
                <div className="content">
                  <section className="singlePage emptyPostFormatIcon emptyPostTitle emptyPostInfo page">
                    <article className="postContent">
                      <div className="postTextArea">
                        <section className="">
                          <div className="container-fluid">
                            <div className="sc_blogger sc_blogger_horizontal style_portfolio_big portfolioWrap sc_blogger_indent">
                              <div className="masonryWrap">
                                <section
                                  className="masonryStyle isotopeWrap portfolio_big"
                                  data-foliosize="600"
                                >
                                  <article
                                    className="isotopeItem post_format_standard isw_1 odd"
                                    data-postid="3629"
                                    data-wdh="620"
                                    data-hgt="620"
                                    data-incw="1"
                                    data-inch="1"
                                  >
                                    <div
                                      data-url="ajax/block1.html"
                                      className="isotopeItemWrap"
                                    >
                                      <div className="thumb">
                                        <img
                                          src="img/vegatable.jpg"
                                          alt="Gluten-Free Baked Goods"
                                        />
                                      </div>
                                    </div>
                                  </article>
                                  <article
                                    className="isotopeItem post_format_standard isw_1 even"
                                    data-postid="3627"
                                    data-wdh="620"
                                    data-hgt="620"
                                    data-incw="1"
                                    data-inch="1"
                                  >
                                    <div
                                      data-url="ajax/block2.html"
                                      className="isotopeItemWrap"
                                    >
                                      <div className="thumb">
                                        <img
                                          src="img/cow.jpg"
                                          alt="Healthy Food Guide"
                                        />
                                      </div>
                                    </div>
                                  </article>
                                  <article
                                    className="isotopeItem post_format_standard isw_1 odd last"
                                    data-postid="3625"
                                    data-wdh="620"
                                    data-hgt="620"
                                    data-incw="1"
                                    data-inch="1"
                                  >
                                    <div
                                      data-url="ajax/block3.html"
                                      className="isotopeItemWrap"
                                    >
                                      <div className="thumb">
                                        <img
                                          src="img/corns.jpg"
                                          alt="Organic &#038; Natural"
                                        />
                                      </div>
                                    </div>
                                  </article>
                                </section>
                              </div>
                            </div>
                          </div>
                        </section>

                        <div className="sc_content mainWrap">
                          <section className="section_padding_top_80 section_padding_bottom_50 with_border_bottom">
                            <div className="container">
                              <h3 className="sc_title sc_title_center sc_title_style_1 margin_bottom_50">
                                Welcome to Agro Link!
                              </h3>
                              <div className=" sc_columns  sc_columns_3 sc_columns_indent">
                                <div className="sc_columns_item  sc_columns_item_coun_1 odd first">
                                  <div className="sc_image sc_image_style_1 margin_bottom_40">
                                    <img
                                      src="img/Vector-Smart-Object2-300x174.png"
                                      alt=""
                                    />
                                  </div>
                                  <h6
                                    className="sc_title sc_title_style_2 sc_title_center"
                                    style={{ color: "#80b500" }}
                                  >
                                    Machinery tools
                                  </h6>
                                  <div className="sc_text sc_text_style_1">
                                    <p>
                                      “We aim to help farmers get necessary
                                      machinery like tractors, harvesting
                                      machines and irigation systems in order to
                                      grow their activities.“
                                    </p>
                                  </div>
                                </div>
                                <div className=" sc_columns_item  sc_columns_item_coun_2 even">
                                  <div className="sc_image sc_image_style_1 margin_bottom_40">
                                    <img
                                      src="img/Vector-Smart-Object1-300x174.png"
                                      alt=""
                                    />
                                  </div>
                                  <h6
                                    className="sc_title sc_title_style_2 sc_title_center"
                                    style={{ color: "#80b500" }}
                                  >
                                    Facilities
                                  </h6>
                                  <div className="sc_text sc_text_style_1">
                                    <p>
                                      “We aim to help farmers have enough
                                      facilities to store their harvest before
                                      it gets to the market, store their manure
                                      and their day to day equipments“
                                    </p>
                                  </div>
                                </div>
                                <div className=" sc_columns_item  sc_columns_item_coun_3 odd">
                                  <div className="sc_image sc_image_style_1 margin_bottom_40">
                                    <img
                                      src="img/Vector-Smart-Object3-300x174.png"
                                      alt=""
                                    />
                                  </div>
                                  <h6
                                    className="sc_title sc_title_style_2 sc_title_center"
                                    style={{ color: "#80b500" }}
                                  >
                                    Seeds
                                  </h6>
                                  <div className="sc_text sc_text_style_1">
                                    <p>
                                      “We aim to ease the process of acquiring
                                      quality seeds for farmers“
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section className="">
                            <div className="container-fluid">
                              <div className="sc_slider sc_slider_style_1 sc_slider_swiper sc_slider_controls swiper-container">
                                <ul
                                  className="slides swiper-wrapper"
                                  data-settings="none"
                                >
                                  <li
                                    className="swiper-slide slider_image_1"
                                    data-theme="dark"
                                  ></li>
                                  <li
                                    className="swiper-slide slider_image_2"
                                    data-theme="dark"
                                  ></li>
                                  <li
                                    className="swiper-slide slider_image_3"
                                    data-theme="dark"
                                  ></li>
                                </ul>
                                <ul className="slider-control-nav">
                                  <li className="slide-prev">
                                    <a
                                      className="icon-left-open-big"
                                      href="index.html#"
                                    >
                                      {/* <label aria-hidden="true"></label> */}
                                    </a>
                                  </li>
                                  <li className="slide-next">
                                    <a
                                      className="icon-right-open-big"
                                      href="index.html#"
                                    >
                                      {/* <label aria-hidden="true"></label> */}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </section>

                          <section className="section_padding_top_80">
                            <div className="container">
                              <h3 className="sc_title sc_title_center sc_title_style_1 margin_bottom_50">
                                Our partners
                              </h3>
                            </div>
                          </section>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>

            <footer className="footerWidget">
              <div className="custom_footer">
                <div className="text">Talk to us</div>
                <section className="" style={{ marginLeft: "-20%" }}>
                  <div className="container">
                    <div className="sc_content mainWrap">
                      <div className="sc_section sc_section_style_2 sc_align_center sc_columns_2_3">
                        <div className="sc_columns  sc_columns_3 sc_columns_indent">
                          <div className="sc_columns_item  sc_columns_item_coun_1 odd first">
                            <h5 className="sc_title sc_title_style_3 margin_top_50 margin_bottom_20">
                              Contact Info
                            </h5>
                            <div className="sc_contact_info">
                              <div className="sc_contact_info_wrap">
                                <div className="sc_contact_info_item sc_contact_address_1">
                                  <div className="sc_contact_info_lable">
                                    Address:
                                  </div>
                                  Kigali, Rwanda
                                </div>
                                <div className="sc_contact_info_item sc_contact_phone_1">
                                  <div className="sc_contact_info_lable">
                                    Phone:
                                  </div>
                                  +250 788 470 370
                                </div>
                                <div className="sc_contact_info_item sc_contact_website">
                                  <div className="sc_contact_info_lable">
                                    Website:
                                  </div>
                                  www.agro-link.com
                                </div>
                                <div className="sc_contact_info_item sc_contact_email">
                                  <div className="sc_contact_info_lable">
                                    Email:
                                  </div>
                                  abdoulniyigena@gmail.com
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" sc_columns_item  sc_columns_item_coun_2 colspan_2 even">
                            <h5 className="sc_title sc_title_style_3 margin_top_50 margin_bottom_20">
                              {/* <label aria-hidden="true"></label> */}
                            </h5>
                            <div className="sc_form contact_form_1">
                              <form
                                className="contact_1"
                                method="post"
                                action="include/contact-form.php"
                              >
                                <div className="sc_columns_3 sc_columns_indent">
                                  <div className="sc_columns_item sc_form_username">
                                    <label
                                      className="required"
                                      for="contact_form_username"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      name="name"
                                      id="contact_form_username"
                                    />
                                  </div>
                                  <div className="sc_columns_item sc_form_email">
                                    <label
                                      className="required"
                                      for="contact_form_email"
                                    >
                                      E-mail
                                    </label>
                                    <input
                                      type="text"
                                      name="email"
                                      id="contact_form_email"
                                    />
                                  </div>
                                  <div className="sc_columns_item sc_form_subj">
                                    <label
                                      className="required"
                                      for="contact_form_subj"
                                    >
                                      Subject
                                    </label>
                                    <input
                                      type="text"
                                      name="subject"
                                      id="contact_form_subj"
                                    />
                                  </div>
                                </div>
                                <div className="sc_form_message">
                                  <label
                                    className="required"
                                    for="contact_form_message"
                                  >
                                    Your Message
                                  </label>
                                  <textarea
                                    id="contact_form_message"
                                    className="textAreaSize"
                                    name="message"
                                  ></textarea>
                                </div>
                                <div className="sc_form_button">
                                  <div className="sc_button sc_button_style_3 sc_button_skin_dark sc_button_style_bg sc_button_size_medium">
                                    <button
                                      type="submit"
                                      name="contact_submit"
                                      className="contact_form_submit"
                                    >
                                      submit
                                    </button>
                                  </div>
                                </div>

                                <div className="result sc_infobox"></div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="copyright">
                <a style={{ color: "#80b500" }} href="/">
                  Abdoul Nuru
                </a>
                &copy; <script>document.write(new Date().getFullYear())</script>
                All Rights Reserved.Terms of Use and Privacy Policy.
              </div>
            </footer>
          </div>
        </div>
      </div>

      <div className="buttonScrollUp upToScroll icon-up-open-micro"></div>
    </>
  );
};

export default WelcomePage;
