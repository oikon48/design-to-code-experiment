import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg"></div>
            <span className="text-2xl font-semibold">Brooklyn</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-0">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-3 py-3 text-base text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-base text-gray-400">
            Copyright © 2022 Picto.
          </p>
        </div>
      </div>
    </footer>
  );
}
