import "./Content.css"

function Content() {
    return (
        <div>
            <div className="Content">
                <div className="Content_left">
                    <h1>Landing page template for developers & startups</h1>
                    <p>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
                    <button id="btn_1">Explore</button>
                    <button id="btn_2">Learn more</button>
                </div>
                <div className="Content_right">
                    <img src="https://landy-web.netlify.app/img/svg/developer.svg" width="100%" />
                </div>
            </div>
            <div className="Content_1">
                <h1>Introduce your product quickly & effectively</h1>
                <p>Landy comes with multi-lingual support, all of the content is stored in the JSON files, so that you can manage the texts without having any prior knowledge in developing web applications using React.js.</p>
                <button>Get started</button>
            </div>
            <div className="Content_2">
                <div className="Content_2_left">
                    <img src="https://landy-web.netlify.app/img/svg/graphs.svg" alt="image" width="100%" />
                </div>
                <div className="Content_2_right">
                    <h1>Light, fast & responsive</h1>
                    <p>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
                    <div id="Content_2_Sub_block">
                        <div>
                            <img src="https://landy-web.netlify.app/img/svg/notes.svg" />
                            <h3>Why Antd?</h3>
                            <p>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</p>
                        </div>
                        <div>
                            <img src="https://landy-web.netlify.app/img/svg/notes.svg" />
                            <h3>Why styled-components?</h3>
                            <p>Styled Components gives you total control over your components.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Content_3">
                <div className="Content_3_left">
                    <h1>Ready made sections</h1>
                    <p>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.</p>
                </div>
                <div className="Content_3_right">
                    <img src="https://landy-web.netlify.app/img/svg/product-launch.svg" alt="image" width="100%" />
                </div>
            </div>
            <div className="Content_4">
                <div className="Content_4_left">
                    <img src="https://landy-web.netlify.app/img/svg/waving.svg" alt="image" width="100%" />
                </div>
                <div className="Content_4_right">
                    <h1>That's about it!</h1>
                    <p>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.</p>
                </div>
            </div>
            <div className="Content_5">
                <div className="Content_5_left">
                    <h1>Contact form</h1>
                    <p>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.</p>
                </div>
                <div className="Content_5_right">
                <lable>Name</lable>
                <input type="text" placeholder="Name here"/>
                <lable>Email</lable>
                <input type="email" placeholder="Email here"/>
                <lable>Message</lable>
                <input type="text" placeholder="Message here" className="message"/>
                <button id="btn">Submit</button>
            </div>
            </div>
        </div>
    )
}

export default Content