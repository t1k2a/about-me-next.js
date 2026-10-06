import React from 'react';

import styles from '../styles/Home.module.css';
import utilStyle from '../styles/utils.module.css';
import Image from 'next/image';
import workStyles from '../styles/work.module.css';

const additionalProjects = [
  {
    name: 'Claude Standup',
    subtitle: '開発の計画・振り返り支援ツール',
    description:
      'GitHubのコミット履歴やPRの状況を収集し、日々の計画と振り返りを支援するClaude Codeスキル。作業履歴の収集と対話を組み合わせ、朝会・夕会を進める仕組みです。',
    images: [
      {
        src: '/images/claude-standup-flow.png', width: 801, height: 501,
        alt: 'Claude Standupの流れ。Git・GitHubの履歴を収集し、Claude Codeとの朝会・夕会を経てレポートに残す概念図',
        caption: '作業履歴の収集から計画・振り返りまで（概念図）',
      },
    ],
    links: [{ label: 'GitHubを見る', href: 'https://github.com/t1k2a/claude-hurikaeri' }],
  },
  {
    name: 'GlotNexus',
    subtitle: '海外AIニュースリーダー',
    description:
      '海外のAIニュースをRSSから収集し、日本語で読めるWebアプリ。React・TypeScriptの画面とNode.jsのAPIで構成し、複数フィードの並列取得、キャッシュ、取得失敗時の処理を備えています。',
    images: [
      {
        src: '/images/glotnexus-live-2026-10-06.png', width: 1167, height: 749,
        alt: 'GlotNexusの公開画面。カテゴリ別の絞り込みと日本語のAIニュース一覧',
        caption: '公開サイトのニュース一覧（2026年10月6日）',
      },
      {
        src: '/images/glotnexus-architecture.png', width: 801, height: 501,
        alt: 'GlotNexusの構成図。RSS取得、日本語化・整理、Node.js API配信、React・TypeScriptの一覧表示とキャッシュ',
        caption: 'RSS取得からニュース表示までの仕組み（概念図）',
      },
    ],
    links: [
      { label: 'サイトを見る', href: 'https://glotnexus.jp/' },
      { label: 'GitHubを見る', href: 'https://github.com/t1k2a/ai-news-reader-app-native' },
    ],
  },
];

function Works() {
  return (
    <section id="works">
      <h2>制作物</h2>
      <div className={`${styles.grid} ${workStyles.worksGrid}`}>
        <div>
          <h3 className={utilStyle.headingMd}>退勤アプリ</h3>
          <p
            style={{ margin: '0 0 5% 0', fontSize: '15px', width: '90%' }}
            className={utilStyle.boldText}
          >
            ボタン押下でLINEAPI経由で退勤の連絡が届く
          </p>
          <Image src="/images/leaving-work-img.jpg" width={350} height={600} alt='退勤アプリ' />
        </div>
        <div>
          <h3 className={utilStyle.headingMd}>デュエマクラシック08 データベース</h3>
          <p
            style={{ margin: '0 0 5% 0', fontSize: '15px', width: '90%' }}
            className={utilStyle.boldText}
          >
            カード検索・絞り込みと、デッキ作成・共有ができるWebアプリ
          </p>
          <a
            href="https://t1k2a.github.io/duelmasters-classic08-database/"
            target="_blank"
            rel="noopener noreferrer"
            className={workStyles.projectLink}
          >
            <Image
              src="/images/duelmasters-classic08-database.png"
              width={430}
              height={910}
              sizes="(max-width: 700px) 90vw, 350px"
              className={workStyles.projectImage}
              alt="デュエマクラシック08のカード検索画面。文明・種族・コストなどの絞り込みとカード一覧"
            />
            <span className={workStyles.projectLinkLabel}>サイトを見る（新しいタブで開きます） ↗</span>
          </a>
        </div>
        {additionalProjects.map((project) => (
          <div key={project.name} className={workStyles.additionalProject}>
            <h3 className={utilStyle.headingMd}>{project.name}</h3>
            <p className={workStyles.projectSubtitle}>{project.subtitle}</p>
            <p className={workStyles.projectDescription}>{project.description}</p>
            {project.images.map((image) => (
              <figure key={image.src} className={workStyles.projectFigure}>
                <a href={image.src} target="_blank" rel="noopener noreferrer" className={workStyles.figureLink}>
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 875px) 95vw, (max-width: 1244px) 50vw, 584px"
                    className={workStyles.projectImage}
                    alt={image.alt}
                  />
                  <span className={workStyles.enlargeLabel}>画像を拡大（新しいタブで開きます） ↗</span>
                </a>
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
            <div className={workStyles.projectLinks}>
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}（新しいタブで開きます） ↗
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
