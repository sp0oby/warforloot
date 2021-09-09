// Imports
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/Home.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "" },
    {
      name: "Twitter",
      url: "https://twitter.com/lootforwar",
    },
    {
      name: "Contract",
      url: "",
    },
    {
      name: "Discord",
      url: "https://discord.gg/vJyRDktWeN"
    }
  ];

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Loot(for War)</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  {url.startsWith("/") ? (
                    // If link to local page use Link
                    <Link href={url}>
                      <a>{name}</a>
                    </Link>
                  ) : (
                    // Else, redirect in new tab
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>
            Loot(for War) is randomized war loot generated and stored on the blockchain.
            <br /> Each "Force" includes a country, support (air, land, and sea), tactic (offensive and defensive), bomb, and random surplus.<br /> Feel free to use forces in any
            way you want. Community involvement is encouraged. 
          </p>
        </div>
        
      </div>
    </Layout>
  );
}


