import React from "react";
import styled from 'styled-components';

const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 80px 0;
    color: #fff;
`

const Header = styled.h1`
    color: #fff;
    font-weight:800;
    font-size:40px;
    line-height:52px;
`

const Subhead = styled.p`
    font-size: 18px;
    font-weight:500;
`

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    backgound: #fff;
    padding: 10px 20px;
    box-shadow: 0px 0px 0px 3px #473228,
        -6px 6px #ef5f17,
        -6px 6px 0px 3px #473228;
`

const Jumbotron = () => {
    return(
        <Section>
            <div className="home-section--1">
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-5">
                            <div className="pt-4 mt-4">
                                <Header>I-Tea Development</Header>
                                <Subhead>Surprise Motherf*cker</Subhead>
                                <div className="cta-wrapper">
                                    <Button className="btn btn-fancy">Discover More !</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-12 col-md-7">
                            <div className="pt-4 mt-4 text-center">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/jdWvcyKsx1g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Jumbotron