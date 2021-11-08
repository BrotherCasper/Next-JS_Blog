import Head from "next/Head";
import {getPost, getSlugs} from "../../lib/posts";


export async function getStaticPaths() {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) =>({
        params:{slug},
    })),
        fallback: false
    }
}

export async function getStaticProps({params:{slug}}){
    console.log("params",slug)
    const post = await getPost(slug);
    return {
        props:{post},
    };
}

function PostPage({post}){
    return (
        <>
            <Head>
                <title>{post.title} - My Blog</title>
            </Head>
            <main>
                <h1>{post.title}</h1>
                <p>Date: {post.date}</p>
                <article dangerouslySetInnerHTML={{__html:post.body}}/>
            </main>
        </>
    )
}

export default  PostPage;