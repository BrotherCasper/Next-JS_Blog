import NavBar from "../components/navbar";
import "../styles/global.css";
import Head from "next/Head";

function App({Component,pageProps}){
    return (
        <>
            <Head>
                <link rel="icon" href="../public/icons/favicon.ico"/>
            </Head>
            <header>
                <NavBar/>
            </header>
            <Component{...pageProps}/>
        </>
    )
}

export default App