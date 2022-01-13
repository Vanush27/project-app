import React from "react";


const Navigation = () => {

    return (
        <div>
            <section id="navigation">


                <div className="nav-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            </section>
            <section id="nav-content">
                <div className="close-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div className="wrapper">
                    <h2 className="section-heading" data-outline="Menu">Menu</h2>
                    <nav>
                        {/*<ul>*/}
                        {/*    <li><a data-text="Home" href="./index.html#hero">Home</a></li>*/}
                        {/*    <li><a data-text="About" href="./index.html#about">About</a></li>*/}
                        {/*    <li><a data-text="Projects" href="./index.html#projects">Projects</a></li>*/}
                        {/*    <li><a data-text="Testimonials" href="./index.html#testimonial">Testimonials</a></li>*/}
                        {/*    <li><a data-text="Contact" href="./contact.html">Contact</a></li>*/}
                        {/*</ul>*/}
                    </nav>
                </div>
            </section>

        </div>
    );
}
export default Navigation;
