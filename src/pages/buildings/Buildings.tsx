import React,{Fragment} from 'react'
import Blazzingly from '../../components/blazzingly/blazzingly'
import Welcoming from '../../components/welcoming/welcoming'
import Contries from '../../components/countries/Contries'
import Ecosystem from '../../components/ecosystem/Ecosystem'
import Modal from '../../components/modal/Modal'
import Deliver from '../../components/deliver/Deliver'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Buildings() {
  return (
    <>
        <section >
                <Navbar/>
        </section>
        <section >
                <Blazzingly/>
        </section>

        <section >
                <Welcoming/>
        </section>

        <section >
                <Contries/>
         </section>
        <section >
                <Ecosystem/>
         </section>
        <section >
                <Modal/>
         </section>
        <section >
                <Deliver/>
         </section>
        <section >
                <Footer/>
         </section>
    </>
  )
}

export default Buildings
