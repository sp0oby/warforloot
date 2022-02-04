// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div>
      {/* Meta */}
      <Head />
      {/* Top header */}
      <Header />

      {/* Page content */}
      <div className={styles.content}>{children}</div>
      {/* Bottom footer */}
      <Footer />
    </div>
  );
}

/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */
function Head(): ReactElement {
  return (
    <HTMLHead>
      {/* Primary Meta Tags */}
      <title>War</title>
      <meta name="title" content="Loot(for War)" />
      <meta
        name="description"
        content="Loot(for War) is randomized war loot generated and stored on the blockchain."
      />

      {/* OG + Faceook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.lootforwar.com/" />
      <meta property="og:title" content="Loot(for War)" />
      <meta
        property="og:description"
        content="Loot(for War) is randomized war loot generated and stored on the blockchain."
      />
      <meta property="og:image" content="https://lootforwar.com/meta.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.lootforwar.com/" />
      <meta property="twitter:title" content="Loot" />
      <meta
        property="twitter:description"
        content="Loot(for War) is randomized war loot generated and stored on the blockchain."
      />
      <meta property="twitter:image" content="" />

      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Changa:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </HTMLHead>
  );
}

/**
 * Header
 * @returns {ReactElement} Header
 */
function Header() {
  // Collect current path for active links
  const { pathname } = useRouter();
  // All links

  return (
    <div className={styles.header}>
      {/* Main logo */}
      <div className={styles.header__logo}>
        <Link href="/">
          <a>War</a>
        </Link>
      </div>

      
    </div>
  );
}

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
function Footer(): ReactElement {
  return (
    <div className={styles.footer}>
      <p>
        You can mint from the contract (claim). Enjoy.

      </p>
    </div>
  );
}
