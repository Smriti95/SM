import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => (

    <div className="root">
        <Head>
            {/* <meta name="title" content="My NextJs Project" />
            <meta name="description" content="My NextJs Project" />
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#000000" />
            <meta name="robots" content="noindex, nofollow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                rel="stylesheet" />
            <link rel="manifest" crossOrigin="" href="/static/manifest.json" />
            <link rel="icon" href="/static/download2.png" /> */}
            <link rel="manifest" href="/static/manifest.json" />

            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="progressive-web-app" />
            <meta name="apple-mobile-web-app-title" content="progressive-web-app" />
            <meta name="theme-color" content="lightblue" />
            <meta name="msapplication-navbutton-color" content="lightblue" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="msapplication-starturl" content="/" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
            <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
            <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
        </Head>
        <Header />
        <h1>{title}</h1>
        {children}
        <Footer />

        <style global jsx>{`
            .root{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
             body{
                    width:100%;
                    margin: 0;
                    font-size: 110%;
                    background-color: powderblue;
                }
            `}
        </style>
    </div>
);