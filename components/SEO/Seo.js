import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title, description, image, lang, meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const loc_siteName = site.siteMetadata.title;
  const loc_metaDescription = description || site.siteMetadata.description;
  const loc_image = image || site.siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={loc_siteName}
      meta={[
        { name: 'description', content: loc_metaDescription },
        { property: 'og:site_name', content: loc_siteName },
        { property: 'og:title', content: title },
        { property: 'og:description', content: loc_metaDescription },
        { property: 'og:image', content: loc_image },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: dark)',
          content: '#231f22',
        },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: light)',
          content: '#f3edf7',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ].concat(meta)}
      link={[
        {
          rel: 'icon',
          type: 'image/x-icon',
          sizes: '48x48',
          href: '/favicon_io/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon_io/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon_io/favicon-32x32.png',
        },

        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '180x180',
          href: '/favicon_io/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/favicon_io/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/favicon_io/android-chrome-512x512.png',
        },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Circlez Generator',
          href: '/rss.xml',
        },
      ]}
    />
  );
};

Seo.defaultProps = {
  description:
    'A tool to make circular patterns, and export them to HTML, CSS, JSX, JSON',
  lang: 'en',
  meta: [],
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  twitter: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default Seo;
