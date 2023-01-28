import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export const Navbar: React.FC = () => {
	const { allContentfulGlobalPage } = useStaticQuery<Queries.NavbarQuery>(graphql`
		query Navbar {
			allContentfulGlobalPage(filter: { homepage: { eq: false } }) {
				nodes {
					title
					slug
				}
			}
		}
	`);

	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/blog">Blog</Link>
			<Link to="/seasons">Seasons</Link>
			{allContentfulGlobalPage.nodes.map((page) => (
				<Link to={`/${page.slug}`} key={page.slug}>
					{page.title}
				</Link>
			))}
		</div>
	);
};
