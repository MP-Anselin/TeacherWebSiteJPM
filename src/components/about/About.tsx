import React from "react";

const About = (props: any) => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src="img/multimedia/profile/judith_pictures.jpg" className="img-responsive" alt="" />{" "}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>Judith Patsi Martinez</h2>
                            <p>{props.data ? props.data.paragraph : "loading..."}</p>
                            <h3>My competencies</h3>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why.map((d:any, i:any) => (
                                                <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why2.map((d:any, i:any) => (
                                                <li key={`${d}-${i}`}> {d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;