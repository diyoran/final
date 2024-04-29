import React from "react";
import { Fragment } from "react";

export default function CoursePage() {
    return (
        <Fragment>
            <div className="page">
                <div className="page__header">

                    <h2 className="page__title">
                        How to become an Expert Web Developer
                    </h2>
                    <p>
                        rating ⭐⭐⭐⭐⭐
                    </p>

                    <div className="page__tutor">
                        <div className="page__tutor--photo">

                        </div>
                        <p className="page__tutor--name">
                            Pak Arif Satria Kecek ulalala
                        </p>
                    </div>

                    <button className="page__btn--add">
                        <p>
                            Add To Wishlist
                        </p>
                        <img src="" alt="error" />
                    </button>

                    <button className="page__btn--share">
                        <p>
                            Share
                        </p>
                        <img src="" alt="error" />
                    </button>


                </div>
            </div>
        </Fragment>
    )
}