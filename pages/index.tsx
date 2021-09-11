// Imports
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/Home.module.scss"; // Styles

// Types
import type { ReactElement } from "react";
import { defaultBags } from "@utils/constants";

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
      url: "https://discord.gg/2mcWcTG8p9"
    }
  ];

    /**
   * Selects 3 random bags from defaultBags
   * @returns {Record<string, string>[]} randomized bags
   */
     const getRandomThreeBags = () => {
      const shuffled = defaultBags.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };

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

        <div className={styles.home__feature}>
          <span>Example Forces:</span>
          {getRandomThreeBags().map(({ id, attributes }, i) => (
            // For each loot bag, render item and link to OpenSea
            <a
              href={`https://testnets.opensea.io/assets/0x10ba0945efa928338e49dfcb31dc52f021c5ca61/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={styles.home__bag}
            >
              <div className={styles.home__bag_attributes}>
                <span>#{id}</span>
                <ul>
                  {attributes.map((attribute, i) => (
                    <li key={i}>
                      <span>{attribute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}


