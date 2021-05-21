import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const IndexPage = () => (
  <Layout route="/e/kyuriosity">
    <Seo title="Kyuriosity" />

    <div style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}>
      <iframe
        id="typeform-full"
        title="Kyuriosity"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://form.typeform.com/to/afqESRli?typeform-medium=embed-snippet"
        onLoad={() => window.scroll({ top: 0, left: 0 })}
      ></iframe>
    </div>
  </Layout>
)

export default IndexPage