import Link from 'next/link'
import { useRouter } from 'next/router'

const LanguageSwitcher = () => {
    const router = useRouter()
    const { locales, asPath } = router

    return (
        <div>
            {locales!.map((lng) => (
                <Link key={lng} href={asPath} locale={lng}>
                    {lng.toUpperCase()}
                </Link>
            ))}
        </div>
    )
}

export default LanguageSwitcher