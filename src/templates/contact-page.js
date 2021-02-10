import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Gmap from '../components/Gmap'



export const ContactPageTemplate = ({title, ulica, miasto, kod_pocztowy, telefon1, telefon2, mail, day_start, day_end, hour_start, hour_end}) =>  { 

    return (
        <section className="section">
          <div className="container">
            <div className="content">
                <h1>{title}</h1>
            </div>
            <div className="content">
                <div className="box">
                    <h2>Umów darmową wycenę  lub dowiedź się więcej</h2>
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
                    <h2>Godziny otwarcia</h2>
                    <div className="content">
                        <p>{day_start} - {day_end}</p>
                        <p>{hour_start} - {hour_end}</p>
                    </div>
                </div>
                

            </div>
            <div className="content">
                <Gmap />
            </div>
          </div>
        </section>
    )
  }

  const ContactPage = ({ data }) => {
    const { markdownRemark: post } = data
  
    return (
      <Layout>
        <ContactPageTemplate
          title={post.frontmatter.title}
          telefon1={post.frontmatter.contact.telefon1}
          telefon2={post.frontmatter.contact.telefon2}
          ulica={post.frontmatter.address.ulica}
          miasto={post.frontmatter.address.miasto}
          kod_pocztowy={post.frontmatter.address.kod_pocztowy}
          mail={post.frontmatter.contact.mail}
          day_start={post.frontmatter.open_hours.day_start}
          day_end={post.frontmatter.open_hours.day_end}
          hour_start={post.frontmatter.open_hours.hour_start}
          hour_end={post.frontmatter.open_hours.hour_end}
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
        title
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
            day_start
            day_end
            hour_start
            hour_end
        }
      }
    }
  }
`