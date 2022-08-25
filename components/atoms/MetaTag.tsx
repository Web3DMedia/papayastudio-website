import Head from 'next/head'

interface IProps {
    tagName: string
}
const MetaTag = ({ tagName }: IProps) => {
    return (
        <>
            <Head>
                <title>Papayastudio {tagName}</title>
                <meta
                    name="description"
                    content="At Papayas studios we are at the forefront of decentralized content creation, helping to simplify the complexities of Blockchain and emerging technologies." />
                <link rel="icon" href="/assets/logo.svg" />

                <meta name="title" content="we are at the forefront of decentralized content creation."></meta>
                <meta name="description" content="helping to simplify the complexities of Blockchain and emerging technologies."></meta>

                <meta property="og:type" content="website"></meta>
                <meta property="og:url" content="https://staging.papayas.studio/"></meta>
                <meta property="og:title" content="we are at the forefront of decentralized content creation."></meta>
                <meta property="og:description" content="helping to simplify the complexities of Blockchain and emerging technologies."></meta>
                <meta property="og:image" content="https://staging.papayas.studio//assets/papito-and-papina-new-two.jpeg"></meta>


                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:url" content="https://staging.papayas.studio/"></meta>
                <meta property="twitter:title" content="we are at the forefront of decentralized content creation."></meta>
                <meta property="twitter:description" content="helping to simplify the complexities of Blockchain and emerging technologies."></meta>
                <meta property="twitter:image" content="https://staging.papayas.studio//assets/papito-and-papina-new-two.jpeg"></meta>
            </Head>
        </>
    )
}

export default MetaTag