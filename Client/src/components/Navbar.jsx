import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Search, ChevronDown, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/Context/AppContext';
import { Link } from 'react-router-dom';

const browseCategories = [
  { name: "Music", href: "/events/music" },
  { name: "Sports", href: "/events/sports" },
  { name: "Arts & Theater", href: "/events/arts" },
  { name: "Food & Drink", href: "/events/food" },
  { name: "Business", href: "/events/business" },
  { name: "Community", href: "/events/community" },
];

const organizerOptions = [
  { name: "Create Event", href: "/organizers/create" },
  { name: "Manage Events", href: "/organizers/manage" },
  { name: "Analytics", href: "/organizers/analytics" },
  { name: "Resources", href: "/organizers/resources" },
];

export const Navbar = () => {
      const { selectedLocation, setSelectedLocation } = useAppContext();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
//    const [selectedLocation, setSelectedLocation] = useState("Select Location");

   
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    // Optional: trigger filtering or navigation here
    console.log("Selected Location:", location);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
       <span className="flex items-center space-x-2">
        <Link to='/'>
  <span className="bg-[#8B5CF6] text-white font-bold py-1 px-2 rounded">
    {selectedLocation.charAt(0).toUpperCase()}
  </span>
  &nbsp;
  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#EC4899]">
    {selectedLocation} Events
  </span>
  </Link>
</span>

  <div className="hidden md:flex items-center w-1/3 gap-x-4">
      {/* Search Input */}
      <div
        className={`relative w-full transition-transform duration-200 ${
          isSearchFocused ? "scale-105" : ""
        }`}
      >
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search events..."
          className="w-full pl-9 py-2 pr-4"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>

      {/* Location Dropdown */}
      <div
        className={`relative w-full transition-transform duration-200 ${
          isSearchFocused ? "scale-105" : ""
        }`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between px-4 py-2 text-gray-700"
            >
              {selectedLocation}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-full mt-2">
            <DropdownMenuGroup>
              {["India", "Australia", "Japan", "Sydney"].map((country) => (
                <DropdownMenuItem
                  key={country}
                  onSelect={() => handleLocationSelect(country)}
                  className="cursor-pointer"
                >
                  {country}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs text-gray-500 pointer-events-none">
              Select a location to filter events
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">Browse</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {browseCategories.map((category) => (
                      <li key={category.name} className="row-span-1">
                        <NavigationMenuLink>
                          <span
                            to={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore {category.name.toLowerCase()} events in Sydney
                            </p>
                          </span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">Organizers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {organizerOptions.map((option) => (
                      <li key={option.name}>
                        <NavigationMenuLink>
                          <span
                            to={option.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{option.name}</div>
                          </span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" className="hidden sm:block">List Your Event</Button>
          <Button className="bg-purple-600 hover:bg-purple-800/90">Sign In</Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-2">
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Sydney Events</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search events..."
                    className="w-full pl-9 py-1 pr-4"
                  />
                </div>

                <div className="space-y-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost" className="w-full justify-start">
                        Browse <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {browseCategories.map((category) => (
                        <DropdownMenuItem key={category.name}>
                          <span to={category.href}>{category.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost" className="w-full justify-start">
                        Organizers <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {organizerOptions.map((option) => (
                        <DropdownMenuItem key={option.name}>
                          <span to={option.href}>{option.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <SheetClose>
                    <Button variant="outline" className="w-full">List Your Event</Button>
                  </SheetClose>

                  <SheetClose>
                    <Button className="w-full bg-sydney-purple hover:bg-sydney-purple/90">Sign In</Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button className="bg-sydney-purple hover:bg-sydney-purple/90">Sign In</Button>
        </div>
      </div>
    </nav>
  );
};
