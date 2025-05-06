// @ts-ignore
export async function getStaticProps({ locale, defaultLocale }) {
    return {
        redirect: {
            destination: `/${locale === defaultLocale ? '' : locale + '/'}p/revitalizing-oil`,
            permanent: false,
        },
    }
}

export default function Home() {
    return null // Gerek yok, çünkü redirect ediyoruz
}