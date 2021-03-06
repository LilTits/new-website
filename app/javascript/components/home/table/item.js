import React, { Component } from 'react';
import Thumbnail from './thumbnails';
import styled from 'styled-components';

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

const Item = (props) => {
    return(
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="card px-5 pt-4 pb-4">
                    <div className="row">
                        <div className="col-md-4">
                            <Thumbnail/>
                        </div>
                        <div className="col-md-8">
                            <h4>{props.title}</h4>
                            <p>{props.description}</p>
                            <div className="cta-wrapper">
                                <Button className="btn cta-btn">Watch this</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;