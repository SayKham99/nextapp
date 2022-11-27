import { useRouter } from 'next/router'
import { Layout } from '../../../utils/layout'
import Head from 'next/head'

export default function Product() {
	const id = useRouter()
	let ID = id.query.id
	return (
		<Layout>
			<Head>
				<title>Product Page | Next App</title>
			</Head>
			<h1>Product ID: {ID}</h1>
		</Layout>
	)
}
