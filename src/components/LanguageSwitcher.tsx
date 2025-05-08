import Link from 'next/link'
import { useRouter } from 'next/router'

const LanguageSwitcher = () => {
    const router = useRouter()
    const { locales, asPath } = router

    return (
        <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 13, background: '#000', padding: 10}}>
            {locales!.map((lng) => (
                <li key={lng}>
                    <Link style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} href={asPath} locale={lng}>
                        <img height="20" src={`/assets/images/languages/${lng.toUpperCase()}.svg`} alt={lng} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default LanguageSwitcher