import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
  preload: true,
});

export const metadata: Metadata = {
  title: "정다운교회",
  description:
    "대한예수교장로회(통합) 정다운교회 | 선교하고, 사람을 키우고, 지역과 함께하는 교회. 경기도 안양시 석수동, 1호선 관악역 인근.",
  keywords: ["정다운교회", "안양교회", "석수동교회", "관악역교회", "벧엘노인요양원"],
  metadataBase: new URL("https://jeongdaun.org"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "정다운교회",
    description: "선교하고, 사람을 키우고, 지역과 함께하는 교회",
    url: "https://jeongdaun.org",
    siteName: "정다운교회",
    type: "website",
    locale: "ko_KR",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "정다운교회" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "정다운교회",
    description: "선교하고, 사람을 키우고, 지역과 함께하는 교회",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
