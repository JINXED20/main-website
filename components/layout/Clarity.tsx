import Script from 'next/script';

/**
 * Microsoft Clarity — visit counts, session recordings and heatmaps for the
 * marketing site (Clarity project "Ordex", tryordex.com).
 *
 * The project id is not a secret (every visitor's browser downloads it), so it
 * lives here instead of a Vercel env var. Only production (tryordex.com) is
 * recorded, so local dev and Vercel preview deployments don't add fake visits.
 * Masking is "Balanced": what visitors type into the contact form is hidden.
 */
const CLARITY_PROJECT_ID = 'zg4o8covzs';

export function Clarity({ locale }: { locale: string }) {
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`if (/(^|\\.)tryordex\\.com$/.test(location.hostname)) {
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");
  clarity("set","locale","${locale}");
}`}
    </Script>
  );
}
