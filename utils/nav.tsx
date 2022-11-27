import Link from 'next/link'

function Nav() {
	return (
		<nav>
			<Link href={'/'}>Home</Link>
			<Link href={'/about'}>About</Link>
			<Link href={'/blog'}>Blog</Link>
			<Link href={'/branchs'}>Branchs</Link>
			<Link href={'/catalog'}>Catalog</Link>
			<Link href={'/contact'}>Contact</Link>
			<Link href={'/products'}>Products</Link>
			<Link href={'/promotions'}>Promotions</Link>
		</nav>
	)
}

export default Nav
