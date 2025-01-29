'use client'

// app/docs/layout.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from './navigation';

type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
};

type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};

interface NavigationItemProps {
  item: NavigationItem;
  isActive: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ 
  item, 
  isActive 
}) => (
  <li>
    <Link
      href={item.href}
      className={`block px-4 py-2 rounded-md text-sm ${
        isActive
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{item.name}</span>
        <div className="flex gap-2">
          {item.isNew && (
            <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">
              New
            </span>
          )}
          {item.isUpdated && (
            <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
              Updated
            </span>
          )}
        </div>
      </div>
    </Link>
  </li>
);

const NavigationSidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="p-4">
      {NAVIGATION.map((group: NavigationGroup) => (
        <div key={group.name} className="mb-6">
          <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
            {group.name}
          </h2>
          <ul className="space-y-1">
            {group.children.map((item: NavigationItem) => (
              <NavigationItem
                key={item.href}
                item={item}
                isActive={pathname === item.href}
              />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
  <style jsx global>{`
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #CBD5E1 transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #CBD5E1;
    border-radius: 10px;
    border: 2px solid transparent; /* Add a border to ensure rounded edges */
    background-clip: content-box; /* Ensure the background color doesn't cover the border */
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #94A3B8;
  }
`}</style>

      <div className="flex min-h-screen ">
        {/* Fixed Left Navigation */}
        <aside className="fixed top-0 left-0 h-screen w-64 bg-white ">
          <div className="h-full custom-scrollbar overflow-y-auto">
            <NavigationSidebar />
          </div>
        </aside>

        {/* Main Content - with offset for fixed navigation */}
        <main className="flex-1 ml-64">
          <div className="max-w-7xl mx-auto custom-scrollbar">
            {children}
          </div>
        </main>

        {/* Fixed Right Sidebar */}
        <aside className="fixed top-0 right-0 h-screen w-64 bg-white ">
          {/* Empty right sidebar */}
        </aside>
      </div>
    </>
  );
}