import { ImageResponse } from 'next/og';

export function GET(request) {
  const url = new URL(request.url);
  const title = url.searchParams.get('title') || 'Next.js Portfolio Starter';

  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 4px', alignItems: 'center', justifyContent: 'space-between', padding: '8px' }}>
          <h2 style={{ display: 'flex', flexDirection: 'column', fontSize: '4xl', fontWeight: 'bold', textAlign: 'left' }}>
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
