import Head from "next/head";
import products from "@/data/products";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {
    const {locale, locales, defaultLocale} = useRouter()

    return (
        <>
            <Head>
                <title>Dermalissa</title>
                {locales!.map((lng) => (
                    <link
                        key={lng}
                        rel="alternate"
                        hrefLang={lng}
                        href={`https://www.dermalissa.com${lng === defaultLocale ? '' : lng}`}
                    />
                ))}

                <link
                    rel="alternate"
                    hrefLang="x-default"
                    href="https://www.dermalissa.com"
                />
            </Head>
            {products.map(product => (
                <div key={product.slug}>
                    <Link href={`/p/${product.slug}`}>
                        {product.translations[locale!].title}
                    </Link>
                </div>
            ))}
        </>
    )
}