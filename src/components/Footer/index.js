import React from 'react';

function Footer() {
    return (
        <footer className="text-white fixed-bottom">
            <div className="mb-3 row justify-content-between">
                <div>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button"
                        target="_blank"><i className="fab fa-github"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/home" role="button"
                        target="_blank"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="mt-auto mr-2 copyright">
                    © 2021 Copyright: Cole Sammons</div>
            </div>
        </footer>
    );
}
export default Footer;