import Link from 'next/link';

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
  return (
    <aside className="mb-16">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col items-center relative px-0 pb-0 md:relative bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg py-4"
          id="nav"
        >
          <div className="flex flex-row space-x-6">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-blue-500 dark:hover:text-blue-300 flex items-center py-3 px-6 text-lg font-semibold text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
