import Document, {Html, Head, Main, NextScript} from "next/document";

const APP_NAME = '台南一中選舉委員會'
const APP_DESCRIPTION = "台南一中選舉委員會官網"

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html lang="ch" dir="ltr">
                <Head>
                    {/* Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
page_path: window.location.pathname,
});`,
                        }}
                    />

                    <meta name='application-name' content={APP_NAME}/>
                    <meta name='apple-mobile-web-app-capable' content='yes'/>
                    <meta name='apple-mobile-web-app-status-bar-style' content='default'/>
                    <meta name='apple-mobile-web-app-title' content={APP_NAME}/>
                    <meta name='description' content={APP_DESCRIPTION}/>
                    <meta name='format-detection' content='telephone=no'/>
                    <meta name='mobile-web-app-capable' content='yes'/>
                    <meta name='msapplication-config' content='/static/icons/browserconfig.xml'/>
                    <meta name='msapplication-TileColor' content='#2B5797'/>
                    <meta name='msapplication-tap-highlight' content='no'/>
                    <meta name='theme-color' content='#000000'/>

                    <link rel='apple-touch-icon' href='/favicon.ico'/>
                    <link rel='apple-touch-icon' sizes='152x152' href='/favicon.ico'/>
                    <link rel='apple-touch-icon' sizes='180x180' href='/favicon.ico'/>
                    <link rel='apple-touch-icon' sizes='167x167' href='/favicon.ico'/>

                    <link rel='icon' type='image/png' sizes='32x32' href='/favicon.ico'/>
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicon.ico'/>
                    <link rel='manifest' href='/manifest.json'/>
                    <link rel='mask-icon' href='/favicon.ico' color='#5bbad5'/>
                    <link rel='shortcut icon' href='/favicon.ico'/>

                    <link rel='stylesheet'
                          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional'/>

                    <meta name='twitter:card' content='summary'/>
                    <meta name='twitter:url' content='https://ec.tnfsa.org'/>
                    <meta name='twitter:title' content={APP_NAME}/>
                    <meta name='twitter:description' content={APP_DESCRIPTION}/>
                    <meta name='twitter:image' content='https://ec.tnfsa.org/favicon.ico'/>
                    <meta name='twitter:creator' content='@DavidWShadow'/>
                    <meta property='og:type' content='website'/>
                    <meta property='og:title' content={APP_NAME}/>
                    <meta property='og:description' content={APP_DESCRIPTION}/>
                    <meta property='og:site_name' content={APP_NAME}/>
                    <meta property='og:url' content='https://ec.tnfsa.org'/>
                    <meta property='og:image' content='https://ec.tnfsa.org/favicon.ico'/>

                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}