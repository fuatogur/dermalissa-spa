import { useEffect, useRef } from "react";
import Head from "next/head";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import products from '@/data/products';
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useRouter } from "next/router";
import { ReactLenis } from 'lenis/react';
import { DM_Sans } from 'next/font/google';
import {stripTags} from "@/helpers";

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function ProductPage({ product }: { product: any }) {
    if (!product) return <div>error</div>;

    const { locale, locales, defaultLocale, asPath } = useRouter();

    const baseUrl = 'https://www.dermalissa.com';
    const canonicalUrl = `${baseUrl}${locale === defaultLocale ? '' : `/${locale}`}${asPath}`;
    const ogImage = `${baseUrl}/assets/images/products/${product.slug}.png`;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Dermalissa",
        "alternateName": ["Dermalisse"],
        "url": "https://dermalissa.com",
        "email": "info@seskimya.com.tr",
        "telephone": "+90 212 659 67 37",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Altınşehir Mah. Uğur Sok. No:3-5",
            "addressLocality": "Başakşehir",
            "addressRegion": "İstanbul",
            "addressCountry": "TR"
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": "SES KİMYA TEMİZLİK ÜRÜNLERİ GIDA SAN. VE TİC. A.Ş.",
            "url": "https://seskimya.com"
        },
        "sameAs": [
            "https://www.elvons.com",
            "https://www.trendyol.com/magaza/elvons-m-131942?sst=0"
        ]
    }

    const swiperRef = useRef<SwiperRef>(null);

    useEffect(() => {
        swiperRef.current?.swiper?.slideTo(product.index);
    }, [product.index]);

    useEffect(() => {
        const images = document.querySelectorAll('.matrix-image');
        const callback = function () {
            const scrollY = window.scrollY;
            const maxScroll = 600;
            const clampedScroll = Math.min(Math.max(scrollY, 0), maxScroll);
            const rotate = 24 - (clampedScroll / maxScroll) * 24;
            const width = 65 - (clampedScroll / maxScroll) * 10;
            const translateStart = 150;
            const translateMax = 65;
            let translateY = 0;
            if (clampedScroll > translateStart) {
                const translateProgress = (clampedScroll - translateStart) / (maxScroll - translateStart);
                translateY = translateProgress * translateMax;
            }
            images.forEach(image => {
                // @ts-ignore
                image.style.transform = `rotate(${rotate}deg) translateY(${translateY}%)`;
                // @ts-ignore
                image.style.width = `${width}%`;
            });
        };
        window.addEventListener('scroll', callback, { passive: true });
        return () => {
            window.removeEventListener('scroll', callback);
        };
    }, []);

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{`Dermalissa - ${product.translation.title}`}</title>
                <meta name="description" content={stripTags(product.translation.description)} />
                <meta name="keywords" content={`Dermalissa, ${product.translation.title}, skincare, beauty, natural ingredients`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Viewport & Favicon */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Favicons */}
                <link rel="icon" type="image/png" href="https://www.dermalissa.com/assets/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="https://www.dermalissa.com/assets/favicon/favicon.svg" />
                <link rel="shortcut icon" href="https://www.dermalissa.com/assets/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="https://www.dermalissa.com/assets/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Dermalissa" />
                <link rel="manifest" href="https://www.dermalissa.com/assets/favicon/site.webmanifest" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="product" />
                <meta property="og:site_name" content="Dermalissa" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={`Dermalissa - ${product.translation.title}`} />
                <meta property="og:description" content={stripTags(product.translation.description)} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Dermalissa" />
                <meta name="twitter:title" content={`Dermalissa - ${product.translation.title}`} />
                <meta name="twitter:description" content={stripTags(product.translation.description)} />
                <meta name="twitter:image" content={ogImage} />

                {/* Alternate Language Links */}
                {locales?.map((lng) => (
                    <link
                        key={lng}
                        rel="alternate"
                        hrefLang={lng}
                        href={`${baseUrl}/${lng === defaultLocale ? '' : `${lng}/`}p/${product.slug}`}
                    />
                ))}
                <link
                    rel="alternate"
                    hrefLang="x-default"
                    href={`${baseUrl}/p/${product.slug}`}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
            </Head>
            <ReactLenis options={{
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            }} root>
                <div className="full-page" style={{background: product.bodyColor ?? '#FCFAF2'}}>
                    <header className="header-box">
                        <LanguageSwitcher/>
                        <div>
                            <img src="/assets/images/logo/logo.svg" alt="logo"/>
                        </div>

                    </header>
                    <main className="main-box">
                        <section className="links" style={{background: product.bodyColor ?? '#FCFAF2'}}>
                            <Swiper
                                freeMode
                                slidesPerView="auto">
                                <div className="swiper-wrapper">
                                    {products.map(product => (
                                        <SwiperSlide key={product.slug}>
                                            <Link href={`/p/${product.slug}`}
                                                  className={asPath === `/p/${product.slug}` ? 'open' : ''}
                                                  scroll={false}>
                                                {product.translations[locale!].title}
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </section>

                        <section className="home-sweet-biggest-banner">
                            <Swiper
                                ref={swiperRef}
                                slidesPerView={1}
                                freeMode
                                watchSlidesProgress
                                grabCursor
                                effect="creative"
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }}
                                modules={[EffectCreative]}
                                allowTouchMove={false}
                            >
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div style={{background: '#FCFAF2'}}>
                                            <div>
                                                <picture>
                                                    <source srcSet="/assets/images/products/revitalizing-oil.webp"
                                                            type="image/webp"/>
                                                    <source srcSet="/assets/images/products/revitalizing-oil.png"
                                                            type="image/png"/>
                                                    <img className="matrix-image"
                                                         src="/assets/images/products/revitalizing-oil.png" alt="Revitalizing Oil"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div>
                                                <picture>
                                                    <source srcSet="/assets/images/products/revitalizing-oil-box.webp"
                                                            type="image/webp"/>
                                                    <source srcSet="/assets/images/products/revitalizing-oil-box.png"
                                                            type="image/png"/>
                                                    <img src="/assets/images/products/revitalizing-oil-box.png" alt="Revitalizing Oil Box"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{background: '#F5FFFF'}}>
                                            <div>
                                                <picture>
                                                    <source
                                                        srcSet="/assets/images/products/spf6-uva-brightening-cream.webp"
                                                        type="image/webp"/>
                                                    <source
                                                        srcSet="/assets/images/products/spf6-uva-brightening-cream.png"
                                                        type="image/png"/>
                                                    <img className="matrix-image"
                                                         src="/assets/images/products/spf6-uva-brightening-cream.png"
                                                         alt="Brightening Cream"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div>
                                                <picture>
                                                    <source
                                                        srcSet="/assets/images/products/spf6-uva-brightening-cream-box.webp"
                                                        type="image/webp"/>
                                                    <source
                                                        srcSet="/assets/images/products/spf6-uva-brightening-cream-box.png"
                                                        type="image/png"/>
                                                    <img
                                                        src="/assets/images/products/spf6-uva-brightening-cream-box.png"
                                                        alt="Brightening Cream Box" loading="lazy"/>
                                                </picture>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{background: '#F2F0F9'}}>
                                            <div>
                                                <picture>
                                                    <source srcSet="/assets/images/products/retinol-night-cream.webp"
                                                            type="image/webp"/>
                                                    <source srcSet="/assets/images/products/retinol-night-cream.png"
                                                            type="image/png"/>
                                                    <img className="matrix-image"
                                                         src="/assets/images/products/retinol-night-cream.png" alt="Night Cream"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div>
                                                <picture>
                                                    <source
                                                        srcSet="/assets/images/products/retinol-night-cream-box.webp"
                                                        type="image/webp"/>
                                                    <source srcSet="/assets/images/products/retinol-night-cream-box.png"
                                                            type="image/png"/>
                                                    <img src="/assets/images/products/retinol-night-cream-box.png"
                                                         alt="Night Cream Box"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{background: '#FEF4F0'}}>
                                            <div>
                                                <picture>
                                                    <source
                                                        srcSet="/assets/images/products/antioxidant-vitamin-c-cream.webp"
                                                        type="image/webp"/>
                                                    <source
                                                        srcSet="/assets/images/products/antioxidant-vitamin-c-cream.png"
                                                        type="image/png"/>
                                                    <img className="matrix-image"
                                                         src="/assets/images/products/antioxidant-vitamin-c-cream.png"
                                                         alt="Vitamin C Cream"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div>
                                                <picture>
                                                    <source
                                                        srcSet="/assets/images/products/antioxidant-vitamin-c-cream-box.webp"
                                                        type="image/webp"/>
                                                    <source
                                                        srcSet="/assets/images/products/antioxidant-vitamin-c-cream-box.png"
                                                        type="image/png"/>
                                                    <img
                                                        src="/assets/images/products/antioxidant-vitamin-c-cream-box.png"
                                                        alt="Vitamin C Cream Box" loading="lazy"/>
                                                </picture>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{background: '#F3FAFF'}}>
                                            <div>
                                                <picture>
                                                    <source srcSet="/assets/images/products/ultra-hydrating-cream.webp"
                                                            type="image/webp"/>
                                                    <source srcSet="/assets/images/products/ultra-hydrating-cream.png"
                                                            type="image/png"/>
                                                    <img className="matrix-image"
                                                         src="/assets/images/products/ultra-hydrating-cream.png" alt="Hydrating Cream"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div>
                                                <picture>
                                                    <source
                                                        srcSet="/assets/images/products/ultra-hydrating-cream-box.webp"
                                                        type="image/webp"/>
                                                    <source
                                                        srcSet="/assets/images/products/ultra-hydrating-cream-box.png"
                                                        type="image/png"/>
                                                    <img src="/assets/images/products/ultra-hydrating-cream-box.png"
                                                         alt="Hydrating Cream Box"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{background: '#F3F9F4'}}>
                                            <div>
                                                <picture>
                                                    <source
                                                        srcSet="/assets/images/products/cream-for-acne-prone-skin.webp"
                                                        type="image/webp"/>
                                                    <source
                                                        srcSet="/assets/images/products/cream-for-acne-prone-skin.png"
                                                        type="image/png"/>
                                                    <img className="matrix-image"
                                                         src="/assets/images/products/cream-for-acne-prone-skin.png"
                                                         alt="Cream for Acne Prone Skin"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div>
                                                <picture>
                                                    <source
                                                        srcSet="/assets/images/products/cream-for-acne-prone-skin-box.webp"
                                                        type="image/webp"/>
                                                    <source
                                                        srcSet="/assets/images/products/cream-for-acne-prone-skin-box.png"
                                                        type="image/png"/>
                                                    <img src="/assets/images/products/cream-for-acne-prone-skin-box.png"
                                                         alt="Cream for Acne Prone Skin Box" loading="lazy"/>
                                                </picture>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{background: '#FEF5FA'}}>
                                            <div>
                                                <picture>
                                                    <source srcSet="/assets/images/products/anti-wrinkle-cream.webp"
                                                            type="image/webp"/>
                                                    <source srcSet="/assets/images/products/anti-wrinkle-cream.png"
                                                            type="image/png"/>
                                                    <img className="matrix-image"
                                                         src="/assets/images/products/anti-wrinkle-cream.png" alt="Anti Wrinkle Cream"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div>
                                                <picture>
                                                    <source srcSet="/assets/images/products/anti-wrinkle-cream-box.webp"
                                                            type="image/webp"/>
                                                    <source srcSet="/assets/images/products/anti-wrinkle-cream-box.png"
                                                            type="image/png"/>
                                                    <img src="/assets/images/products/anti-wrinkle-cream-box.png" alt="Anti Wrinkle Cream Box"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{background: '#FCF5F6'}}>
                                            <div>
                                                <picture>
                                                    <source srcSet="/assets/images/products/eye-repair-cream.webp"
                                                            type="image/webp"/>
                                                    <source srcSet="/assets/images/products/eye-repair-cream.png"
                                                            type="image/png"/>
                                                    <img className="matrix-image"
                                                         src="/assets/images/products/eye-repair-cream.png" alt="Eye Repair Cream"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div>
                                                <picture>
                                                    <source srcSet="/assets/images/products/eye-repair-cream-box.webp"
                                                            type="image/webp"/>
                                                    <source srcSet="/assets/images/products/eye-repair-cream-box.png"
                                                            type="image/png"/>
                                                    <img src="/assets/images/products/eye-repair-cream-box.png" alt="Eye Repair Cream Box"
                                                         loading="lazy"/>
                                                </picture>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <div className="product-detail-rg-bar">
                                <article className={product.className}>
                                    <h2 style={{
                                        color: '#fff',
                                        background: product.backgroundColor,
                                    }}>{product.translation.title}</h2>
                                    <div dangerouslySetInnerHTML={{__html: product.translation.description}}></div>
                                </article>
                            </div>
                        </section>
                    </main>
                    <footer className="footer-box">
                        <p>Copyright © 2025 Dermalissa all rights reserved</p>
                    </footer>
                </div>
            </ReactLenis>
        </>
    );
}

// @ts-ignore
export async function getStaticPaths({locales}) {
    const paths = []

    for (const locale of locales) {
        for (const product of products) {
            paths.push({
                params: {slug: product.slug},
                locale,
            })
        }
    }

    return {
        paths,
        fallback: 'blocking',
    }
}
// @ts-ignore
export async function getStaticProps({ params, locale, defaultLocale }) {
    const productData = products.find((p) => p.slug === params.slug);
    if (!productData) {
        return {
            redirect: {
                destination: `${locale === defaultLocale ? '' : `/${locale}`}/p/revitalizing-oil`,
                permanent: false,
            },
        };
    }
    return {
        props: {
            product: {
                index: products.indexOf(productData),
                className: productData.className,
                backgroundColor: productData.backgroundColor,
                bodyColor: productData.bodyColor,
                slug: productData.slug,
                translation: productData.translations[locale],
            },
        },
    };
}
