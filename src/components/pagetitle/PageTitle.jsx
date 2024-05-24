import React from 'react'
import { Helmet } from "react-helmet";

const PageTitle = ({pagetitle,pageicon}) => {
    return (
        <Helmet>
            <title>{pagetitle}</title>
            <link rel="icon" href={pageicon} />
             
        </Helmet>
    )
}

export default PageTitle
