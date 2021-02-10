import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Gmap from '../components/Gmap'



export default function Index({data})  { 
    const { markdownRemark: post } = data

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
                <h1>{post.frontmatter.title}</h1>
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
                        <p>{post.frontmatter.contact.telefon1}</p>
                        <p>kajastudiodecor@gmail.com</p>
                        <p>ul.Obr. Pokoju 21, 66-620 Gubin</p>
                    </div>
                </div>
                <div className="box">
                    <h2>Godziny otwarcia</h2>
                    <div className="content">
                        <p>{post.frontmatter.open_hours.day_start} - {post.frontmatter.open_hours.day_end}</p>
                        <p>{post.frontmatter.open_hours.hour_start} - {post.frontmatter.open_hours.hour_end}</p>
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