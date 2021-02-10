import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  pl: "PL",
  de: "DE",
}

const Language = () => {
  return (
    <div className="navbar-end has-text-centered">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#ff4400` : `black`,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
              className="navbar-item"
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language