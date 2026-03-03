import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
                <div className="wpo-section-title">
                    <h2>{props.Title}</h2>
                    <p>Design, development, and digital marketing services including UI/UX design, 
                        web and mobile development, SEO, branding, and social media marketing.</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;