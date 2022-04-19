import React, { useState, useEffect } from "react";

import './Medium.css'

import {
    CardBody,
    CardTitle,
    Row,
    Col
} from "reactstrap";
var moment = require("moment");

const Medium = () => {
    const [mediumData, setMediumData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const RSSurl = 'https://medium.com/@dynamic-network'

    useEffect(() => {
        fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${RSSurl}`
        )
            .then(res => res.json())
            .then(response => {
                setMediumData(response.items);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const newArray = mediumData.slice(0, 10);

    return (
        <div id="blog" className="blogContainer">
            <h3 className="blogHeader">
                Latest Post on Medium
            </h3>
            {isLoading && <p>Fetching data from Medium!</p>}
            <Row>
                {newArray.map(article => (
                    <Col md="4" className="mb-3" key={article.guid}>
                        <div>
                            <div className="Card">
                                <img  src={article.thumbnail} alt="img" />
                                <CardBody>
                                    <CardTitle className="CardTitle">
                                        <a href={article.link}>{article.title}</a>
                                    </CardTitle>
                                    <div className="date" id="date">
                                        Published:{" "}
                                        {moment(article.pubDate).format("dddd, MMMM Do YYYY")}
                                    </div>
                                </CardBody>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Medium;