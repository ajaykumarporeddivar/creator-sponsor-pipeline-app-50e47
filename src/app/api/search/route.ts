import {
  MOCK_SPONSORS,
  MOCK_CAMPAIGNS,
  MOCK_DELIVERABLES,
} from '@/lib/data';
import { NextRequest } from 'next/server';

type SearchResult = {
  id: string;
  title: string;
  type: 'sponsor' | 'campaign' | 'deliverable';
  detail: string; // A concise detail to display in search results
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(req: NextRequest): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type'); // optional: 'sponsor', 'campaign', 'deliverable'
  const lowerCaseQuery = query.toLowerCase();

  const allSearchableItems: SearchResult[] = [
    ...MOCK_SPONSORS.map((s) => ({
      id: s.id,
      title: s.companyName,
      type: 'sponsor' as const,
      detail: s.contactName ? `Contact: ${s.contactName}` : 'Sponsor',
    })),
    ...MOCK_CAMPAIGNS.map((c) => ({
      id: c.id,
      title: c.campaignName,
      type: 'campaign' as const,
      detail: `Value: $${c.estimatedValue} | Status: ${c.status}`,
    })),
    ...MOCK_DELIVERABLES.map((d) => ({
      id: d.id,
      title: d.description,
      type: 'deliverable' as const,
      detail: `Due: ${d.dueDate} | Type: ${d.type} | Status: ${d.status}`,
    })),
  ];

  let filteredItems = allSearchableItems;

  if (type) {
    filteredItems = filteredItems.filter((item) => item.type === type);
  }

  if (lowerCaseQuery) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseQuery),
    );
  } else {
    // If query is empty, return first 5 items
    filteredItems = filteredItems.slice(0, 5);
  }

  // Max 20 results
  const results = filteredItems.slice(0, 20);

  return new Response(
    JSON.stringify({
      ok: true,
      data: {
        results: results,
        total: results.length,
        query: query,
      },
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    },
  );
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
}