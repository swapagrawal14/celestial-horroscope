
import { Home, BookOpen, Calculator, CalendarDays } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationBarProps {
  vertical?: boolean;
}

export const NavigationBar = ({ vertical = false }: NavigationBarProps) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Horoscope', path: '/horoscope', icon: CalendarDays },
    { name: 'Journal', path: '/journal', icon: BookOpen },
    { name: 'Numerology', path: '/numerology', icon: Calculator },
  ];
  
  const getNavItemClasses = (path: string) => {
    const isActive = location.pathname === path;
    
    if (vertical) {
      return `flex items-center py-3 px-4 w-full text-lg ${
        isActive 
          ? 'bg-primary/10 text-primary font-medium rounded-md' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md'
      }`;
    }
    
    return `flex flex-col items-center py-2 px-4 text-xs ${
      isActive 
        ? 'text-primary font-medium' 
        : 'text-muted-foreground hover:text-foreground transition-colors'
    }`;
  };
  
  if (vertical) {
    return (
      <nav className="flex flex-col w-full gap-1">
        {navItems.map((item) => (
          <Link to={item.path} key={item.name} className={getNavItemClasses(item.path)}>
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
    );
  }
  
  return (
    <nav className="flex items-center rounded-full bg-secondary px-2">
      {navItems.map((item) => (
        <Link to={item.path} key={item.name} className={getNavItemClasses(item.path)}>
          <item.icon className="h-5 w-5 mb-1" />
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
