import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
// import { FaQuoteRight, FaStarHalf } from 'react-icons/fa'

import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { backskills, FrontSkills, StateMangement } from "../Data/Skill";
import Link from "next/link";
import { myservices } from "../Data/Services";
import { myportfolio } from "../Data/Portfolio";

const Main = () => {
  const [Backend, setBackend] = useState([]);
  const [Frontend, setFrontend] = useState([]);
  const [Statemanage, setStatemanage] = useState([]);
  const [services, setServices] = useState([]);
  const [Projects, setProjects] = useState([]);
  const [Eventtrigger, setEventtrigger] = useState(false);

  //set data from the files
  useEffect(() => {
    setBackend(backskills);
    setFrontend(FrontSkills);

    setStatemanage(StateMangement);
    setServices(myservices);
    setProjects(myportfolio);
  }, []);

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("scroll", handleKeyDown);
    };
  }, []);

  //header shadow on scroll
  const scrollheadershadow = () => {
    if (window.scrollY >= 460) {
      scrollupelement.classList.add("showscroll");
    } else {
      scrollupelement.classList.remove("showscroll");
    }
  };

  //header shadow on scroll + scroll top
  const handleKeyDown = (e) => {
    const scrollupelement = document.getElementById("scrolltop-icon");
    const scrollupshadow = document.getElementById("mobile-nav");

    if (window.scrollY >= 460) {
      scrollupelement.classList.add("showscroll");
      scrollupshadow.classList.add("mobile-header-shadow");
    } else {
      scrollupelement.classList.remove("showscroll");
      scrollupshadow.classList.remove("mobile-header-shadow");
    }
  };

  const toggleskill = (e) => {
    const mytarget = e.target.parentNode.parentNode.closest(".skill-content");
    mytarget.classList.toggle("skill_close");
    mytarget.children[0].children[2].classList.toggle("rotate-90");
  };

  const handleDocClick = (e) => {
    console.log("Event clicked");
    if (e.target.classList.contains("service-model-toclose")) {
      // hideservicemodal()
      setEventtrigger(false);
      for (let i = 0; i <= 2; i++) {
        const mytarget1 = document.getElementsByClassName("service-modal")[i];
        mytarget1 && mytarget1.classList.remove("modal-visible");
      }
    }
  };

  useEffect(() => {
    const docbody = document.getElementsByTagName("body")[0];
    if (Eventtrigger === true) {
      docbody.addEventListener("click", handleDocClick);
    } else if (Eventtrigger === false) {
      docbody.removeEventListener("click", handleDocClick);
    }
    return () => {
      docbody.removeEventListener("click", handleDocClick);
    };
  }, [Eventtrigger]);

  const toggleservicemodal = (e) => {
    setEventtrigger(true);
    // const mytarget1 = e.target.parentNode.parentNode.querySelector('.relative')
    const mytarget1 = e.target
      .closest(".service-content")
      .querySelector(".service-modal");
    mytarget1.classList.add("modal-visible");
  };

  const hideservicemodal = (e) => {
    setEventtrigger(false);
    // let mytarget1 = e.target.closest('.service-content').querySelector('.service-modal')
    // mytarget1.classList.remove('modal-visible')
    // console.log(mytarget1.classList);

    // for (let i = 0; i <= 2; i++) {
    //   let mytarget1 = document.getElementsByClassName('service-model-toclose')[i]
    //   console.log(mytarget1.classList);

    //   mytarget1 && mytarget1.classList.remove('modal-visible')
    //   console.log(mytarget1.classList);

    // }
  };

  const ProjectActive = (e) => {
    // console.log(e.target);
    let allSiblings = [...e.target.parentElement.children].filter(
      (child) => child !== e.target
    );
    // console.log(allSiblings);
    e.target.classList.add("Project-active");
    allSiblings.forEach((sibling) => {
      sibling.classList.remove("Project-active");
    });

    let value = e.target.attributes[0].value;

    if (value == "all") {
      $(".project-box").show("1000");
      // const value2 = document.querySelectorAll('.project-box')
      // value2.style.display = 'block';
    } else {
      $(".project-box")
        .not("." + value)
        .hide("1000");
      $(".project-box")
        .filter("." + value)
        .show("1000");
    }
  };

  const copyphone = (e) => {
    const phone = e.target.innerHTML.replace("-", "");
    navigator.clipboard.writeText(phone);
  };

  return (
    <>
      {/* MAIN HERO */}
      <main className="main w-full" id="Home">
        <section className="home section w-full" id="home">
          <div className="home_container container grid mx-auto px-sm-padding md:px-lg-padding xl:px-xl-padding">
            <div
              className="home_content grid w-full md:mt-20  md:grid-cols-[.5fr_3fr_2fr] lg:grid-cols-[0.5fr_5fr_4fr] 
              xl:grid-cols-[0.8fr_4fr_3fr]
            pt-5 items-center "
            >
              {/* social links */}
              <div className="home_social text-[1.35rem] md:order-1 md:self-start lg:self-center">
                <a
                  href="https://www.linkedin.com/in/sufian-masood-b68630224/"
                  target="_blank"
                  rel="noreferrer"
                  className="home_social-icon"
                >
                  <i className="uil uil-linkedin-alt"></i>
                </a>

                {/* <a
                  href="https://github.com/SufiandevV"
                  target="_blank"
                  rel="noreferrer"
                  className="home_social-icon"
                >
                  <i className="uil uil-github-alt"></i>
                </a> */}
                <a
                  href="https://www.facebook.com/SUfianMAs00d"
                  target="_blank"
                  rel="noreferrer"
                  className="home_social-icon"
                >
                  <i className="uil uil-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/sufianmasood/"
                  target="_blank"
                  rel="noreferrer"
                  className="home_social-icon"
                >
                  <i className="uil uil-instagram"></i>
                </a>
              </div>
              {/* home image */}
              <div className="home_img xs:mx-auto md:order-3 ">
                <svg
                  viewBox="0 0 200 187"
                  className="w-[200px] xs:w-[300px] md:w-[300px] lg:w-[400px] xl:w-[400px]  fill-first-color"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                          130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                          97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                          0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                          165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                          129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                          -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <image
                      className="w-full h-full object-cover rounded-3xl shadow-xl mx-auto"
                      x={0}
                      y={-1}
                      preserveAspectRatio="xMidYMid slice"
                      href="/myprofile.jpg"
                    />
                  </g>
                </svg>
              </div>
              {/* front description */}
              <div className="Home_Details col-span-2 md:col-span-1 md:order-2 ">
                <h1 className="text-[2.2rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-[#000036] ">
                  Hi, I&apos;m Sufian Masood{" "}
                </h1>
                <h3 className="text-h3-font-size font-medium text-text-color mb-5">
                  Certified UX Designer <br />
                  Created 100+ Soluitons as an UI Designer{" "}
                </h3>
                <div className="mb-2">
                  {/* 6+ Months experience in MERN Stack / Next js development. Designing and developing functional components, user interfaces, APIs, Optimizing, Securing and testing web functionality and efficiencies.  */}
                  <p>
                    My expertise revolves around crafting visually stunning and
                    intuitive user interfaces that elevate the overall user
                    experience. I empathize with the struggles faced by
                    businesses and individuals striving for digital excellence.
                    My designs not only exude visual appeal but also prioritize
                    seamless navigation, ensuring sustained user engagement and
                    effective conversions.
                  </p>
                </div>
                <a className="button mt-10" href="#Contact">
                  Contact Me <i className="uil uil-message"></i>
                </a>
              </div>
            </div>
            {/* scroll down button */}
            <div className="hover:translate-y-[2px] ml-16 xl:ml-36 md:block duration-200 w-fit hidden mt-12 ">
              <a
                href="#About"
                className="text-text-color hover:text-first-color-alt "
              >
                <i className="uil uil-mouse-alt text-[2rem]"></i>
                <span className="text-title-color font-medium mr-1 text-small-font-size ml-1">
                  Scroll Down{" "}
                </span>
                <i className="uil uil-arrow-down text-[1.25rem]"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ABOUT ME */}
      <section id="About" className="pt-[4rem]">
        <div className="px-sm-padding md:px-lg-padding xl:px-xl-padding ">
          <h1 className="text-big-font-size text-center">About Me</h1>
          <p className="section_subtitle">My Introduction</p>

          <div className="grid container mt-[67px] mx-auto justify-center md:grid-cols-[1.3fr_2fr] md:mx-auto">
            <div>
              <img
                className="rounded-3xl shadow-xl mx-auto object-cover
                 w-[270px] h-[250px] 
                 lg:w-[280px] h-[300px] "
                src="/myprofile.jpg "
                alt="About image"
              />
            </div>

            <div>
              <p className="text-center md:text-left mt-3">
                Hands-on experience as a UI/UX designer, collaborating with
                various freelance organizations, startups, and web development
                agencies. Engaged in diverse web application projects,
                cultivating operational, technical, creative, logic building,
                and problem-solving skills.
              </p>

              <div className="about_info flex justify-evenly mt-8">
                <div>
                  <h2 className="!font-extrabold text-h1-font-size text-center">
                    03+
                  </h2>
                  <p className="text-center">
                    Years <br /> Experience
                  </p>
                </div>
                <div>
                  <h2 className="!font-extrabold text-h1-font-size text-center">
                    50+
                  </h2>
                  <p className="text-center">
                    Collaborated
                    <br /> Projects
                  </p>
                </div>
                <div>
                  <h2 className="!font-extrabold text-h1-font-size text-center">
                    100+
                  </h2>
                  <p className="text-center">
                    Satisfied
                    <br /> Employers
                  </p>
                </div>
              </div>

              <div className="about-button w-fit mx-auto  mt-10">
                <a href="/Sufian_Resume.pdf" className="button button-flex">
                  {" "}
                  Download CV
                  <i className="uil uil-download-alt ml-2 text-h2-font-size"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="Experience" className="pt-[4rem] mt-10">
        <div className="px-sm-padding md:px-lg-padding xl:px-xl-padding ">
          <h1 className="text-big-font-size text-center">My Experience</h1>
          <p className="section_subtitle">Industry Experience</p>

          <div className="blocks flex w-full justify-center flex-col gap-6">
            <div className="row1 w-full flex gap-6 flex-col md:flex-row">
              <div
                className="service-content-exp text-white w-full md:w-1/2 rounded-lg h-56 p-8 flex flex-col gap-2"
                style={{ backgroundColor: "#008bc2" }}
              >
                {" "}
                <p className="text-xs">October 2023 - present</p>
                <h3 className="text-white text-xl">Ui Designer</h3>
                <p className="text-sm">
                  Elevating digital experiences through the artful fusion of
                  intuitive User Interface (UI) and seamless User Experience
                  (UX) design. Crafting visually appealing interfaces that
                  prioritize user satisfaction, ease of navigation, and optimal
                  interaction.
                </p>
                <a
                  href="https://knowledge.tech/"
                  className="mt-1 cursor-pointer"
                >
                  @ Knowledge Streams
                </a>
              </div>

              <div className="service-content-exp bg-white w-full md:w-1/2 rounded-lg h-56 p-8 flex flex-col gap-2">
                <p className="text-xs">March 2022 - September 2022</p>
                <h3 className="text-xl">Ui-Ux Designer</h3>
                <p className="text-sm">
                  Joined OLEARN Startup as a Designer. Creating Pixel-perfect
                  designs. Focused on enhancing user satisfaction, ease of
                  interaction, and delivering memorable digital experiences
                  through thoughtful design principles.
                </p>
                <a
                  href="https://web.uettaxila.edu.pk/NEPNICsUETTaxila"
                  className="mt-1 cursor-pointer"
                >
                  @ NEPNIC UET Taxila
                </a>
              </div>
            </div>

            {/* if more experience is tobe added uncomment the following  */}

            <div className="row2 flex w-full gap-6 flex-col md:flex-row">
              <div className="service-content-exp bg-white w-full md:w-1/2 rounded-lg h-56 p-8 flex flex-col gap-2">
                <p className="text-xs">March 2022 - Present</p>
                <h3 className="text-xl">Freelance Designer</h3>
                <p className="text-sm">
                  {" "}
                  As a freelance UI/UX designer specialize in creating
                  captivating and user-centric digital experiences.Through my
                  freelance practice, I bring a personalized touch to each
                  project, ensuring a unique and visually engaging outcome.
                </p>
                <a
                  href="https://web.uettaxila.edu.pk/NEPNICsUETTaxila"
                  className="mt-1 cursor-pointer"
                >
                  @ Fiverr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="Portfolio"
        className="px-sm-padding md:px-lg-padding xl:px-xl-padding pt-16"
      >
        <div>
          <h1 className="section_title">My Portfolio</h1>
          <p className="section_subtitle">Take a look at my Previous work</p>
        </div>

        <ul className="project-filter flex flex-wrap justify-center items-center border-1 m-10">
          <li
            data-filter="all"
            onClick={ProjectActive}
            className="list Project-active rounded-lg duration-200"
          >
            ALL
          </li>
        </ul>

        <div className="project-container flex flex-wrap gap-y-5 gap-x-5 min-h-[300px] ml-[65px]">
          {Projects?.map((p) => {
            return (
              <div
                key={p.Name}
                className="rounded-md overflow-hidden portfolio-item"
              >
                <div
                  className={`project-box group relative ${p.Class}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-gray-900 flex flex-col bottom-0 text-white text-center pt-2 z-10 duration-200 h-10 group-hover:h-40 overflow-hidden absolute w-full">
                    <p className="text-lg">{p.Name}</p>
                    <p className="text-left pl-3 text-xs mt-3">
                      {p.Description}
                    </p>
                    <a
                      href={p.Url}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-demo-button border border-1 w-[120px] whitespace-nowrap demo-button"
                    >
                      <i className="uil uil-arrow-right  opacity-0 "></i>
                      View Demo
                    </a>
                  </div>
                  <img
                    className={`group-hover:scale-105 duration-200 w-full h-full max-w-full object-cover-fit`}
                    src={`${p.Image}`}
                    alt={`${p.Name}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT ME */}
      <section
        id="Contact"
        className="container mx-auto pt-10 px-sm-padding md:px-lg-padding xl:px-xl-padding"
      >
        <div className="Contact section ">
          <div className="container">
            <h2 className="text-center section_title">Contact Me</h2>
            <span className="section_subtitle">Get in Touch</span>

            <div className="row flex flex-col md:flex-row justify-between">
              <div className="contact_info_all w-[100%]">
                <div>
                  <div className="contact_info flex mb-[2rem]">
                    <i className="uil uil-phone contact_icon text-4xl text-first-color mr-2"></i>
                    <div>
                      <h3 className="contact_title">Call Me</h3>
                      <p
                        onClick={copyphone}
                        className="contact_subtitle hover:cursor-pointer"
                      >
                        +92-3200501443
                      </p>
                    </div>
                  </div>

                  <div className="contact_info flex mb-[2rem]">
                    <i className="uil uil-envelope-check contact_icon text-4xl text-first-color mr-2"></i>

                    <div>
                      <h3 className="contact_title">Email Me</h3>
                      <a
                        href="mailto:emailsufiann.masood@gmail.com"
                        className="contact_subtitle"
                      >
                        emailsufiann.masood@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact_info flex mb-[2rem]">
                    <i className="uil uil-map-marker contact_icon text-4xl text-first-color mr-2"></i>
                    <div>
                      <h3 className="contact_title">Location</h3>
                      <span className="contact_subtitle">Lahore, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_form w-[100%]">
                <form>
                  <div className="contact_inputs space-y-5">
                    <div className="contact_content">
                      <label className="contact_label">Name</label>
                      <input type="text" className="contact_input" />
                    </div>
                    <div className="contact_content">
                      <label className="contact_label">Email</label>
                      <input type="email" className="contact_input" />
                    </div>
                    <div className="contact_content">
                      <label className="contact_label">Message</label>
                      <textarea
                        name=""
                        id=""
                        cols="0"
                        rows="5"
                        className="contact_input"
                      ></textarea>
                    </div>
                    <div>
                      <a href="#" className="button button--flex shadow">
                        Send Message{" "}
                        <i className="uil uil-message button_icon"></i>{" "}
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer mt-[2.5rem] text-white ">
        <div className="footer_bg bg-first-color-second ">
          <div className="footer_container container grid px-sm-padding md:px-lg-padding xl:px-xl-padding">
            <div>
              <h1 className="text-h1-font-size mb-[0.25rem] text-white">
                {" "}
                Sufian Masood
              </h1>
              <span className="text-normal-font-size ">UI and UX Designer</span>
            </div>

            <ul className="footer_links flex flex-col gap-y-6 my-6 text-h3-font-size">
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>

            <div className="footer_social space-x-5 text-h1-font-size ">
              <a
                href="https://www.facebook.com/SUfianMAs00d"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-facebook-f "></i>
              </a>

              <a
                href="https://www.linkedin.com/in/sufian-masood-b68630224/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-linkedin"></i>
              </a>

              {/* <a
                href="hhttps://github.com/SufiandevV"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-github-alt"></i>
              </a> */}
            </div>

            <div className="text-small-font-size text-center text-text-color-light mt-2">
              <p>Sufian Masood &#169;. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {/* scroll up button */}
      <div
        id="scrolltop-icon"
        className="scrolltop-icon duration-200 fixed right-10 bottom-0  h-10 w-10 bg-first-color flex justify-center items-center text-white opacity-90
      md:-bottom-10 md:right-20
      "
      >
        <a href="#" className="scrollup" id="scroll-up">
          <i className="uil uil-arrow-up scrollup_icon text-h2-font-size "></i>
        </a>
      </div>
    </>
  );
};

export default Main;
