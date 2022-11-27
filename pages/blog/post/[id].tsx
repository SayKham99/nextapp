import { useRouter } from 'next/router'
import Head from 'next/head'
import { Layout } from '../../../utils/layout'

export default function Post() {
	const id = useRouter()
	let ID = id.query.id
	return (
		<Layout>
			<Head>
				<title>Post Page | Next App</title>
			</Head>
			<h1>Post ID: {ID}</h1>
		</Layout>
	)
}
