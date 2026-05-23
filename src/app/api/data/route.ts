import {
  MOCK_SPONSORS,
  MOCK_CAMPAIGNS,
  MOCK_DELIVERABLES,
  STATS,
} from '@/lib/data';
import { NextRequest } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(): Promise<Response> {
  return new Response(
    JSON.stringify({
      ok: true,
      data: {
        sponsors: {
          data: MOCK_SPONSORS,
          total: MOCK_SPONSORS.length,
        },
        campaigns: {
          data: MOCK_CAMPAIGNS,
          total: MOCK_CAMPAIGNS.length,
        },
        deliverables: {
          data: MOCK_DELIVERABLES,
          total: MOCK_DELIVERABLES.length,
        },
      },
      stats: STATS,
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

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body = await req.json();
    return new Response(
      JSON.stringify({
        ok: true,
        message: 'Demo mode — data not persisted',
        received: body,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: 'Invalid JSON body',
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      },
    );
  }
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
}