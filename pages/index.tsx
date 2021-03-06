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
    { name: "Marketplace", url: "https://tofunft.com/metis" },
    {
      name: "Twitter",
      url: "https://twitter.com/lootforwar",
    },
    {
      name: "Contract",
      url: "https://andromeda-explorer.metis.io/address/0xAd60229eCdC4b907F0e2152ba18e284cCBfCb261/contracts",
    },
    {
      name: "Discord",
      url: "https://discord.gg/93qkek8KyN"
    },
    {
      name: "Rarity",
      url: "https://lootforwar.herokuapp.com/"
    },
    { name: "Medium",
      url: "https://medium.com/@LootforWar/war-what-is-it-good-for-absolutely-anything-you-can-dream-of-f0338206d250"
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
            Loot(for War) is randomized war loot generated and stored on Metis.
            <br /> Each "Force" includes a country, support (air, land, and sea), tactic (offensive and defensive), bomb, and random surplus.<br /> Feel free to use forces in any
            way you want. Community involvement is encouraged. 
          </p>
        </div>

        <div className={styles.home__feature}>
          <span>Example Forces:</span>
          {getRandomThreeBags().map(({ id, attributes }, i) => (
            // For each loot bag, render item and link to OpenSea
            <a
              href={`https://tofunft.com/nft/metis/0xAd60229eCdC4b907F0e2152ba18e284cCBfCb261/${id}`}
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


