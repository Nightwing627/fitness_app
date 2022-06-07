import React from 'react';
import axios from "axios";

import { Navbar, Header, Section, ServiceCards, Doctors, ClientsCard, Input } from "../components";
import Button from "../components/Button";

import './Home.scss'
// Starts import images section 
import QualityDoctor from "../assets/images/Qualitydoctor.svg";
import checked from "../assets/images/ant-design.svg";
import ArrowRight from "../assets/images/arrow-right.svg";
import Mockup from "../assets/images/Mockup.png";
import GoogleStore from "../assets/images/Store=Google Play.svg";
import AppStore from "../assets/images/Store=App.svg";
import youngWomen from '../assets/images/Ywomen.png';
import healthLogo from '../assets/images/healthcarelogo.svg';
import facebook from '../assets/images/Facebook (1).svg';
import instagram from '../assets/images/Instagram.svg';
import twitter from '../assets/images/Twitter.svg';
import youtube from '../assets/images/Youtube.svg';


const categoryList = ["Home", "About", "Services", "Reviews", "Article"];
const aboutList = ["Partners", "Careers", "Press", "Community"];

function Home(props) {
    const [cards, setCards] = React.useState([]);
    const [serviceItems, setserviceItems] = React.useState([]);
    const [doctorsCard, setDoctorsCard] = React.useState([]);
    const [clientsPoint, setClientsPoint] = React.useState([]);

    React.useEffect(() => {

        axios.get(
            "https://61273bc8c2e8920017bc0b95.mockapi.io/cartItems"
        ).then(({ data }) => {
            setCards(data)
        });

        axios.get(
            "https://61273bc8c2e8920017bc0b95.mockapi.io/serviceCards"
        ).then(({ data }) => {
            setserviceItems(data)
        });

        axios.get(
            "https://61273bc8c2e8920017bc0b95.mockapi.io/doctors"
        ).then(({ data }) => {
            setDoctorsCard(data)
        });

        axios.get(
            "https://61273bc8c2e8920017bc0b95.mockapi.io/clients"
        ).then(({ data }) => {
            setClientsPoint(data)
        });

    }, []);

    return (
        <>
            <div className="header">
                <Navbar />
                <Header />
            </div>
            <div className="main">
                <div className="container">
                    <div className="main__steps">
                        <div className="main__steps-title">
                            3 Easy Steps and Get Your Solution
                        </div>
                        <div className="main__steps-items">
                            {
                                cards.map((obj) =>

                                    <Section key={obj.id} {...obj} />

                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="main__doctors">
                    <img src={QualityDoctor} alt="QualityDoctor" />
                    <div className="main__doctors-content">
                        <div className="main__doctors-title">
                            Best quality service with our experience
                            doctors
                        </div>
                        <div className="main__content-about">With our top doctors, we are able to provide best medical services above average We have highly experienced doctors, so don't worry They are also very talented in their fields</div>
                        <ul className="main__content-benefits">
                            <li><img src={checked} alt="checked" />Search your specialist - Online consultations anywhere</li>
                            <li><img src={checked} alt="checked" />Consultation our top specialists</li>
                            <li><img src={checked} alt="checked" />Doctors are available 24/7</li>
                        </ul>
                        <Button primary text="Explore specialists" image={ArrowRight} alt="ArrowIcon" />
                    </div>
                </div>
                <div className="our__service">
                    <div className="our__service-title">Our Service</div>
                    <div className="our__service-about">Our doctors have high qualified skills and are guaranteed to help you recover from your disease.</div>
                    <div className="service__cards">

                        {
                            serviceItems.map((obj) => (
                                <ServiceCards key={obj.id} {...obj} />
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="doctors">
                <div className="doctors__title">Meet Our Certified Online Doctors</div>
                <div className="doctors__about">Our online doctors have an average of 15 years experience and a 98% satisfaction rating, they really set us apart!</div>
                <div className="doctors__items">
                    {
                        doctorsCard.map((obj) => (
                            <Doctors key={obj.id} {...obj} />
                        ))
                    }
                </div>
                <div className="doctors__btn">
                    <Button primary text="Explore All Doctors" alert="button explore doctors" />
                </div>
            </div>
            <div className="mobileApp">
                <img src={Mockup} alt="MockupImage" />
                <div className="mobileApp__content">
                    <h2>Mobile apps are available
                        Get HealthCare for free!
                    </h2>
                    <p>Get on-demand access to a doctor on your phone with the free HealthCare mobile app. Download and register on our app for free and feel safe for all your family</p>
                    <div className="mobileApp__content-icons">
                        <a href="#e"><img src={GoogleStore} alt="GoogleStore" />
                        </a>
                        <a href="#e"> <img src={AppStore} alt="AppStore" /></a>
                    </div>
                </div>
            </div>
            <div className="clients">
                <div className="container">
                    <div className="clients__title">Look our Clients have to say about us</div>
                    <div className="clients__items">
                        {
                            clientsPoint.map((obj) => (
                                <ClientsCard key={obj.id} {...obj} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="appointment">
                <div className="container">
                    <div className="appointment__bg">
                        <div className="appointment__title">
                            <h2>It’s time change your
                                life today</h2>
                            <Button text="Book an Appoinment " />
                        </div>
                        <img src={youngWomen} alt="youngWomen" />
                    </div>
                </div>
            </div>
            <footer>
                <div className="footerTop">
                    <div className="footerTop__address">
                        <img src={healthLogo} alt="healthLogo" />
                        <div className="footerTop__address-street">
                        Metairie, 3689  Bassel Street, LA, Louisiana
                        </div>
                        <div className="footerTop__address-contact">
                        Contact us: 225-788-5489
                        </div>
                        <div className="footerTop__address-icons">
                            <a href="#ee"><img src={facebook} alt="facebook" /></a>
                            <a href="#ee"><img src={instagram} alt="instagram" /></a>
                            <a href="#ee"><img src={twitter} alt="twitter" /></a>
                            <a href="#ee"><img src={youtube} alt="youtube" /></a>
                        </div>
                    </div>
                    <div className="footerTop__sections">
                        <ul className="footerTop__sections-category">
                            <li><a href="##"><h3>Category</h3></a></li>

                            {
                                categoryList.map((obj) => (
                                    <li><a href="##">{obj}</a></li>
                                ))
                            }
                        </ul>
                        <ul className="footerTop__sections-category">
                            <li><a href="##"><h3>About</h3></a></li>
                            {
                                aboutList.map((obj) => (
                                    <li><a href="##">{obj}</a></li>
                                ))
                            }
                        </ul>
                        <div className="footerTop__signup">
                            <h3>Subscribe newsletter</h3>
                            <p>Sign up for tips, new destinations, and exclusive promos.</p>
                            <Input border placeholder="Enter your email" />
                            <Button primary text="Subcribe" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footerBottom">
                    <h3>© 2021 Healthcare - All rights reserved.</h3>
                    <ul>
                        <li><a href="###">Privacy</a></li>
                        <li><a href="###">Security</a></li>
                        <li><a href="###">Terms</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Home;
