import Head from 'next/head'

interface IProps {
    tagName: string
}
const MetaTag = ({ tagName }: IProps) => {
    return (
        <>
            <Head>
                <title>Papayas Studio {tagName}</title>
                <meta
                    name="description"
                    content="At Papayas studios we are at the forefront of digital content creation creating stories and experiences for every aspect of web2 and web3 designs." />
                <link rel="icon" href="https://staging.papayas.studio//assets/logo.svg" />

                <meta name="title" content="At Papayas studios we are at the forefront of digital content creation."></meta>
                <meta name="description" content="Creating stories and experiences for every aspect of web2 and web3 designs."></meta>

                <meta property="og:type" content="website"></meta>
                <meta property="og:url" content="https://staging.papayas.studio/"></meta>
                <meta property="og:title" content="At Papayas studios we are at the forefront of digital content creation."></meta>
                <meta property="og:description" content="Creating stories and experiences for every aspect of web2 and web3 designs."></meta>
                <meta property="og:image" content="https://staging.papayas.studio//assets/papayas-studio-logo.png"></meta>


                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:url" content="https://staging.papayas.studio/"></meta>
                <meta property="twitter:title" content="At Papayas studios we are at the forefront of digital content creation."></meta>
                <meta property="twitter:description" content="Creating stories and experiences for every aspect of web2 and web3 designs."></meta>
                <meta property="twitter:image" content="https://staging.papayas.studio//assets/papayas-studio-logo.png"></meta>
            </Head>
        </>
    )
}

export default MetaTag
