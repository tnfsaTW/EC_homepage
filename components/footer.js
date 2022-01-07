import React from "react"

import Script from 'next/script'

export default function Footer() {
    return (
        <React.Fragment>
            <footer id="footer">
                <section>
                    {/*A form that send text to google forms*/}
                    <label style="text-align: center;font-size: 20px">意見反饋</label>
                    <form id="google-form">
                        <div className="fields">
                            <div className="field">
                                <label>Nickname 暱稱<br />
                                    <input type="text" name="entry.743565742" required />
                                </label>
                            </div>
                            <div className="field">
                                <label>電子郵件 Email (用於回覆訊息)<br />
                                    <input type="text" name="entry.1429337285" required />
                                </label>
                            </div>
                            <div className="field">
                                <label>訊息 Message
                                    <textarea name="entry.859617697" rows="3" required></textarea>
                                </label>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="送出" /></li>
                        </ul>
                    </form>
                </section>
                <section className="split contact">
                    <section className="alt">
                        <h3>Address</h3>
                        <p>臺南市東區民族路一段1號</p>
                    </section>
                    {/*<section>
                        <h3>Phone</h3>
                        <p>(09) Don' t call me</p>
                    </section>*/}
                    <section>
                        <h3>Email</h3>
                        <p><a href="mailto:election@tnfsa.org">election@tnfsa.org</a></p>
                    </section>
                    <section>
                        <h3>Social</h3>
                        <ul className="icons alt">
                            {/*<li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>*/}
                            <li><a href="https://www.facebook.com/tnfshsa" className="icon brands alt fa-facebook-f" target="_blank" rel="noreferrer"><span
                                className="label">Facebook</span></a>
                            </li>
                            <li><a href="https://www.instagram.com/tnfshsa/" className="icon brands alt fa-instagram" target="_blank" rel="noreferrer"><span
                                className="label">Instagram</span></a>
                            </li>
                            <li><a href="https://github.com/tnfsa" className="icon brands alt fa-github" target="_blank" rel="noreferrer"><span
                                className="label">GitHub</span></a></li>
                        </ul>
                    </section>
                </section>
            </footer>

            {/* Copyright */}
            <div id="copyright">
                <ul>
                    <li>&copy; Untitled</li>
                    <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                    <li>Constructed: <a href="https://sivir.pw">Milliax</a></li>
                </ul>
            </div>

            {/* Scripts */}


            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
            <Script src="/assets/js/jquery.scrollex.min.js" />
            <Script src="/assets/js/jquery.scrolly.min.js" />
            <Script src="/assets/js/browser.min.js" />
            <Script src="/assets/js/breakpoints.min.js" />
            <Script src="/assets/js/util.js" />
            <Script src="/assets/js/main.js" />
            <Script src="/assets/js/googleform.js" crossorigin="anonymous" />
            <Script src="/assets/js/pages.js" />
        </React.Fragment>
    )
}