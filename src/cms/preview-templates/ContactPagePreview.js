import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

//import { useIntl } from "gatsby-plugin-intl"


const ContactPagePreview = ({ entry, widgetFor }) => {
    //const intl = useIntl()
    const lang = 'pl';
return(
  <ContactPageTemplate
    title={entry.getIn(['data', 'pl', 'title'])}
    subtitle={entry.getIn(['data', 'pl', 'subtitle'])}
    ulica={entry.getIn(['data', 'pl', 'address','ulica'])}
    miasto={entry.getIn(['data', 'pl', 'address','miasto'])}
    kod_pocztowy={entry.getIn(['data', 'pl', 'address','kod_pocztowy'])}
  
  
    telefon1={entry.getIn(['data', 'pl',  'contact', 'telefon1'])}
    telefon2={entry.getIn(['data', 'pl',  'contact', 'telefon2'])}
    mail={entry.getIn(['data', 'pl', 'contact', 'mail'])}
   
    open_title={entry.getIn(['data','pl', 'open_hours', 'title'])}
    day_start={entry.getIn(['data', 'pl', 'open_hours', 'day_start'])}
    day_end={entry.getIn(['data', 'pl', 'open_hours', 'day_end'])}
    hour_start={entry.getIn(['data', 'pl', 'open_hours', 'hour_start'])}
    hour_end={entry.getIn(['data', 'pl', 'open_hours', 'hour_end'])}
  />
)}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContactPagePreview
