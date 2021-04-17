import Prismic from '@prismicio/client';

export function getPrimiscClient(req?: unknown) {
    const primisc = Prismic.client(
        process.env.PRISMIC_ENDPOINT,
        {
            req: req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )
    return primisc
}