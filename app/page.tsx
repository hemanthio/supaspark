import React from 'react';

interface Iframe {
  url: string;
  title?: string;
}

interface ResponsiveIframeGridProps {
  iframes: Iframe[];
}

const ResponsiveIframeGrid: React.FC<ResponsiveIframeGridProps> = ({ iframes }) => {
  return (
    <div className="flex flex-wrap">
      {iframes.map((iframe, index) => (
        <div 
          key={index}
          className="w-full md:w-1/2 h-screen" // Full width on mobile, half width on desktop
        >
          <iframe 
            className="w-full h-full border-0"
            src={iframe.url}
            title={iframe.title || `iframe-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

// Example usage component
const Page = () => {
  const iframeUrls: Iframe[] = [
    {
      url: "http://localhost:3000/components/TotalEarnings",
      title: "Total Earnings"
    },
    {
      url: "http://localhost:3000/components/Github",
      title: "Github"
    },
    {
      url: "http://localhost:3000/components/Interactivebar",
      title: "Interactivebar"
    },
    {
      url: "http://localhost:3000/components/Glassysignup",
      title: "Glassysignup"
    },
    {
      url: "http://localhost:3000/components/Pricingcard",
      title: "Pricingcard"
    }
  ];

  return <ResponsiveIframeGrid iframes={iframeUrls} />;
};

export default Page;