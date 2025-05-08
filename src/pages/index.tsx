import {GetServerSideProps} from "next";

export default function Home() {
    return null
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        redirect: {
            destination: '/p/revitalizing-oil',
            permanent: false
        }
    }
}