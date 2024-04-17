import './category.scss'
import React from 'react'
import { Fragment } from 'react'

export default function Categories() {
    return (
        <Fragment>
            <div className="categories">
                <h1>Top Categories</h1>
                <ul className="categories__cards">
                    <li className="categories__card">
                        <img className="categories__img" src={art} alt="error" />
                        <p className="categories__text">Art & Desing</p>
                    </li>
                    <li className="categories__card">
                        <img className="categories__img" src={art} alt="error" />
                        <p className="categories__text">Art & Desing</p>
                    </li>
                    <li className="categories__card">
                        <img className="categories__img" src={art} alt="error" />
                        <p className="categories__text">Art & Desing</p>
                    </li>
                    <li className="categories__card">
                        <img className="categories__img" src={art} alt="error" />
                        <p className="categories__text">Art & Desing</p>
                    </li>
                    <li className="categories__card">
                        <img className="categories__img" src={art} alt="error" />
                        <p className="categories__text">Art & Desing</p>
                    </li>
                    <li className="categories__card">
                        <img className="categories__img" src={art} alt="error" />
                        <p className="categories__text">Art & Desing</p>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}