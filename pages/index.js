import Head from "next/Head";

function HomePage() {
    return (
        <>
            <Head>
                <title>My Blog</title>
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </main>
        </>
    )
}

export default HomePage;