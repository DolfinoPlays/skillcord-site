import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Feature({title, children}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card skillcord-card">
        <div className="card__body">
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Skillcord"
      description="Turn your Discord server into a progression system."
    >
      <header className="hero hero--primary skillcord-hero">
        <div className="container">
          <p className="skillcord-badge">Progression • Skill Trees • Unlocks</p>
          <h1 className="hero__title">Skillcord</h1>
          <p className="hero__subtitle">
            Turn your Discord server into a progression system with XP, skill
            points, unlock branches, role rewards, and optional channel access nodes.
          </p>
          <div className="skillcord-actions">
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Read the Docs
            </Link>
            <a
              className="button button--outline button--lg"
              href="https://discord.com/oauth2/authorize?client_id=1337481384674984026"
            >
              Invite Skillcord
            </a>
          </div>
        </div>
      </header>

      <main className="container margin-vert--xl">
        <section className="margin-bottom--xl">
          <div className="row">
            <Feature title="Branching progression">
              Create starting branches, lock nodes behind prerequisites, and let members choose their own path.
            </Feature>
            <Feature title="Flexible unlocks">
              Nodes can grant roles, unlock categories or channels, or simply unlock future nodes without changing permissions.
            </Feature>
            <Feature title="Server-specific config">
              Every server gets its own progression tree, point balance, and setup.
            </Feature>
          </div>
          <div className="row">
            <Feature title="Built for communities">
              Use it for faction systems, gated content, class paths, progression hubs, or community milestones.
            </Feature>
            <Feature title="Permission-aware">
              Skillcord supports role-based unlocks and optional per-user channel visibility where needed.
            </Feature>
            <Feature title="Admin-friendly docs">
              Includes setup guides, permission explanations, and examples for common server layouts.
            </Feature>
          </div>
        </section>

        <section className="skillcord-panel margin-bottom--xl">
          <h2>What makes Skillcord different?</h2>
          <p>
            Most leveling bots stop at XP and level rewards. Skillcord turns leveling
            into a real progression tree, where members earn points and spend them to
            unlock paths, rewards, and access.
          </p>
          <ul>
            <li>XP and leveling</li>
            <li>Skill points on level-up</li>
            <li>Node prerequisites</li>
            <li>Role unlocks</li>
            <li>Optional channel and category access unlocks</li>
            <li>Future website dashboard support</li>
          </ul>
        </section>

        <section className="skillcord-panel">
          <h2>Ready to try it?</h2>
          <p>
            Start with the docs, replace the placeholder invite link, and deploy this
            site to GitHub Pages.
          </p>
          <div className="skillcord-actions">
            <Link className="button button--primary button--lg" to="/docs/admin/getting-started">
              Setup Guide
            </Link>
            <a className="button button--secondary button--lg" href="https://discord.gg/AcacMuTYBu">
              Join Support Server
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
