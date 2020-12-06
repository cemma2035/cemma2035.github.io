import React from "react";
import "./Home.css";
import Slider from "react-slick";
import developnd1 from '../../images/developnd.png'
import gateguard1 from '../../images/gateguard.png'
import plannerr1 from '../../images/plannerr.png'
import primedstreams1 from '../../images/primedstreams.png'
import ewoma1 from '../../images/ewoma.png'
import logo from '../../images/emma.png'
import nextjslogo from '../../images/nextjs-logo.png'
import emmagif from '../../images/emma-dark.gif'

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true
    };
    
    return (
        <div className="home-full col-12 px-0">
            <div className=" col-12 px-0 row mx-0 hello-full">
                <nav class="navbar bg-dark my-navbar col-12">
                    {/* <a class="navbar-brand" href="#">
                    <img className="logo" src={emmagif} alt=""/>
                </a> */}
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <ul class="navbar-nav ml-auto">
                            <li class="nav-item mx-2 active">
                                <a class="nav-link" href="#hello">Hello</a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#about">About Me</a>
                            </li>
                            {/* <li class="nav-item mx-2">
                                <a class="nav-link" href="#tools">Tools</a>
                            </li> */}
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>

                    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                    </div> */}
                </nav>
                <div className="col-12 col-md-5 hi-message-box">
                    <div className="col-12 col-md-10 mx-auto hi-message-con">
                        <p className="mb-0">Hello, <br /> I'm Emma.</p>
                        <span>#webdeveloper #designer #explorer</span> <br />
                        <h6 className="little-desc my-3">A passionate frontend web developer who enjoys creating beautiful, responsive websites.</h6>
                        <a href="#about">More about me!</a> <br/>
                        <a href="#contact">Looking for a new frontend hire?</a>
                    </div>
                </div>
                <div className="col-12 col-md-7 hello-2">
                    
                </div>
            </div>
            <div id="about" className="col-12 about-section">
                <div className="about-me-box col-12 col-md-9 mx-auto m-5">
                    <div className="col-12 col-md-10 mx-auto">
                        <h1 className="section-title text-center mt-5">About Me...</h1>
                        <p className="sub-section-title">Who am I really?</p>
                        <p>Hello again, I'm Emma, a 25 year old frontend developer based in Port Harcourt, Nigeria. I fell in love with coding all the way back in uni at <a className="link-tag" target="_blank" href="https://www.bsuir.by/ru/">BSUIR</a> and I haven't stopped coding since.
                            I wrote my first lines of code in an 'Intro to HTML' class and a couple hundred hours later, I'm even more eager to take ideas and transfer them to a web page.</p>
                        <p className="sub-section-title">What do I use?</p>
                        <p>Throughout the years, you come across some pretty amazing tools and software that take web development to new heights. Here are a few of the essentials that I can't live without!</p>
                        <div className="col-12 tools-icons mb-4 d-flex">
                            <i class="fab fa-html5 mt-3 fa-4x mr-3"></i>
                            <i class="fab fa-css3-alt mt-3 fa-4x mr-3"></i>
                            <i class="fab fa-js mt-3 fa-4x mr-3"></i>
                            <i class="fab fa-react mt-3 fa-4x mr-3"></i>
                            <i class="fab fa-vuejs mt-3 fa-4x mr-3"></i>
                            <i class="fab fa-bootstrap mt-3 fa-4x mr-3"></i>
                            <i class="fab fa-angular mt-3 fa-4x mr-3"></i>
                            <i class="fab fa-sass mt-3 fa-4x mr-3"></i>
                            <img className="mt-3" src={nextjslogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="portfolio" className="col-12 portfolio-section mb-5">
                <h1 className="section-title text-center mt-5 mb-0">Recent Work!</h1>
                <div className="col-12 portfolio-dots text-center">
                    . <br />
                </div>
                <div className="col-12 col-md-9 mx-auto indiv-portfolio-con row mx-0">
                    <div className="col-12 px-0 mt-5 row mx-0">
                        <div className="col-12 col-md-5 ml-2 indiv-portfolio-image px-0">
                            <img src={developnd1} alt="" />
                        </div>
                        <div className="col-12 col-md-6 pl-4 indiv-portfolio-info">
                            <h5 className="website-name mb-0">DevelopND</h5>
                            <small className="">2020</small>
                            <p className="website-info mt-3">DevelopND is a web app commissioned by <a className="link-tag" target="_blank" href="https://www.nddc.gov.ng/">NDDC</a> through <a className="link-tag" target="_blank" href="https://www.stakeholderdemocracy.org/">SDN</a> to help track
                             and report on the progress of development projects in the Niger Delta region of Nigeria.</p>
                            <span><a className="link-tag" target="_blank" href="https://developnd.ng/">Go to website</a> </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 portfolio-dots mb-2 text-center">
                    . <br />

                </div>
                <div className="col-12 col-md-9 mx-auto indiv-portfolio-con row mx-0">
                    <div className="col-12 px-0 mt-5 row mx-0">
                        <div className="col-12 col-md-5 ml-2 indiv-portfolio-image px-0">
                            <img src={gateguard1} alt="" />
                        </div>
                        <div className="col-12 col-md-6 pl-4 indiv-portfolio-info">
                            <h5 className="website-name mb-0">GateGuard</h5>
                            <small className="">2020</small>
                            <p className="website-info mt-3">GateGuard is a mobile and web solution built by a small team of <a className="link-tag" target="_blank" href="https://hngi7.hng.tech/hng6">HNGi6</a> interns (yours truly included) to improve safety and effectiveness of estates across Nigeria.
                             You can download the mobile app from the Play Store and check out the companion web app in the link below</p>
                            <span><a className="link-tag" target="_blank" href="https://www.gateguard.co/">Go to website</a> </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 portfolio-dots mb-2 text-center">
                    . <br />

                </div>
                <div className="col-12 col-md-9 mx-auto indiv-portfolio-con row mx-0">
                    <div className="col-12 px-0 mt-5 row mx-0">
                        <div className="col-12 col-md-5 ml-2 indiv-portfolio-image px-0">
                            <img src={ewoma1} alt="" />
                        </div>
                        <div className="col-12 col-md-6 pl-4 indiv-portfolio-info">
                            <h5 className="website-name mb-0">Ewoma Bot</h5>
                            <small className="">2020</small>
                            <p className="website-info mt-3">Ewoma is a javascript based bot whose sole purpose in life is to give you updates on COVID-19</p>
                            <span><a className="link-tag" target="_blank" href="http://ewoma.herokuapp.com//">Go to website</a> </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="contact-section col-12 mb-5">

                <h1 className="section-title text-center mb-0">Contact Me :)</h1>
                <div className="col-12 text-center">
                    <p className="">Send me an email and I'll get back to you superfast!</p>
                    <a href="mailto: cemma2035@gmail.com"><button className="btn btn-secondary contact-btn">Email</button></a>
                </div>
                {/* <div className="col-9 mx-auto contact-con border row mx-0">
                    <div className="col px-0 text-center indiv-contact">
                        <i class="fas fa-phone fa-lg my-3 border p-3"></i>
                        <p className="text-center">Send me an email at cemma2035@gmail.com</p>
                    </div>
                    <div className="col px-0">
                        <p className="text-center">call me/whatsapp on +2349057108319</p>
                    </div>
                    <div className="col px-0">
                        <p className="text-center">github: <a className="link-tag" target="_blank" href="https://github.com/cemma2035/"> https://github.com/cemma2035</a> </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Home;
