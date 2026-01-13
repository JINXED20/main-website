// Navigation Links
export const navLinks = [
  { labelKey: 'nav.features', href: '#features' },
  { labelKey: 'nav.integrations', href: '#integrations' },
  { labelKey: 'nav.pricing', href: '#pricing' },
  { labelKey: 'nav.docs', href: '#docs' },
  { labelKey: 'nav.faq', href: '#faq' },
] as const;

export const NAV_LINKS = [
  { labelKey: 'features', href: '#features' },
  { labelKey: 'integrations', href: '#integrations' },
  { labelKey: 'pricing', href: '#pricing' },
  { labelKey: 'docs', href: '#docs' },
  { labelKey: 'faq', href: '#faq' },
] as const;

// Stats Data
export const statsData = [
  { target: 50, suffix: '', labelKey: 'stats.deliveries' },
  { target: 99.9, suffix: '%', labelKey: 'stats.uptime', decimals: 1 },
  { target: 120, suffix: '+', labelKey: 'stats.carriers' },
  { target: 45, prefix: '<', suffix: 'ms', labelKey: 'stats.response' },
] as const;

export const STATS = [
  { target: 50, suffix: 'M+', labelKey: 'deliveries' },
  { target: 99.9, suffix: '%', labelKey: 'uptime', decimals: 1 },
  { target: 120, suffix: '+', labelKey: 'carriers' },
  { target: 45, prefix: '<', suffix: 'ms', labelKey: 'response' },
] as const;

// Client Logos
export const clientLogos = [
  'Shopify',
  'Amazon',
  'FedEx',
  'DHL',
  'Stripe',
  'UPS',
  'Walmart',
  'Target',
] as const;

// Integration Platforms
export const integrations = [
  { name: 'Shopify', icon: 'layers' },
  { name: 'WooCommerce', icon: 'linkedin' },
  { name: 'Magento', icon: 'activity' },
  { name: 'Salesforce', icon: 'shield' },
  { name: 'SAP', icon: 'monitor' },
  { name: 'NetSuite', icon: 'box' },
  { name: 'Zapier', icon: 'clock' },
  { name: 'Slack', icon: 'slack' },
  { name: 'Webhooks', icon: 'mail' },
  { name: 'REST API', icon: 'layers' },
  { name: 'BigCommerce', icon: 'database' },
  { name: 'Custom', icon: 'user-plus' },
] as const;

export const INTEGRATIONS = [
  { name: 'Shopify', icon: '🛒' },
  { name: 'WooCommerce', icon: '🔌' },
  { name: 'Magento', icon: '🎯' },
  { name: 'Salesforce', icon: '☁️' },
  { name: 'SAP', icon: '📊' },
  { name: 'NetSuite', icon: '📦' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Slack', icon: '💬' },
] as const;

// SDK Tags
export const sdkTags = ['Node.js', 'Python', 'Go', 'Ruby', 'PHP', 'Java'] as const;

// Features for Bento Grid
export const FEATURES = [
  { id: 'realtime', titleKey: 'realtime.title', descKey: 'realtime.desc', pattern: 'waves' as const, size: 'large' as const },
  { id: 'multicarrier', titleKey: 'multicarrier.title', descKey: 'multicarrier.desc', pattern: 'circles' as const },
  { id: 'rates', titleKey: 'rates.title', descKey: 'rates.desc', pattern: 'grid' as const },
  { id: 'labels', titleKey: 'labels.title', descKey: 'labels.desc', pattern: 'dots' as const },
  { id: 'webhooks', titleKey: 'webhooks.title', descKey: 'webhooks.desc', pattern: 'blob' as const, size: 'large' as const },
  { id: 'analytics', titleKey: 'analytics.title', descKey: 'analytics.desc', pattern: 'lines' as const },
] as const;

// Testimonials
export const testimonials = [
  {
    id: '1',
    text: '"ORDEX transformed our delivery operations. Integration took less than a day and we\'ve seen a 40% improvement in delivery times."',
    author: 'John Davis',
    role: 'CTO',
    company: 'ShipFast',
    initials: 'JD',
  },
  {
    id: '2',
    text: '"The best delivery API we\'ve ever used. Clean documentation, reliable webhooks, and their support team is incredibly responsive."',
    author: 'Sarah Miller',
    role: 'Engineering Lead',
    company: 'Commerce+',
    initials: 'SM',
  },
  {
    id: '3',
    text: '"We switched from building our own logistics system to ORDEX. Best decision we made. Saved us 6 months of development time."',
    author: 'Alex Kim',
    role: 'Founder',
    company: 'QuickDeliver',
    initials: 'AK',
  },
  {
    id: '4',
    text: '"Finally, a delivery API that just works. The multi-carrier support is phenomenal and the rate shopping saves us thousands monthly."',
    author: 'Rachel Chen',
    role: 'VP Operations',
    company: 'Boxed',
    initials: 'RC',
  },
] as const;

export const TESTIMONIALS = testimonials;

// FAQ Items
export const faqItems = [
  { questionKey: 'faq.q1', answerKey: 'faq.a1' },
  { questionKey: 'faq.q2', answerKey: 'faq.a2' },
  { questionKey: 'faq.q3', answerKey: 'faq.a3' },
  { questionKey: 'faq.q4', answerKey: 'faq.a4' },
  { questionKey: 'faq.q5', answerKey: 'faq.a5' },
] as const;

export const FAQ_ITEMS = [
  { questionKey: 'q1' },
  { questionKey: 'q2' },
  { questionKey: 'q3' },
  { questionKey: 'q4' },
  { questionKey: 'q5' },
] as const;

// Pricing Plans
export const pricingPlans = [
  {
    nameKey: 'pricing.starter.name',
    price: '$0',
    descKey: 'pricing.starter.desc',
    features: [
      'pricing.starter.f1',
      'pricing.starter.f2',
      'pricing.starter.f3',
      'pricing.starter.f4',
      'pricing.starter.f5',
    ],
    ctaKey: 'pricing.starter.cta',
    featured: false,
    variant: 'outline' as const,
  },
  {
    nameKey: 'pricing.growth.name',
    price: '$99',
    descKey: 'pricing.growth.desc',
    features: [
      'pricing.growth.f1',
      'pricing.growth.f2',
      'pricing.growth.f3',
      'pricing.growth.f4',
      'pricing.growth.f5',
    ],
    ctaKey: 'pricing.growth.cta',
    featured: true,
    variant: 'primary' as const,
  },
  {
    nameKey: 'pricing.enterprise.name',
    priceKey: 'pricing.enterprise.price',
    descKey: 'pricing.enterprise.desc',
    features: [
      'pricing.enterprise.f1',
      'pricing.enterprise.f2',
      'pricing.enterprise.f3',
      'pricing.enterprise.f4',
      'pricing.enterprise.f5',
    ],
    ctaKey: 'pricing.enterprise.cta',
    featured: false,
    variant: 'outline' as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    nameKey: 'starter',
    price: '$0',
    features: ['f1', 'f2', 'f3', 'f4', 'f5'] as readonly string[],
    featured: false,
    variant: 'outline' as const,
  },
  {
    nameKey: 'growth',
    price: '$99',
    features: ['f1', 'f2', 'f3', 'f4', 'f5'] as readonly string[],
    featured: true,
    variant: 'primary' as const,
  },
  {
    nameKey: 'enterprise',
    features: ['f1', 'f2', 'f3', 'f4', 'f5'] as readonly string[],
    featured: false,
    variant: 'outline' as const,
  },
] as const;

// Footer Locations
export const footerLocations = [
  { cityKey: 'footer.loc1.city', addressKey: 'footer.loc1.address' },
  { cityKey: 'footer.loc2.city', addressKey: 'footer.loc2.address' },
  { cityKey: 'footer.loc3.city', addressKey: 'footer.loc3.address' },
] as const;

export const LOCATIONS = [
  { cityKey: 'riyadh', addressKey: 'riyadhAddress' },
  { cityKey: 'dubai', addressKey: 'dubaiAddress' },
  { cityKey: 'cairo', addressKey: 'cairoAddress' },
] as const;

// Social Links
export const socialLinks = [
  { name: 'Twitter', icon: 'X', href: '#' },
  { name: 'GitHub', icon: 'O', href: '#' },
  { name: 'LinkedIn', icon: 'in', href: '#' },
  { name: 'Instagram', icon: '@', href: '#' },
] as const;

export const SOCIAL_LINKS = [
  { name: 'Twitter', icon: '𝕏', href: '#' },
  { name: 'GitHub', icon: '⌘', href: '#' },
  { name: 'LinkedIn', icon: 'in', href: '#' },
  { name: 'Discord', icon: '🎮', href: '#' },
] as const;

// Code Examples
export const codeExamples = {
  nodejs: `import Ordex from '@ordex/sdk';

const client = new Ordex('sk_live_...');

// Create a shipment
const shipment = await client.shipments.create({
  origin: 'warehouse_sf',
  destination: { address: '123 Main St' },
  carrier: 'auto'
});

console.log(shipment.tracking_url);`,
  python: `from ordex import Ordex

client = Ordex('sk_live_...')

# Create a shipment
shipment = client.shipments.create(
    origin='warehouse_sf',
    destination={'address': '123 Main St'},
    carrier='auto'
)

print(shipment.tracking_url)`,
  curl: `curl -X POST https://api.ordex.io/v1/shipments \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "origin": "warehouse_sf",
    "destination": {"address": "123 Main St"},
    "carrier": "auto"
  }'`,
} as const;
