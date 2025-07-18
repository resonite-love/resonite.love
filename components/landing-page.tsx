'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartIcon, BookOpenIcon, MessageCircleIcon, LinkIcon, ExternalLinkIcon, GlobeIcon } from 'lucide-react'

type Language = 'ja' | 'en' | 'ko'

export function LandingPageComponent() {
  const [lang, setLang] = useState<Language>('ja')

  const translations = {
    ja: {
      about: '概要',
      resources: 'リソース',
      community: 'コミュニティ',
      links: 'リンク',
      welcome: 'Resoniteコミュニティへようこそ',
      description: 'ResoniteはVRプラットフォームです。ここはファンメイドのコミュニティサイトです。',
      wikiAndGuides: 'Wikiと解説サイト',
      discordServer: 'Discordサーバー',
      joinDiscord: 'Discordに参加',
      relatedLinks: '関連リンク',
      officialSite: '公式サイト',
      download: 'ダウンロード',
      footer: 'resonite.love. All rights reserved.'
    },
    en: {
      about: 'About',
      resources: 'Resources',
      community: 'Community',
      links: 'Links',
      welcome: 'Welcome to the Resonite Community',
      description: 'Resonite is a VR platform. This is a fan-made community website.',
      wikiAndGuides: 'Wiki and Guides',
      discordServer: 'Discord Server',
      joinDiscord: 'Join Discord',
      relatedLinks: 'Related Links',
      officialSite: 'Official Site',
      download: 'Download',
      footer: 'resonite.love. All rights reserved.'
    },
    ko: {
      about: '개요',
      resources: '리소스',
      community: '커뮤니티',
      links: '링크',
      welcome: 'Resonite 커뮤니티에 오신 것을 환영합니다',
      description: 'Resonite는 VR 플랫폼입니다. 이곳은 팬메이드 커뮤니티 사이트입니다.',
      wikiAndGuides: '위키 및 가이드',
      discordServer: 'Discord 서버',
      joinDiscord: 'Discord 참여',
      relatedLinks: '관련 링크',
      officialSite: '공식 사이트',
      download: '다운로드',
      footer: 'resonite.love. All rights reserved.'
    }
  }

  const t = translations[lang]

  const resources = [
    { title: "公式Wiki", url: "https://wiki.resonite.com", description: "Resoniteの公式Wikiサイトです。", color: "from-red-500 to-orange-500" },
    { title: "Resonite 非公式日本語ガイド", url: "https://resonite-jp-guide.zozoka.su/", description: "Resoniteにある機能を一通り解説した日本語ガイドサイトです。個人によって管理・運営されています。", color: "from-orange-500 to-yellow-500" },
    { title: "Resonite 非公式日本語 Wiki", url: "https://wiki.resonite.love/", description: "Resonite非公式日本語Wikiです", color: "from-orange-500 to-yellow-500" },
    { title: "べるネ Resonite 技術系 Wiki", url: "https://wikiwiki.jp/resonaito/", description: "ユーザーによって作成・管理されているWikiです。", color: "from-orange-500 to-yellow-500" },
    { title: "セッション/ワールド検索", url: "https://go.resonite.com/", description: "セッションとかワールドが検索できるサイト。", color: "from-yellow-500 to-green-500" },
    { title: "れぞマガ", url: "https://www.resonitemagazine.com/", description: "先鋭的なVRSNS「Resonite」を紹介するサイトです", color: "from-yellow-500 to-green-500" },
    { title: "UniPocket", url: "https://about.uni-pocket.com/ja", description: "UniPocketはResoniteで使える、画期的なアイテム共有・検索ツールです。", color: "from-green-500 to-blue-500" },
    { title: "Advent Calendar 2024", url: "https://adventar.org/calendars/10543", description: "知見から体験談まで、様々な内容がまとまったサイトです。", color: "from-green-500 to-blue-500" },
    { title: "公式Discord", url: "https://discord.gg/resonite", description: "Resonite公式Discordサーバです。", color: "from-blue-500 to-indigo-500" },
    { title: "ResoniteJapan", url: "https://discord.gg/resonite-japan", description: "Resonite非公式日本コミュニティのDiscordサーバです", color: "from-indigo-500 to-purple-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="p-6 border-b border-gray-700 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            Resonite <HeartIcon className="ml-2 h-6 w-6 text-yellow-400" />
          </h1>
          <nav className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <GlobeIcon className="h-5 w-5" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent border-none text-white focus:outline-none"
              >
                <option value="ja">日本語</option>
                <option value="en">English</option>
                <option value="ko">한국어</option>
              </select>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section id="about" className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{t.welcome}</h2>
          <p className="text-xl text-gray-300">{t.description}</p>
        </section>

        <section id="resources" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{t.wikiAndGuides}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className={`bg-gradient-to-br ${resource.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <BookOpenIcon className="mr-2" /> {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-white">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-white hover:underline"
                  >
                    サイトを見る <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="community" className="mb-12">
          <Card className="bg-gradient-to-r from-pink-500 to-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <MessageCircleIcon className="mr-2" /> {t.discordServer}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">リンクを追加したり、お問い合わせはこちら</p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100">{t.joinDiscord}</Button>
            </CardContent>
          </Card>
        </section>

        <section id="links" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">{t.relatedLinks}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <LinkIcon className="mr-2" /> {t.officialSite}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://resonite.com" className="text-white hover:underline">resonite.com</a>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <LinkIcon className="mr-2" /> {t.download}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://store.steampowered.com/app/2519830/Resonite/" className="text-white hover:underline">Steam</a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white">&copy; {new Date().getFullYear()} {t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
