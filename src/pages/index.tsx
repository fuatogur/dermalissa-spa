import Head from "next/head";
import products from "@/data/products";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {
    const {locale} = useRouter()

    return (
        <>
            <Head>
                <title>Dermalissa</title>
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