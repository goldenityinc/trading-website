const wait = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

const mockInsights = [
  {
    id: 'ins-1',
    title: 'Freight Volatility in Q2 Energy Corridors',
    category: 'logistics',
    summary: 'Shipping and bunker spread fluctuations are reshaping delivered costs across core routes.',
    publish_date: '2026-05-20',
    is_published: true,
  },
  {
    id: 'ins-2',
    title: 'Refined Products Outlook: Southeast Asia',
    category: 'commodity_update',
    summary: 'Regional refinery utilization and import demand remain resilient through the next quarter.',
    publish_date: '2026-05-12',
    is_published: true,
  },
];

function sortByDateDesc(items) {
  return [...items].sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
}

export const base44 = {
  entities: {
    Insight: {
      async filter(criteria = {}) {
        await wait();
        let data = mockInsights;
        if (criteria && typeof criteria === 'object') {
          data = data.filter((item) =>
            Object.entries(criteria).every(([key, value]) => item[key] === value)
          );
        }
        return sortByDateDesc(data);
      },
    },
    Inquiry: {
      async create(payload) {
        await wait();
        const existing = JSON.parse(localStorage.getItem('inquiries') || '[]');
        const row = {
          id: crypto.randomUUID(),
          created_at: new Date().toISOString(),
          ...payload,
        };
        localStorage.setItem('inquiries', JSON.stringify([row, ...existing]));
        return row;
      },
    },
  },
};
