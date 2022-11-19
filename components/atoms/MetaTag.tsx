import Head from "next/head";
import React, { FC } from "react";

interface MetaTagProps {
    title?: string;
    desc?: string;
    image?: string;
}

const MetaTag: FC<MetaTagProps> = ({ title, desc, image }) => {
    return (
        <>
            <Head>
                <title> {title ? `${title} - ` : ""} Papayas Studio </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content={
                        desc ??
                        "At Papayas studios we are at the forefront of digital content creation."
                    }
                />
                {/*  */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://papayas.studio/" />
                <meta
                    property="og:title"
                    content={`${title ? `${title} - ` : ""} Papayas Studio`}
                />
                <meta
                    property="og:description"
                    content={
                        desc ??
                        "At Papayas studios we are at the forefront of digital content creation."
                    }
                />
                <meta
                    property="og:image"
                    content={
                        image ??
                        "https://res.cloudinary.com/dqew5naa7/image/upload/v1668876482/papayas-studio-logo_xov8jz.png"
                    }
                />

                <meta name="twitter:type" content="website" />
                <meta name="twitter:site" content="@studiopapayas" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://papayas.studio/" />
                <meta
                    name="twitter:title"
                    content={`${title ? `${title} - ` : ""} Papayas Studio`}
                />
                <meta
                    name="twitter:description"
                    content={
                        desc ??
                        "At Papayas studios we are at the forefront of digital content creation."
                    }
                />
                <meta
                    name="twitter:image"
                    content={
                        image ??
                        "https://res.cloudinary.com/dqew5naa7/image/upload/v1668876482/papayas-studio-logo_xov8jz.png"
                    }
                ></meta>
            </Head>
        </>
    );
};

export default MetaTag;
