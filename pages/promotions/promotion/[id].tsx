import { useRouter } from 'next/router'
import { Layout } from '../../../utils/layout'
import Head from 'next/head'

export default function Promotion() {
	const id = useRouter()
	let ID = id.query.id
	return (
		<Layout>
			<Head>
				<title>Promotion Page | Next App</title>
			</Head>
			<h1>Promotion ID: {ID}</h1>
		</Layout>
	)
}
