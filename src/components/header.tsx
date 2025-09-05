import { Bell, Code, Contact, Folder, Home, Menu, User } from "lucide-react";
import { ThemeToggle } from "./ui/theme";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import Link from "next/link";

export function Header() {

  const author = false;

  const navLinkStyles = "flex items-center gap-1 hover:-translate-y-1 transition-all duration-200 hover:text-orange-600 text-shadow-lg dark:text-shadow-orange-900";
  const navIconStyles = "size-5 text-gray-500";
  const navLinks = [
    { title: "Home", link: "#", icon: <Home className={navIconStyles} /> },
    { title: "About", link: "#about", icon: <User className={navIconStyles} /> },
    { title: "Skills", link: "#skills", icon: <Code className={navIconStyles} /> },
    { title: "Projects", link: "#projects", icon: <Folder className={navIconStyles} /> },
    { title: "Contact", link: "#contact", icon: <Contact className={navIconStyles} /> },
  ];

  return (
    <header className="flex justify-between items-center p-3 border-b fixed w-full backdrop-blur-2xl z-20">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button variant="secondary" size="icon" className="cursor-pointer">
            <Menu />
            <span className="sr-only">Toggle links</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="mt-4">
          {navLinks.map(link => (
            <DropdownMenuItem key={link.title}>
              <Link href={link.link} className="w-full hover:ps-2 hover:text-orange-600 font-semibold transition-all duration-200 flex items-center gap-2">
                {link.icon} {link.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="secondary" className="cursor-pointer active:scale-90">
        <Link href="/">
          <h1 className="font-extrabold text-2xl text-orange-600 text-shadow-lg">Nowfal</h1>
        </Link>
      </Button>
      <nav className="hidden md:flex gap-5 font-semibold">
        {navLinks.map(link => (
          <Link key={link.title} href={link.link} className={navLinkStyles}>
            {link.icon} {link.title}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        {author && <Button variant="secondary" size="icon" className="relative cursor-pointer active:scale-80">
          <Badge variant="default" className="rounded-full absolute top-0 right-0 py-0 px-0.5 text-[10px] bg-orange-500 text-white">2</Badge>
          <Bell />
        </Button>}
        <ThemeToggle />
      </div>
    </header>
  );
}
