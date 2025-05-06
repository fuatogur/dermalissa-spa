import {JSX} from "react";

interface Translation {
    title: string,
    description: string | JSX.Element
}

interface Product {
    className: string,
    backgroundColor: string,
    slug: string,
    translations: {
        [key: string]: Translation
    }
}

export type { Translation, Product }

export default Product