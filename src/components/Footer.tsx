// Re-using the data definitions from the NavBar.tsx file
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/233553626921',
    username: '+233 55 889 3016',
    description: 'Send a message',
    gradient: 'from-green-400 to-green-600',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/donato-totes',
    username: '@donato-totes',
    description: 'Follow us',
    gradient: 'from-purple-500 via-pink-500 to-orange-500',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  {
    name: 'Snapchat',
    href: 'https://snapchat.com/add/donato-totes',
    username: '@donato-totes',
    description: 'Add us',
    gradient: 'from-yellow-300 to-yellow-500',
    icon: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.209-.015-1.42 0-2.332-.613-3.134-1.182-.659-.48-1.243-.9-1.963-1.019-.284-.045-.539-.06-.793-.06-.584 0-1.049.075-1.434.149-.195.044-.374.074-.539.074-.36 0-.523-.136-.563-.418-.045-.19-.104-.404-.164-.628-.075-.254-.193-.523-.344-.568-1.714-.346-2.642-.793-2.822-1.361-.029-.104-.044-.194-.044-.284.015-.239.209-.465.494-.509 3.6-.704 4.866-4.031 4.881-4.076.144-.27.181-.527.119-.736-.196-.406-1.048-.66-1.482-.81-.12-.044-.24-.074-.33-.104-.375-.14-1.094-.417-1.103-.87-.016-.448.344-.778.81-.915.09-.028.194-.059.313-.059.12 0 .269.029.405.104.42.194.789.3 1.094.3.06 0 .118-.015.178-.015.27 0 .463-.075.584-.194a.776.776 0 00.239-.539c0-.045-.015-.104-.045-.166-.195-.766-.465-2.347-.5-3.645-.045-1.498.134-2.76.538-3.746 1.676-3.485 4.866-3.761 5.925-3.761zm3.86 10.036c-.12 0-.209-.03-.314-.089a.896.896 0 01-.389-.687c0-.42.345-.763.764-.763s.764.345.764.763c0 .254-.12.479-.314.629-.09.074-.209.119-.344.134h-.045c-.029.015-.074.015-.119.015z'
  }
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section: Logo, Navigation, and Social Icons */}
        <div className="md:flex md:justify-between md:items-start space-y-8 md:space-y-0">
          
          {/* Logo and Copyright */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
                Donato
              </span>
            </a>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Donato. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-slate-900 mb-4">Quick Links</p>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base text-slate-600 hover:text-blue-600 transition-colors duration-150"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links with Usernames */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-slate-900 mb-4">Connect with Us</p>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-200"
                >
                  <div className={`w-10 h-10 bg-linear-to-br ${social.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shrink-0`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors duration-200">
                    {social.username}
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500 max-w-xs">
              Follow our journey and get in touch with us through our social channels.
            </p>
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="mt-12 pt-8 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            Designed and Developed with ❤️
          </p>
        </div>

      </div>
    </footer>
  );
}