import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {

    const data = useStaticQuery(graphql`
        query GetSiteTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }

    `);

    const meta = data?.site?.siteMetadata ?? {};
    console.log(meta.title);

    return(
        <>
            <header>
                <Link to='/'>{meta.title}</Link>
            </header>
            <main>
                <h1>Index Page Rendered</h1>
                <Link to='/about'>About</Link>
            </main>
        </>
    )
}