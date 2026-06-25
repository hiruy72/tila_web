/**
 * Rich image sets for every detail page.
 * Each page gets: hero bg, overview photo, gallery trio, and a sidebar image.
 */

const U = (id: string, w = 1200, q = 82) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export interface PageImageSet {
  hero: string;       // Full-bleed hero background
  overview: string;   // Overview section — right column
  gallery: [string, string, string]; // 3-image gallery strip
  sidebar?: string;   // Optional sidebar / accent image
}

export const pageImageSets: Record<string, PageImageSet> = {

  // ─────────────────────── SERVICES ────────────────────────────────────────

  "/services/web-development": {
    hero:     U("1461749280684-ddd887252185", 1600),
    overview: U("1498050108023-c5249f4df085", 900),
    gallery: [
      U("1547658719-da2b51169166", 700),
      U("1531297484001-80022131f5a1", 700),
      U("1555066931-4365d14bab8c", 700),
    ],
    sidebar:  U("1504639725590-34d0984388bd", 600),
  },

  "/services/web-development/business-websites": {
    hero:     U("1497366216548-37526070297c", 1600),
    overview: U("1556742049-0cfed4f6a45d", 900),
    gallery: [
      U("1460925895917-afdab827c52f", 700),
      U("1507003211169-0a1dd7228f2d", 700),
      U("1551288049-bebda4e38f71", 700),
    ],
  },

  "/services/web-development/landing-pages": {
    hero:     U("1517180102446-6c88f8bcadc9", 1600),
    overview: U("1558655146-d09347e92766", 900),
    gallery: [
      U("1432888622747-4eb9a8f2c293", 700),
      U("1467232004584-a241de8bcf5d", 700),
      U("1519389950473-47ba0277781c", 700),
    ],
  },

  "/services/web-development/e-commerce": {
    hero:     U("1556742049-0cfed4f6a45d", 1600),
    overview: U("1472851294608-062f824d29cc", 900),
    gallery: [
      U("1607082348824-0a96f2a4b9da", 700),
      U("1563013544-824ae1b704d3", 700),
      U("1580910051074-3eb694886505", 700),
    ],
  },

  "/services/web-development/custom-cms": {
    hero:     U("1499750310107-5fef28a66643", 1600),
    overview: U("1499951360447-b19be8fe80f5", 900),
    gallery: [
      U("1542744173-8e7e53415bb0", 700),
      U("1512941937669-90a1b58e7e9c", 700),
      U("1526374965328-7f61d4dc18c5", 700),
    ],
  },

  // ── Application Development ───────────────────────────────────────────────

  "/services/application-development": {
    hero:     U("1512941937669-90a1b58e7e9c", 1600),
    overview: U("1551650975-d300b3f3e064", 900),
    gallery: [
      U("1593642632559-0c6d3fc62b89", 700),
      U("1467232004584-a241de8bcf5d", 700),
      U("1519389950473-47ba0277781c", 700),
    ],
    sidebar:  U("1526374965328-7f61d4dc18c5", 600),
  },

  "/services/application-development/native-apps": {
    hero:     U("1512941937669-90a1b58e7e9c", 1600),
    overview: U("1605236598860-5a9b3dd24490", 900),
    gallery: [
      U("1607252650355-f7fd0460ccdb", 700),
      U("1551650975-d300b3f3e064", 700),
      U("1526374965328-7f61d4dc18c5", 700),
    ],
  },

  "/services/application-development/flutter": {
    hero:     U("1551650975-d300b3f3e064", 1600),
    overview: U("1607252650355-f7fd0460ccdb", 900),
    gallery: [
      U("1512941937669-90a1b58e7e9c", 700),
      U("1519389950473-47ba0277781c", 700),
      U("1605236598860-5a9b3dd24490", 700),
    ],
  },

  "/services/application-development/pwa": {
    hero:     U("1467232004584-a241de8bcf5d", 1600),
    overview: U("1519389950473-47ba0277781c", 900),
    gallery: [
      U("1551650975-d300b3f3e064", 700),
      U("1512941937669-90a1b58e7e9c", 700),
      U("1526374965328-7f61d4dc18c5", 700),
    ],
  },

  "/services/application-development/desktop": {
    hero:     U("1593642632559-0c6d3fc62b89", 1600),
    overview: U("1496181156857-c4ab2c5f75ca", 900),
    gallery: [
      U("1484417894907-623942c8ee29", 700),
      U("1517694712202-14dd9538aa97", 700),
      U("1498049794561-7780e7231661", 700),
    ],
  },

  // ── ERP Integrations ──────────────────────────────────────────────────────

  "/services/erp-integrations": {
    hero:     U("1504868584819-f8681083bd4a", 1600),
    overview: U("1542744173-8e7e53415bb0", 900),
    gallery: [
      U("1580582932707-520aed937b7b", 700),
      U("1516549655169-df83a0774514", 700),
      U("1586528116311-ad8dd3c8310d", 700),
    ],
    sidebar:  U("1554224155-6726b3ff858f", 600),
  },

  "/services/erp-integrations/school-erp": {
    hero:     U("1580582932707-520aed937b7b", 1600),
    overview: U("1427504494785-3a9ca7044f45", 900),
    gallery: [
      U("1503676260728-1c00da094a0b", 700),
      U("1522202176988-66273c2fd55f", 700),
      U("1516321318423-f06f85e504b3", 700),
    ],
  },

  "/services/erp-integrations/hospital-systems": {
    hero:     U("1516549655169-df83a0774514", 1600),
    overview: U("1551601651-2a8555f1a136", 900),
    gallery: [
      U("1519494026892-80bbd2d6fd0d", 700),
      U("1584308666744-24d5c474f2ae", 700),
      U("1558618666-fcd25c85cd64", 700),
    ],
  },

  "/services/erp-integrations/warehouse": {
    hero:     U("1586528116311-ad8dd3c8310d", 1600),
    overview: U("1553413077-190dd305871c", 900),
    gallery: [
      U("1601584462990-3a7db1e40f57", 700),
      U("1507679799987-c73779587ccf", 700),
      U("1566576912321-d58dab8a46d8", 700),
    ],
  },

  "/services/erp-integrations/accounting": {
    hero:     U("1554224155-6726b3ff858f", 1600),
    overview: U("1450101499163-c8848c66ca85", 900),
    gallery: [
      U("1551288049-bebda4e38f71", 700),
      U("1460925895917-afdab827c52f", 700),
      U("1563986768494-4dee2763ff3f", 700),
    ],
  },

  // ── AI & Machine Learning ─────────────────────────────────────────────────

  "/services/ai-machine-learning": {
    hero:     U("1677442135703-1787eea5ce01", 1600),
    overview: U("1655720828083-1d5d962ae27e", 900),
    gallery: [
      U("1531746790731-6c087fecd65a", 700),
      U("1551288049-bebda4e38f71", 700),
      U("1620712943543-bcc4688e7485", 700),
    ],
    sidebar:  U("1485827404703-89b55fcc595e", 600),
  },

  "/services/ai-machine-learning/generative-ai": {
    hero:     U("1677442135703-1787eea5ce01", 1600),
    overview: U("1620712943543-bcc4688e7485", 900),
    gallery: [
      U("1655720828083-1d5d962ae27e", 700),
      U("1485827404703-89b55fcc595e", 700),
      U("1593642632632-d30c1ef2d7b5", 700),
    ],
  },

  "/services/ai-machine-learning/chatbots": {
    hero:     U("1531746790731-6c087fecd65a", 1600),
    overview: U("1611532736597-de2d4265fba3", 900),
    gallery: [
      U("1677442135703-1787eea5ce01", 700),
      U("1655720828083-1d5d962ae27e", 700),
      U("1485827404703-89b55fcc595e", 700),
    ],
  },

  "/services/ai-machine-learning/nlp": {
    hero:     U("1655720828083-1d5d962ae27e", 1600),
    overview: U("1499750310107-5fef28a66643", 900),
    gallery: [
      U("1542744173-8e7e53415bb0", 700),
      U("1526374965328-7f61d4dc18c5", 700),
      U("1620712943543-bcc4688e7485", 700),
    ],
  },

  "/services/ai-machine-learning/predictive-bi": {
    hero:     U("1551288049-bebda4e38f71", 1600),
    overview: U("1460925895917-afdab827c52f", 900),
    gallery: [
      U("1563986768494-4dee2763ff3f", 700),
      U("1504868584819-f8681083bd4a", 700),
      U("1677442135703-1787eea5ce01", 700),
    ],
  },

  // ── Cybersecurity & Cloud ─────────────────────────────────────────────────

  "/services/cybersecurity-cloud": {
    hero:     U("1563013544-824ae1b704d3", 1600),
    overview: U("1614064641634-cd7a7e2c8e98", 900),
    gallery: [
      U("1618401471353-b98afee0b2eb", 700),
      U("1544197150-b99a580bb7a8", 700),
      U("1558618666-fcd25c85cd64", 700),
    ],
    sidebar:  U("1510511459019-5dda7724fd87", 600),
  },

  "/services/cybersecurity-cloud/security-audits": {
    hero:     U("1563013544-824ae1b704d3", 1600),
    overview: U("1510511459019-5dda7724fd87", 900),
    gallery: [
      U("1558618666-fcd25c85cd64", 700),
      U("1614064641634-cd7a7e2c8e98", 700),
      U("1526374965328-7f61d4dc18c5", 700),
    ],
  },

  "/services/cybersecurity-cloud/penetration-testing": {
    hero:     U("1614064641634-cd7a7e2c8e98", 1600),
    overview: U("1558618666-fcd25c85cd64", 900),
    gallery: [
      U("1563013544-824ae1b704d3", 700),
      U("1510511459019-5dda7724fd87", 700),
      U("1544197150-b99a580bb7a8", 700),
    ],
  },

  "/services/cybersecurity-cloud/cicd": {
    hero:     U("1618401471353-b98afee0b2eb", 1600),
    overview: U("1504639725590-34d0984388bd", 900),
    gallery: [
      U("1498049794561-7780e7231661", 700),
      U("1461749280684-ddd887252185", 700),
      U("1544197150-b99a580bb7a8", 700),
    ],
  },

  "/services/cybersecurity-cloud/aws-docker": {
    hero:     U("1544197150-b99a580bb7a8", 1600),
    overview: U("1518770660439-4636190af475", 900),
    gallery: [
      U("1618401471353-b98afee0b2eb", 700),
      U("1504639725590-34d0984388bd", 700),
      U("1563013544-824ae1b704d3", 700),
    ],
  },

  // ─────────────────────── SOLUTIONS ───────────────────────────────────────

  "/solutions/edutech-core": {
    hero:     U("1503676260728-1c00da094a0b", 1600),
    overview: U("1522202176988-66273c2fd55f", 900),
    gallery: [
      U("1516321318423-f06f85e504b3", 700),
      U("1427504494785-3a9ca7044f45", 700),
      U("1580582932707-520aed937b7b", 700),
    ],
    sidebar:  U("1488190211105-8fb0d4d0d90a", 600),
  },

  "/solutions/edutech-core/school-erp": {
    hero:     U("1580582932707-520aed937b7b", 1600),
    overview: U("1427504494785-3a9ca7044f45", 900),
    gallery: [
      U("1503676260728-1c00da094a0b", 700),
      U("1522202176988-66273c2fd55f", 700),
      U("1516321318423-f06f85e504b3", 700),
    ],
  },

  "/solutions/edutech-core/lms": {
    hero:     U("1516321318423-f06f85e504b3", 1600),
    overview: U("1488190211105-8fb0d4d0d90a", 900),
    gallery: [
      U("1503676260728-1c00da094a0b", 700),
      U("1427504494785-3a9ca7044f45", 700),
      U("1522202176988-66273c2fd55f", 700),
    ],
  },

  "/solutions/edutech-core/dashboard": {
    hero:     U("1522202176988-66273c2fd55f", 1600),
    overview: U("1503676260728-1c00da094a0b", 900),
    gallery: [
      U("1488190211105-8fb0d4d0d90a", 700),
      U("1516321318423-f06f85e504b3", 700),
      U("1580582932707-520aed937b7b", 700),
    ],
  },

  "/solutions/healthtech-erp": {
    hero:     U("1519494026892-80bbd2d6fd0d", 1600),
    overview: U("1551601651-2a8555f1a136", 900),
    gallery: [
      U("1516549655169-df83a0774514", 700),
      U("1584308666744-24d5c474f2ae", 700),
      U("1558618666-fcd25c85cd64", 700),
    ],
    sidebar:  U("1530026405686-50ce7eb39fc2", 600),
  },

  "/solutions/healthtech-erp/admission": {
    hero:     U("1516549655169-df83a0774514", 1600),
    overview: U("1530026405686-50ce7eb39fc2", 900),
    gallery: [
      U("1519494026892-80bbd2d6fd0d", 700),
      U("1584308666744-24d5c474f2ae", 700),
      U("1551601651-2a8555f1a136", 700),
    ],
  },

  "/solutions/healthtech-erp/pharmacy": {
    hero:     U("1584308666744-24d5c474f2ae", 1600),
    overview: U("1563213126-b862aabf57c5", 900),
    gallery: [
      U("1516549655169-df83a0774514", 700),
      U("1519494026892-80bbd2d6fd0d", 700),
      U("1551601651-2a8555f1a136", 700),
    ],
  },

  "/solutions/healthtech-erp/clinic": {
    hero:     U("1551601651-2a8555f1a136", 1600),
    overview: U("1519494026892-80bbd2d6fd0d", 900),
    gallery: [
      U("1530026405686-50ce7eb39fc2", 700),
      U("1584308666744-24d5c474f2ae", 700),
      U("1516549655169-df83a0774514", 700),
    ],
  },

  "/solutions/retail-fin": {
    hero:     U("1556742049-0cfed4f6a45d", 1600),
    overview: U("1580910051074-3eb694886505", 900),
    gallery: [
      U("1586528116311-ad8dd3c8310d", 700),
      U("1472851294608-062f824d29cc", 700),
      U("1554224155-6726b3ff858f", 700),
    ],
    sidebar:  U("1607082348824-0a96f2a4b9da", 600),
  },

  "/solutions/retail-fin/warehouse": {
    hero:     U("1586528116311-ad8dd3c8310d", 1600),
    overview: U("1553413077-190dd305871c", 900),
    gallery: [
      U("1601584462990-3a7db1e40f57", 700),
      U("1556742049-0cfed4f6a45d", 700),
      U("1507679799987-c73779587ccf", 700),
    ],
  },

  "/solutions/retail-fin/pos": {
    hero:     U("1556742049-0cfed4f6a45d", 1600),
    overview: U("1607082348824-0a96f2a4b9da", 900),
    gallery: [
      U("1472851294608-062f824d29cc", 700),
      U("1580910051074-3eb694886505", 700),
      U("1586528116311-ad8dd3c8310d", 700),
    ],
  },

  "/solutions/retail-fin/accounting": {
    hero:     U("1554224155-6726b3ff858f", 1600),
    overview: U("1563986768494-4dee2763ff3f", 900),
    gallery: [
      U("1450101499163-c8848c66ca85", 700),
      U("1460925895917-afdab827c52f", 700),
      U("1551288049-bebda4e38f71", 700),
    ],
  },

  "/solutions/saas-ai": {
    hero:     U("1677442135703-1787eea5ce01", 1600),
    overview: U("1531746790731-6c087fecd65a", 900),
    gallery: [
      U("1611532736597-de2d4265fba3", 700),
      U("1655720828083-1d5d962ae27e", 700),
      U("1620712943543-bcc4688e7485", 700),
    ],
    sidebar:  U("1485827404703-89b55fcc595e", 600),
  },

  "/solutions/saas-ai/support-ticket": {
    hero:     U("1531746790731-6c087fecd65a", 1600),
    overview: U("1542744173-8e7e53415bb0", 900),
    gallery: [
      U("1611532736597-de2d4265fba3", 700),
      U("1460925895917-afdab827c52f", 700),
      U("1677442135703-1787eea5ce01", 700),
    ],
  },

  "/solutions/saas-ai/whatsapp-bot": {
    hero:     U("1611532736597-de2d4265fba3", 1600),
    overview: U("1677442135703-1787eea5ce01", 900),
    gallery: [
      U("1531746790731-6c087fecd65a", 700),
      U("1485827404703-89b55fcc595e", 700),
      U("1620712943543-bcc4688e7485", 700),
    ],
  },

  "/solutions/saas-ai/multi-tenant": {
    hero:     U("1618401471353-b98afee0b2eb", 1600),
    overview: U("1544197150-b99a580bb7a8", 900),
    gallery: [
      U("1504639725590-34d0984388bd", 700),
      U("1461749280684-ddd887252185", 700),
      U("1677442135703-1787eea5ce01", 700),
    ],
  },

  // ─────────────────────── INDUSTRIES ──────────────────────────────────────

  "/industries/healthcare-edtech": {
    hero:     U("1519494026892-80bbd2d6fd0d", 1600),
    overview: U("1516549655169-df83a0774514", 900),
    gallery: [
      U("1551601651-2a8555f1a136", 700),
      U("1503676260728-1c00da094a0b", 700),
      U("1580582932707-520aed937b7b", 700),
    ],
    sidebar:  U("1530026405686-50ce7eb39fc2", 600),
  },

  "/industries/healthcare-edtech/hipaa": {
    hero:     U("1563013544-824ae1b704d3", 1600),
    overview: U("1510511459019-5dda7724fd87", 900),
    gallery: [
      U("1519494026892-80bbd2d6fd0d", 700),
      U("1558618666-fcd25c85cd64", 700),
      U("1526374965328-7f61d4dc18c5", 700),
    ],
  },

  "/industries/healthcare-edtech/lms": {
    hero:     U("1516321318423-f06f85e504b3", 1600),
    overview: U("1503676260728-1c00da094a0b", 900),
    gallery: [
      U("1488190211105-8fb0d4d0d90a", 700),
      U("1427504494785-3a9ca7044f45", 700),
      U("1522202176988-66273c2fd55f", 700),
    ],
  },

  "/industries/healthcare-edtech/patient-flows": {
    hero:     U("1551601651-2a8555f1a136", 1600),
    overview: U("1530026405686-50ce7eb39fc2", 900),
    gallery: [
      U("1519494026892-80bbd2d6fd0d", 700),
      U("1516549655169-df83a0774514", 700),
      U("1584308666744-24d5c474f2ae", 700),
    ],
  },

  "/industries/fintech-billing": {
    hero:     U("1554224155-6726b3ff858f", 1600),
    overview: U("1460925895917-afdab827c52f", 900),
    gallery: [
      U("1563986768494-4dee2763ff3f", 700),
      U("1551288049-bebda4e38f71", 700),
      U("1450101499163-c8848c66ca85", 700),
    ],
    sidebar:  U("1504868584819-f8681083bd4a", 600),
  },

  "/industries/fintech-billing/gateways": {
    hero:     U("1556742049-0cfed4f6a45d", 1600),
    overview: U("1607082348824-0a96f2a4b9da", 900),
    gallery: [
      U("1554224155-6726b3ff858f", 700),
      U("1563986768494-4dee2763ff3f", 700),
      U("1460925895917-afdab827c52f", 700),
    ],
  },

  "/industries/fintech-billing/subscriptions": {
    hero:     U("1551288049-bebda4e38f71", 1600),
    overview: U("1504868584819-f8681083bd4a", 900),
    gallery: [
      U("1554224155-6726b3ff858f", 700),
      U("1460925895917-afdab827c52f", 700),
      U("1563986768494-4dee2763ff3f", 700),
    ],
  },

  "/industries/fintech-billing/vat-tax": {
    hero:     U("1450101499163-c8848c66ca85", 1600),
    overview: U("1563986768494-4dee2763ff3f", 900),
    gallery: [
      U("1554224155-6726b3ff858f", 700),
      U("1551288049-bebda4e38f71", 700),
      U("1504868584819-f8681083bd4a", 700),
    ],
  },

  "/industries/commerce": {
    hero:     U("1472851294608-062f824d29cc", 1600),
    overview: U("1556742049-0cfed4f6a45d", 900),
    gallery: [
      U("1607082348824-0a96f2a4b9da", 700),
      U("1580910051074-3eb694886505", 700),
      U("1586528116311-ad8dd3c8310d", 700),
    ],
    sidebar:  U("1607082348824-0a96f2a4b9da", 600),
  },

  "/industries/commerce/headless-api": {
    hero:     U("1593642632559-0c6d3fc62b89", 1600),
    overview: U("1461749280684-ddd887252185", 900),
    gallery: [
      U("1498049794561-7780e7231661", 700),
      U("1504639725590-34d0984388bd", 700),
      U("1544197150-b99a580bb7a8", 700),
    ],
  },

  "/industries/commerce/inventory": {
    hero:     U("1586528116311-ad8dd3c8310d", 1600),
    overview: U("1553413077-190dd305871c", 900),
    gallery: [
      U("1601584462990-3a7db1e40f57", 700),
      U("1507679799987-c73779587ccf", 700),
      U("1472851294608-062f824d29cc", 700),
    ],
  },

  "/industries/commerce/checkout": {
    hero:     U("1607082348824-0a96f2a4b9da", 1600),
    overview: U("1472851294608-062f824d29cc", 900),
    gallery: [
      U("1556742049-0cfed4f6a45d", 700),
      U("1580910051074-3eb694886505", 700),
      U("1607082348824-0a96f2a4b9da", 700),
    ],
  },

  "/industries/ai-platforms": {
    hero:     U("1677442135703-1787eea5ce01", 1600),
    overview: U("1620712943543-bcc4688e7485", 900),
    gallery: [
      U("1655720828083-1d5d962ae27e", 700),
      U("1485827404703-89b55fcc595e", 700),
      U("1531746790731-6c087fecd65a", 700),
    ],
    sidebar:  U("1593642632632-d30c1ef2d7b5", 600),
  },

  "/industries/ai-platforms/rag": {
    hero:     U("1655720828083-1d5d962ae27e", 1600),
    overview: U("1499750310107-5fef28a66643", 900),
    gallery: [
      U("1677442135703-1787eea5ce01", 700),
      U("1542744173-8e7e53415bb0", 700),
      U("1620712943543-bcc4688e7485", 700),
    ],
  },

  "/industries/ai-platforms/mlops": {
    hero:     U("1551288049-bebda4e38f71", 1600),
    overview: U("1677442135703-1787eea5ce01", 900),
    gallery: [
      U("1485827404703-89b55fcc595e", 700),
      U("1504868584819-f8681083bd4a", 700),
      U("1655720828083-1d5d962ae27e", 700),
    ],
  },

  "/industries/ai-platforms/ocr": {
    hero:     U("1499750310107-5fef28a66643", 1600),
    overview: U("1655720828083-1d5d962ae27e", 900),
    gallery: [
      U("1542744173-8e7e53415bb0", 700),
      U("1526374965328-7f61d4dc18c5", 700),
      U("1677442135703-1787eea5ce01", 700),
    ],
  },

  // ─────────────────────── TECHNOLOGIES ────────────────────────────────────

  // ── AI & ML group ─────────────────────────────────────────────────────────
  "/technologies/ai-ml": {
    hero:     U("1677442135703-1787eea5ce01", 1600),
    overview: U("1620712943543-bcc4688e7485", 900),
    gallery: [
      U("1655720828083-1d5d962ae27e", 700),
      U("1531746790731-6c087fecd65a", 700),
      U("1485827404703-89b55fcc595e", 700),
    ],
    sidebar:  U("1593642632632-d30c1ef2d7b5", 600),
  },
  "/technologies/ai-ml/openai": {
    hero:     U("1677442135703-1787eea5ce01", 1600),
    overview: U("1620712943543-bcc4688e7485", 900),
    gallery: [
      U("1655720828083-1d5d962ae27e", 700),
      U("1485827404703-89b55fcc595e", 700),
      U("1531746790731-6c087fecd65a", 700),
    ],
  },
  "/technologies/ai-ml/tensorflow": {
    hero:     U("1655720828083-1d5d962ae27e", 1600),
    overview: U("1531746790731-6c087fecd65a", 900),
    gallery: [
      U("1677442135703-1787eea5ce01", 700),
      U("1620712943543-bcc4688e7485", 700),
      U("1485827404703-89b55fcc595e", 700),
    ],
  },
  "/technologies/ai-ml/pytorch": {
    hero:     U("1620712943543-bcc4688e7485", 1600),
    overview: U("1485827404703-89b55fcc595e", 900),
    gallery: [
      U("1531746790731-6c087fecd65a", 700),
      U("1677442135703-1787eea5ce01", 700),
      U("1655720828083-1d5d962ae27e", 700),
    ],
  },
  "/technologies/ai-ml/langchain": {
    hero:     U("1531746790731-6c087fecd65a", 1600),
    overview: U("1677442135703-1787eea5ce01", 900),
    gallery: [
      U("1620712943543-bcc4688e7485", 700),
      U("1655720828083-1d5d962ae27e", 700),
      U("1485827404703-89b55fcc595e", 700),
    ],
  },
  "/technologies/ai-ml/hugging-face": {
    hero:     U("1485827404703-89b55fcc595e", 1600),
    overview: U("1655720828083-1d5d962ae27e", 900),
    gallery: [
      U("1677442135703-1787eea5ce01", 700),
      U("1531746790731-6c087fecd65a", 700),
      U("1620712943543-bcc4688e7485", 700),
    ],
  },
  "/technologies/ai-ml/scikit-learn": {
    hero:     U("1542744173-8e7e53415bb0", 1600),
    overview: U("1499750310107-5fef28a66643", 900),
    gallery: [
      U("1526374965328-7f61d4dc18c5", 700),
      U("1504868584819-f8681083bd4a", 700),
      U("1620712943543-bcc4688e7485", 700),
    ],
  },
  "/technologies/ai-ml/numpy": {
    hero:     U("1526374965328-7f61d4dc18c5", 1600),
    overview: U("1542744173-8e7e53415bb0", 900),
    gallery: [
      U("1499750310107-5fef28a66643", 700),
      U("1655720828083-1d5d962ae27e", 700),
      U("1677442135703-1787eea5ce01", 700),
    ],
  },
  "/technologies/ai-ml/pandas": {
    hero:     U("1504868584819-f8681083bd4a", 1600),
    overview: U("1526374965328-7f61d4dc18c5", 900),
    gallery: [
      U("1542744173-8e7e53415bb0", 700),
      U("1460925895917-afdab827c52f", 700),
      U("1551288049-bebda4e38f71", 700),
    ],
  },
  "/technologies/ai-ml/keras": {
    hero:     U("1620712943543-bcc4688e7485", 1600),
    overview: U("1677442135703-1787eea5ce01", 900),
    gallery: [
      U("1485827404703-89b55fcc595e", 700),
      U("1531746790731-6c087fecd65a", 700),
      U("1655720828083-1d5d962ae27e", 700),
    ],
  },
  "/technologies/ai-ml/apache-spark": {
    hero:     U("1551288049-bebda4e38f71", 1600),
    overview: U("1460925895917-afdab827c52f", 900),
    gallery: [
      U("1504868584819-f8681083bd4a", 700),
      U("1542744173-8e7e53415bb0", 700),
      U("1677442135703-1787eea5ce01", 700),
    ],
  },
  "/technologies/ai-ml/python": {
    hero:     U("1499750310107-5fef28a66643", 1600),
    overview: U("1542744173-8e7e53415bb0", 900),
    gallery: [
      U("1526374965328-7f61d4dc18c5", 700),
      U("1461749280684-ddd887252185", 700),
      U("1498050108023-c5249f4df085", 700),
    ],
  },
  "/technologies/ai-ml/opencv": {
    hero:     U("1593642632632-d30c1ef2d7b5", 1600),
    overview: U("1499750310107-5fef28a66643", 900),
    gallery: [
      U("1542744173-8e7e53415bb0", 700),
      U("1655720828083-1d5d962ae27e", 700),
      U("1677442135703-1787eea5ce01", 700),
    ],
  },

  // ── Frontend group ────────────────────────────────────────────────────────
  "/technologies/frontend": {
    hero:     U("1461749280684-ddd887252185", 1600),
    overview: U("1498050108023-c5249f4df085", 900),
    gallery: [
      U("1547658719-da2b51169166", 700),
      U("1531297484001-80022131f5a1", 700),
      U("1555066931-4365d14bab8c", 700),
    ],
    sidebar:  U("1504639725590-34d0984388bd", 600),
  },
  "/technologies/frontend/react": {
    hero:     U("1517180102446-6c88f8bcadc9", 1600),
    overview: U("1547658719-da2b51169166", 900),
    gallery: [
      U("1461749280684-ddd887252185", 700),
      U("1498050108023-c5249f4df085", 700),
      U("1531297484001-80022131f5a1", 700),
    ],
  },
  "/technologies/frontend/nextjs": {
    hero:     U("1498050108023-c5249f4df085", 1600),
    overview: U("1461749280684-ddd887252185", 900),
    gallery: [
      U("1555066931-4365d14bab8c", 700),
      U("1547658719-da2b51169166", 700),
      U("1531297484001-80022131f5a1", 700),
    ],
  },
  "/technologies/frontend/tailwind-css": {
    hero:     U("1555066931-4365d14bab8c", 1600),
    overview: U("1531297484001-80022131f5a1", 900),
    gallery: [
      U("1461749280684-ddd887252185", 700),
      U("1498050108023-c5249f4df085", 700),
      U("1517180102446-6c88f8bcadc9", 700),
    ],
  },
  "/technologies/frontend/flutter": {
    hero:     U("1551650975-d300b3f3e064", 1600),
    overview: U("1607252650355-f7fd0460ccdb", 900),
    gallery: [
      U("1512941937669-90a1b58e7e9c", 700),
      U("1519389950473-47ba0277781c", 700),
      U("1605236598860-5a9b3dd24490", 700),
    ],
  },
  "/technologies/frontend/typescript": {
    hero:     U("1504639725590-34d0984388bd", 1600),
    overview: U("1461749280684-ddd887252185", 900),
    gallery: [
      U("1498050108023-c5249f4df085", 700),
      U("1547658719-da2b51169166", 700),
      U("1555066931-4365d14bab8c", 700),
    ],
  },
  "/technologies/frontend/html5": {
    hero:     U("1547658719-da2b51169166", 1600),
    overview: U("1555066931-4365d14bab8c", 900),
    gallery: [
      U("1461749280684-ddd887252185", 700),
      U("1498050108023-c5249f4df085", 700),
      U("1531297484001-80022131f5a1", 700),
    ],
  },

  // ── Backend group ─────────────────────────────────────────────────────────
  "/technologies/backend": {
    hero:     U("1593642632559-0c6d3fc62b89", 1600),
    overview: U("1484417894907-623942c8ee29", 900),
    gallery: [
      U("1517694712202-14dd9538aa97", 700),
      U("1498049794561-7780e7231661", 700),
      U("1461749280684-ddd887252185", 700),
    ],
    sidebar:  U("1504639725590-34d0984388bd", 600),
  },
  "/technologies/backend/nodejs": {
    hero:     U("1461749280684-ddd887252185", 1600),
    overview: U("1593642632559-0c6d3fc62b89", 900),
    gallery: [
      U("1484417894907-623942c8ee29", 700),
      U("1517694712202-14dd9538aa97", 700),
      U("1498049794561-7780e7231661", 700),
    ],
  },
  "/technologies/backend/nestjs": {
    hero:     U("1498049794561-7780e7231661", 1600),
    overview: U("1461749280684-ddd887252185", 900),
    gallery: [
      U("1593642632559-0c6d3fc62b89", 700),
      U("1484417894907-623942c8ee29", 700),
      U("1517694712202-14dd9538aa97", 700),
    ],
  },
  "/technologies/backend/go": {
    hero:     U("1517694712202-14dd9538aa97", 1600),
    overview: U("1498049794561-7780e7231661", 900),
    gallery: [
      U("1461749280684-ddd887252185", 700),
      U("1593642632559-0c6d3fc62b89", 700),
      U("1484417894907-623942c8ee29", 700),
    ],
  },
  "/technologies/backend/rust": {
    hero:     U("1484417894907-623942c8ee29", 1600),
    overview: U("1517694712202-14dd9538aa97", 900),
    gallery: [
      U("1498049794561-7780e7231661", 700),
      U("1593642632559-0c6d3fc62b89", 700),
      U("1461749280684-ddd887252185", 700),
    ],
  },

  // ── Mobile group ──────────────────────────────────────────────────────────
  "/technologies/mobile": {
    hero:     U("1512941937669-90a1b58e7e9c", 1600),
    overview: U("1551650975-d300b3f3e064", 900),
    gallery: [
      U("1607252650355-f7fd0460ccdb", 700),
      U("1519389950473-47ba0277781c", 700),
      U("1605236598860-5a9b3dd24490", 700),
    ],
    sidebar:  U("1467232004584-a241de8bcf5d", 600),
  },
  "/technologies/mobile/flutter": {
    hero:     U("1551650975-d300b3f3e064", 1600),
    overview: U("1607252650355-f7fd0460ccdb", 900),
    gallery: [
      U("1512941937669-90a1b58e7e9c", 700),
      U("1519389950473-47ba0277781c", 700),
      U("1605236598860-5a9b3dd24490", 700),
    ],
  },
  "/technologies/mobile/react-native": {
    hero:     U("1519389950473-47ba0277781c", 1600),
    overview: U("1512941937669-90a1b58e7e9c", 900),
    gallery: [
      U("1551650975-d300b3f3e064", 700),
      U("1607252650355-f7fd0460ccdb", 700),
      U("1605236598860-5a9b3dd24490", 700),
    ],
  },
  "/technologies/mobile/swift": {
    hero:     U("1605236598860-5a9b3dd24490", 1600),
    overview: U("1519389950473-47ba0277781c", 900),
    gallery: [
      U("1512941937669-90a1b58e7e9c", 700),
      U("1551650975-d300b3f3e064", 700),
      U("1467232004584-a241de8bcf5d", 700),
    ],
  },
  "/technologies/mobile/kotlin": {
    hero:     U("1607252650355-f7fd0460ccdb", 1600),
    overview: U("1605236598860-5a9b3dd24490", 900),
    gallery: [
      U("1519389950473-47ba0277781c", 700),
      U("1512941937669-90a1b58e7e9c", 700),
      U("1551650975-d300b3f3e064", 700),
    ],
  },

  // ── Database group ────────────────────────────────────────────────────────
  "/technologies/database": {
    hero:     U("1544197150-b99a580bb7a8", 1600),
    overview: U("1518770660439-4636190af475", 900),
    gallery: [
      U("1504868584819-f8681083bd4a", 700),
      U("1542744173-8e7e53415bb0", 700),
      U("1563986768494-4dee2763ff3f", 700),
    ],
    sidebar:  U("1460925895917-afdab827c52f", 600),
  },
  "/technologies/database/postgresql": {
    hero:     U("1504868584819-f8681083bd4a", 1600),
    overview: U("1544197150-b99a580bb7a8", 900),
    gallery: [
      U("1518770660439-4636190af475", 700),
      U("1542744173-8e7e53415bb0", 700),
      U("1563986768494-4dee2763ff3f", 700),
    ],
  },
  "/technologies/database/mongodb": {
    hero:     U("1542744173-8e7e53415bb0", 1600),
    overview: U("1504868584819-f8681083bd4a", 900),
    gallery: [
      U("1544197150-b99a580bb7a8", 700),
      U("1518770660439-4636190af475", 700),
      U("1460925895917-afdab827c52f", 700),
    ],
  },
  "/technologies/database/mysql": {
    hero:     U("1563986768494-4dee2763ff3f", 1600),
    overview: U("1542744173-8e7e53415bb0", 900),
    gallery: [
      U("1504868584819-f8681083bd4a", 700),
      U("1544197150-b99a580bb7a8", 700),
      U("1460925895917-afdab827c52f", 700),
    ],
  },

  // ── Cloud Services group ──────────────────────────────────────────────────
  "/technologies/cloud": {
    hero:     U("1618401471353-b98afee0b2eb", 1600),
    overview: U("1544197150-b99a580bb7a8", 900),
    gallery: [
      U("1563013544-824ae1b704d3", 700),
      U("1614064641634-cd7a7e2c8e98", 700),
      U("1510511459019-5dda7724fd87", 700),
    ],
    sidebar:  U("1504639725590-34d0984388bd", 600),
  },
  "/technologies/cloud/aws": {
    hero:     U("1544197150-b99a580bb7a8", 1600),
    overview: U("1618401471353-b98afee0b2eb", 900),
    gallery: [
      U("1563013544-824ae1b704d3", 700),
      U("1614064641634-cd7a7e2c8e98", 700),
      U("1510511459019-5dda7724fd87", 700),
    ],
  },
  "/technologies/cloud/vercel": {
    hero:     U("1461749280684-ddd887252185", 1600),
    overview: U("1498050108023-c5249f4df085", 900),
    gallery: [
      U("1618401471353-b98afee0b2eb", 700),
      U("1544197150-b99a580bb7a8", 700),
      U("1504639725590-34d0984388bd", 700),
    ],
  },
  "/technologies/cloud/google-cloud": {
    hero:     U("1614064641634-cd7a7e2c8e98", 1600),
    overview: U("1563013544-824ae1b704d3", 900),
    gallery: [
      U("1618401471353-b98afee0b2eb", 700),
      U("1544197150-b99a580bb7a8", 700),
      U("1510511459019-5dda7724fd87", 700),
    ],
  },

  // ── DevOps group ──────────────────────────────────────────────────────────
  "/technologies/devops": {
    hero:     U("1618401471353-b98afee0b2eb", 1600),
    overview: U("1504639725590-34d0984388bd", 900),
    gallery: [
      U("1498049794561-7780e7231661", 700),
      U("1461749280684-ddd887252185", 700),
      U("1544197150-b99a580bb7a8", 700),
    ],
    sidebar:  U("1563013544-824ae1b704d3", 600),
  },
  "/technologies/devops/docker": {
    hero:     U("1504639725590-34d0984388bd", 1600),
    overview: U("1618401471353-b98afee0b2eb", 900),
    gallery: [
      U("1498049794561-7780e7231661", 700),
      U("1461749280684-ddd887252185", 700),
      U("1544197150-b99a580bb7a8", 700),
    ],
  },
  "/technologies/devops/kubernetes": {
    hero:     U("1544197150-b99a580bb7a8", 1600),
    overview: U("1504639725590-34d0984388bd", 900),
    gallery: [
      U("1618401471353-b98afee0b2eb", 700),
      U("1563013544-824ae1b704d3", 700),
      U("1461749280684-ddd887252185", 700),
    ],
  },
  "/technologies/devops/github-actions": {
    hero:     U("1461749280684-ddd887252185", 1600),
    overview: U("1498049794561-7780e7231661", 900),
    gallery: [
      U("1618401471353-b98afee0b2eb", 700),
      U("1504639725590-34d0984388bd", 700),
      U("1544197150-b99a580bb7a8", 700),
    ],
  },

  // ── Frameworks & Platforms group ──────────────────────────────────────────
  "/technologies/frameworks": {
    hero:     U("1499750310107-5fef28a66643", 1600),
    overview: U("1461749280684-ddd887252185", 900),
    gallery: [
      U("1498050108023-c5249f4df085", 700),
      U("1593642632559-0c6d3fc62b89", 700),
      U("1484417894907-623942c8ee29", 700),
    ],
    sidebar:  U("1517694712202-14dd9538aa97", 600),
  },
  "/technologies/frameworks/nextjs": {
    hero:     U("1498050108023-c5249f4df085", 1600),
    overview: U("1461749280684-ddd887252185", 900),
    gallery: [
      U("1499750310107-5fef28a66643", 700),
      U("1593642632559-0c6d3fc62b89", 700),
      U("1484417894907-623942c8ee29", 700),
    ],
  },
  "/technologies/frameworks/nestjs": {
    hero:     U("1593642632559-0c6d3fc62b89", 1600),
    overview: U("1499750310107-5fef28a66643", 900),
    gallery: [
      U("1461749280684-ddd887252185", 700),
      U("1498050108023-c5249f4df085", 700),
      U("1517694712202-14dd9538aa97", 700),
    ],
  },
  "/technologies/frameworks/django": {
    hero:     U("1484417894907-623942c8ee29", 1600),
    overview: U("1593642632559-0c6d3fc62b89", 900),
    gallery: [
      U("1499750310107-5fef28a66643", 700),
      U("1517694712202-14dd9538aa97", 700),
      U("1461749280684-ddd887252185", 700),
    ],
  },
  "/technologies/frameworks/fastapi": {
    hero:     U("1517694712202-14dd9538aa97", 1600),
    overview: U("1484417894907-623942c8ee29", 900),
    gallery: [
      U("1593642632559-0c6d3fc62b89", 700),
      U("1499750310107-5fef28a66643", 700),
      U("1461749280684-ddd887252185", 700),
    ],
  },

  // ── Automation & Integration group ────────────────────────────────────────
  "/technologies/automation": {
    hero:     U("1504868584819-f8681083bd4a", 1600),
    overview: U("1542744173-8e7e53415bb0", 900),
    gallery: [
      U("1563986768494-4dee2763ff3f", 700),
      U("1460925895917-afdab827c52f", 700),
      U("1551288049-bebda4e38f71", 700),
    ],
    sidebar:  U("1580582932707-520aed937b7b", 600),
  },
  "/technologies/automation/zapier": {
    hero:     U("1542744173-8e7e53415bb0", 1600),
    overview: U("1504868584819-f8681083bd4a", 900),
    gallery: [
      U("1563986768494-4dee2763ff3f", 700),
      U("1460925895917-afdab827c52f", 700),
      U("1551288049-bebda4e38f71", 700),
    ],
  },
  "/technologies/automation/n8n": {
    hero:     U("1563986768494-4dee2763ff3f", 1600),
    overview: U("1542744173-8e7e53415bb0", 900),
    gallery: [
      U("1504868584819-f8681083bd4a", 700),
      U("1460925895917-afdab827c52f", 700),
      U("1580582932707-520aed937b7b", 700),
    ],
  },
  "/technologies/automation/rest-apis": {
    hero:     U("1460925895917-afdab827c52f", 1600),
    overview: U("1563986768494-4dee2763ff3f", 900),
    gallery: [
      U("1542744173-8e7e53415bb0", 700),
      U("1504868584819-f8681083bd4a", 700),
      U("1551288049-bebda4e38f71", 700),
    ],
  },
  "/technologies/automation/webhooks": {
    hero:     U("1551288049-bebda4e38f71", 1600),
    overview: U("1460925895917-afdab827c52f", 900),
    gallery: [
      U("1563986768494-4dee2763ff3f", 700),
      U("1542744173-8e7e53415bb0", 700),
      U("1504868584819-f8681083bd4a", 700),
    ],
  },

  // ─────────────────────── RESOURCES ───────────────────────────────────────

  "/resources/company": {
    hero:     U("1522202176988-66273c2fd55f", 1600),
    overview: U("1427504494785-3a9ca7044f45", 900),
    gallery: [
      U("1503676260728-1c00da094a0b", 700),
      U("1516321318423-f06f85e504b3", 700),
      U("1488190211105-8fb0d4d0d90a", 700),
    ],
    sidebar:  U("1580582932707-520aed937b7b", 600),
  },

  "/resources/support": {
    hero:     U("1531746790731-6c087fecd65a", 1600),
    overview: U("1611532736597-de2d4265fba3", 900),
    gallery: [
      U("1522202176988-66273c2fd55f", 700),
      U("1460925895917-afdab827c52f", 700),
      U("1563986768494-4dee2763ff3f", 700),
    ],
    sidebar:  U("1485827404703-89b55fcc595e", 600),
  },

  "/resources/faq": {
    hero:     U("1499750310107-5fef28a66643", 1600),
    overview: U("1542744173-8e7e53415bb0", 900),
    gallery: [
      U("1460925895917-afdab827c52f", 700),
      U("1563986768494-4dee2763ff3f", 700),
      U("1504868584819-f8681083bd4a", 700),
    ],
  },

  "/resources/process": {
    hero:     U("1461749280684-ddd887252185", 1600),
    overview: U("1498050108023-c5249f4df085", 900),
    gallery: [
      U("1547658719-da2b51169166", 700),
      U("1555066931-4365d14bab8c", 700),
      U("1504639725590-34d0984388bd", 700),
    ],
    sidebar:  U("1531297484001-80022131f5a1", 600),
  },

  "/resources/get-a-quote": {
    hero:     U("1551288049-bebda4e38f71", 1600),
    overview: U("1504868584819-f8681083bd4a", 900),
    gallery: [
      U("1460925895917-afdab827c52f", 700),
      U("1542744173-8e7e53415bb0", 700),
      U("1563986768494-4dee2763ff3f", 700),
    ],
  },
};

/** Returns the full image set for a page, or undefined if none mapped. */
export function getPageImageSet(href: string): PageImageSet | undefined {
  return pageImageSets[href];
}

/** Legacy single-image getter (returns hero image). */
export function getPageImage(href: string): string | undefined {
  return pageImageSets[href]?.hero;
}
