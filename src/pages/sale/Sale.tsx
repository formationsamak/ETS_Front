import React from 'react'
import ContactUs from '../../components/ContactUs/ContactUs'
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
function Sale() {
  return (
    <div>
            <header>
                <Navbar/>
            </header>
           <section >
           <ContactUs/>
            </section>

           <section >
                <Footer/>
            </section>
    </div>
  )
}

export default Sale
