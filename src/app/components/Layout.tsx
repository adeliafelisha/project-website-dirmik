import { Link, Outlet, useLocation } from "react-router";
import { Search, Menu, X, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import logoUnpad from "../../assets/54afb718b6485037bfe53f6c76f678ecf7dc698a.png";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Beranda", href: "/" },
    {
      name: "Profil",
      href: "/profil",
      submenu: [
        { name: "Tentang Direktorat", href: "/profil/tentang" },
        { name: "Visi & Misi", href: "/profil/visi-misi" },
        { name: "Struktur Organisasi", href: "/profil/struktur" },
      ],
    },
    { name: "Layanan Akademik", href: "/layanan" },
    { name: "Pengumuman", href: "/pengumuman" },
    { name: "Artikel", href: "/artikel" },
    { name: "Unduhan", href: "/unduhan" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontak", href: "/kontak" },
  ];

  const getBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter(Boolean);
    const breadcrumbs = [{ name: "Beranda", href: "/" }];

    let currentPath = "";
    paths.forEach((path) => {
      currentPath += `/${path}`;
      const navItem = navigation.find((item) => item.href === currentPath);
      if (navItem) {
        breadcrumbs.push({ name: navItem.name, href: currentPath });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img
                  src={logoUnpad}
                  alt="Logo Universitas Padjadjaran"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform group-hover:scale-110 duration-300"
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl text-primary leading-tight group-hover:text-blue-700 transition-colors">
                  Direktorat Akademik
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Universitas Padjadjaran</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg hover:bg-accent transition-all duration-200 ${
                      location.pathname === item.href
                        ? "text-primary bg-accent font-medium"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 overflow-hidden">
                      {item.submenu.map((subitem, index) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className={`block px-5 py-3 hover:bg-accent hover:text-primary transition-all ${
                            index !== item.submenu!.length - 1 ? "border-b border-border/50" : ""
                          }`}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search & Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  searchOpen
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-primary"
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 hover:bg-accent hover:text-primary rounded-lg transition-all duration-200"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="search"
                  placeholder="Cari informasi akademik, layanan, pengumuman..."
                  className="w-full px-4 py-3.5 pl-12 bg-accent/50 border-2 border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-lg"
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-gradient-to-b from-white to-accent/30 animate-in slide-in-from-top-4 duration-300">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block py-3 px-4 rounded-xl transition-all ${
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "hover:bg-accent hover:shadow-sm"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1 pl-4 border-l-2 border-primary/20">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block py-2 px-4 rounded-lg text-sm hover:bg-accent hover:text-primary transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Breadcrumbs */}
      {location.pathname !== "/" && (
        <div className="bg-gradient-to-r from-accent/50 to-muted/50 border-b border-border/50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="w-4 h-4 text-primary/40" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary font-medium px-3 py-1.5 bg-white rounded-lg shadow-sm">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      to={crumb.href}
                      className="hover:text-primary transition-all px-3 py-1.5 rounded-lg hover:bg-white/50"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary via-primary to-blue-950 text-primary-foreground mt-auto relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoUnpad} alt="Logo Unpad" className="w-12 h-12 object-contain" />
                <h3 className="text-lg">Direktorat Akademik</h3>
              </div>
              <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
                Unit yang berperan dalam mendukung layanan dan pengelolaan akademik di lingkungan Universitas Padjadjaran.
              </p>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                <p className="text-sm text-primary-foreground/80">
                  Gedung Rektorat Unpad
                  <br />
                  Jatinangor, Sumedang 45363
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg">Tautan Cepat</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/profil" className="hover:text-secondary transition-all hover:pl-2 inline-block">
                    → Profil Direktorat
                  </Link>
                </li>
                <li>
                  <Link to="/layanan" className="hover:text-secondary transition-all hover:pl-2 inline-block">
                    → Layanan Akademik
                  </Link>
                </li>
                <li>
                  <Link to="/pengumuman" className="hover:text-secondary transition-all hover:pl-2 inline-block">
                    → Pengumuman
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-secondary transition-all hover:pl-2 inline-block">
                    → FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-lg">Layanan</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/layanan" className="hover:text-secondary transition-all hover:pl-2 inline-block">
                    → Registrasi Akademik
                  </Link>
                </li>
                <li>
                  <Link to="/layanan" className="hover:text-secondary transition-all hover:pl-2 inline-block">
                    → Kalender Akademik
                  </Link>
                </li>
                <li>
                  <Link to="/layanan" className="hover:text-secondary transition-all hover:pl-2 inline-block">
                    → Cuti & Aktif Kembali
                  </Link>
                </li>
                <li>
                  <Link to="/layanan" className="hover:text-secondary transition-all hover:pl-2 inline-block">
                    → Yudisium & Wisuda
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-lg">Kontak</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <a href="tel:+622287722186" className="hover:text-secondary transition-colors">
                    (022) 8772 2186
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <a href="mailto:akademik@unpad.ac.id" className="hover:text-secondary transition-colors break-all">
                    akademik@unpad.ac.id
                  </a>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="text-sm mb-2 font-medium">Jam Layanan:</p>
                <p className="text-sm text-primary-foreground/80">Senin - Jumat</p>
                <p className="text-sm text-primary-foreground/80">08.00 - 16.00 WIB</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-sm text-primary-foreground/80">
              &copy; 2026 Direktorat Akademik Universitas Padjadjaran. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
