// Canonical origin. The apex (tryordex.com) redirects to www, so every
// canonical, sitemap and OG URL must use www to avoid pointing at a redirect.
export const SITE_URL = 'https://www.tryordex.com';

export const CONTACT_EMAIL = 'info@tryordex.com';
export const CONTACT_PHONES = ['+963964606440', '+963992044876'] as const;

// Leads (merchants and carriers) land in this WhatsApp chat.
export const WHATSAPP_NUMBER = '963964606440';

export function whatsappUrl(text?: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

export const GOVERNORATES = [
  'damascus',
  'rifDimashq',
  'aleppo',
  'homs',
  'hama',
  'latakia',
  'tartus',
  'idlib',
  'daraa',
  'suwayda',
  'quneitra',
  'deirEzZor',
  'raqqa',
  'hasakah',
] as const;
