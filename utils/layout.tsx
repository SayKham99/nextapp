import Nav from './nav'
import Footer from './footer'

// @ts-ignore
export function Layout({ children }) {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	)
}
