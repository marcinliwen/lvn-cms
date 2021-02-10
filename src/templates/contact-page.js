import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Gmap from '../components/Gmap'

import { useIntl } from "gatsby-plugin-intl"


export const ContactPageTemplate = ({title, subtitle, ulica, miasto, kod_pocztowy, telefon1, telefon2, mail, open_title, day_start, day_end, hour_start, hour_end}) =>  { 

    return (
        <section className="section">
          <div className="container">
            <div className="content">
                <h1>{title}</h1>
            </div>
            <div className="content">
                <div className="box">
                    <h2>{subtitle}</h2>
                    <ContactForm />
                </div>
            </div>
            <div className="content">
                <div className="box">
                    <h2>Kontakt</h2>
                    <div className="content">
                        <p>{telefon1}</p>
                        <p>{telefon2}</p>
                        <p>{mail}</p>
                        <p>{ulica}</p>
                        <p>{kod_pocztowy} {miasto}</p>
                    </div>
                </div>
                <div className="box">
                    <h2>{open_title}</h2>
                    <div className="content">
                        <p>{day_start} - {day_end}</p>
                        <p>{hour_start} - {hour_end}</p>
                    </div>
                </div>
                

            </div>
            <div className="content">
                <Gmap target={ulica+','+kod_pocztowy+' '+miasto}/>
            </div>
          </div>
        </section>
    )
  }

  const ContactPage = ({ data }) => {
    const { markdownRemark: post } = data
    const intl = useIntl()
    const lang = intl.locale;

    const page_data = post.frontmatter[lang]
    return (
      <Layout>
        <ContactPageTemplate
          title={page_data.title}
          subtitle={page_data.subtitle}
          telefon1={page_data.contact.telefon1}
          telefon2={page_data.contact.telefon2}
          ulica={page_data.address.ulica}
          miasto={page_data.address.miasto}
          kod_pocztowy={page_data.address.kod_pocztowy}
          mail={page_data.contact.mail}
          open_title={page_data.open_hours.title}          
          day_start={page_data.open_hours.day_start}
          day_end={page_data.open_hours.day_end}
          hour_start={page_data.open_hours.hour_start}
          hour_end={page_data.open_hours.hour_end}
        />
      </Layout>
    )
    
  }
  ContactPage.propTypes = {
    data: PropTypes.object.isRequired,
  }
  
  export default ContactPage

  export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pl{
            title
            subtitle
            address{
                ulica
                miasto
                kod_pocztowy
            }
            contact{
                telefon1
                telefon2
                mail
            }
            open_hours{
                title
                day_start
                day_end
                hour_start
                hour_end
            }
        }
        de{
            title
            subtitle
            address{
                ulica
                miasto
                kod_pocztowy
            }
            contact{
                telefon1
                telefon2
                mail
            }
            open_hours{
                title
                day_start
                day_end
                hour_start
                hour_end
            }
        }
        
      }
    }
  }
`