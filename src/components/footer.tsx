export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 xl:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display mb-4 text-white">
              InvestBrazil<span className="text-secondary">2025</span>
            </h3>
            {/* </CHANGE> */}
            <p className="text-white/80 leading-relaxed">
              A Gateway for Nigerian Investors to Explore Brazil's Real Estate Market
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#why-invest" className="hover:text-secondary transition-colors">
                  Why Brazil
                </a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-secondary transition-colors">
                  Event Highlights
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-secondary transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-secondary transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>Email: info@dukiyang.com</li>
              <li>Phone: +55(11)93366-6182</li>
              <li>São Paulo, Brazil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} InvestBrazil2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
