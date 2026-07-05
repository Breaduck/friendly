import { church } from "@/data/church";
import { NAV, NAV_LABELS, type NavKey } from "@/lib/nav";

const footerLinks = Object.entries(NAV_LABELS).filter(
  ([key]) => key !== "hero"
) as [NavKey, string][];

export function Footer() {
  return (
    <footer className="bg-accent-deep text-white/70">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{church.name}</h3>
            <p className="text-sm leading-relaxed mb-5">
              {church.denomination}
              <br />
              지역 사회와 함께하는 교회
            </p>
            {/* 소셜 링크 */}
            <div className="flex gap-3">
              <a
                href={church.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="유튜브 채널"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-colors"
              >
                <svg width="14" height="10" viewBox="0 0 20 14" fill="white">
                  <path d="M19.582 2.186A2.506 2.506 0 0 0 17.818.422C16.254 0 10 0 10 0S3.746 0 2.182.422A2.506 2.506 0 0 0 .418 2.186C0 3.75 0 7 0 7s0 3.25.418 4.814a2.506 2.506 0 0 0 1.764 1.764C3.746 14 10 14 10 14s6.254 0 7.818-.422a2.506 2.506 0 0 0 1.764-1.764C20 10.25 20 7 20 7s0-3.25-.418-4.814zM8 10V4l5.2 3L8 10z"/>
                </svg>
              </a>
              <a
                href={church.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="네이버 지도"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#03C75A] flex items-center justify-center transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">바로가기</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map(([key, label]) => (
                <a
                  key={key}
                  href={`#${NAV[key]}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <address className="not-italic text-sm leading-relaxed space-y-1">
              <p>{church.addressFull}</p>
              <p>
                {church.nearestStation} 도보 {church.walkingMinutes}분
              </p>
              <p>
                <a
                  href={`tel:${church.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {church.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${church.email}`}
                  className="hover:text-white transition-colors"
                >
                  {church.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {church.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
