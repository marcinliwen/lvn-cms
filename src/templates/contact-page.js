import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Gmap from '../components/Gmap'



export default function Index()  { 
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
                <h1>Contact</h1>
            </div>
            <div className="content">
                <div className="box">
                    <h2>Umów darmową wycenę  lub dowiedź się więcej</h2>
                    <ContactForm />
                </div>
            </div>
            <div className="content">
                <div className="box">
                    <h2>Adres</h2>
                    <div className="content">
                        <p>+48 664 478 788</p>
                        <p>kajastudiodecor@gmail.com</p>
                        <p>ul.Obr. Pokoju 21, 66-620 Gubin</p>
                    </div>
                </div>
                <div className="box">
                    <h2>Godziny otwarcia</h2>
                    <div className="content">
                        <p>Poniedziałek - Piątek</p>
                        <p>9:00 - 17:00</p>
                    </div>
                </div>
                

            </div>
            <div className="content">
                <Gmap />
            </div>
          </div>
        </section>
      </Layout>
    )
  }

