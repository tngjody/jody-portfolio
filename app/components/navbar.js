'use client';

import Link from 'next/link';
import { useTheme } from '../og/theme';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/about': {
    name: 'About',
  },
  '/projects': {
    name: 'Projects',
  },
  '/experience': {
    name: 'Experience',
  },
};

export function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme(); // Get theme context

  return (
    <aside>
      <div className="lg:sticky lg:top-0">
        <nav className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg py-4 px-6">
          <div className="flex flex-row space-x-6">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-blue-500 dark:hover:text-blue-300 flex items-center py-3 px-6 text-lg font-semibold text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {name}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </nav>
      </div>
    </aside>
  );
}
