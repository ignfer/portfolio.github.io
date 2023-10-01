function Header(){
    return(
        <>
            <header>
                <section className='header-info-section'>

                    <section className='header-pfp-contact-section'>
                        <section className='header-photo-section'>
                            <img src={'../public/assets/images/dev-profile-picture-bw.png'}></img>
                        </section>

                        <section className='header-contact-section'>
                            contact me 
                        </section>
                    </section>

                    <section className='header-title-section'>
                        <img src={'../public/assets/svgs/IF_LOGO.svg'}></img>
                        <h1>Ignacio<br></br>Fernández</h1>
                    </section>
                    
                </section>

                <section className='header-about-me-section'>
                    <section className='about-me-header'>
                        <h3> About me: </h3>
                    </section>

                    <section className='about-me-content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                             non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor 
                             sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                             aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                             eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    </section>
                </section>

            </header>
        </>
    );
}

export { Header };