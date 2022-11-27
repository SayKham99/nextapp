import Head from 'next/head'
import { Layout } from '../../utils/layout'

function Index() {
	return (
		<Layout>
			<Head>
				<title>About | Next App</title>
			</Head>
			<div>About</div>
		</Layout>
	)
}

export default Index
