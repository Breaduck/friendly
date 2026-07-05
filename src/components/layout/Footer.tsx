import { church } from "@/data/church";
import { NAV, NAV_LABELS, type NavKey } from "@/lib/nav";

const footerLinks = Object.entries(NAV_LABELS).filter(
  ([key]) => key !== "hero"
) as [NavKey, string][];

export function Footer() {
  return (
    <footer className="bg-ink text-muted">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-warm-white font-bold text-lg mb-4">
              {church.name}
            </h3>
            <p className="text-sm leading-relaxed">
              {church.denomination}
              <br />
              지역 사회와 함께하는 교회
            </p>
          </div>

          <div>
            <h4 className="text-warm-white font-semibold mb-4">바로가기</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map(([key, label]) => (
                <a
                  key={key}
                  href={`#${NAV[key]}`}
                  className="text-sm hover:text-warm-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-warm-white font-semibold mb-4">연락처</h4>
            <address className="not-italic text-sm leading-relaxed space-y-1">
              <p>{church.addressFull}</p>
              <p>
                {church.nearestStation} 도보 {church.walkingMinutes}분
              </p>
              <p>
                <a
                  href={`tel:${church.phone}`}
                  className="hover:text-warm-white transition-colors"
                >
                  {church.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${church.email}`}
                  className="hover:text-warm-white transition-colors"
                >
                  {church.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal text-center text-xs">
          <p>
            © {new Date().getFullYear()} {church.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
