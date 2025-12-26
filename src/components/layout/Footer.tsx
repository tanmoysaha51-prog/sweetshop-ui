import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-semibold text-foreground">
              ATELIER
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Thoughtfully designed goods for everyday living. Quality craftsmanship meets modern aesthetics.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=Home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products?category=Kitchen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Kitchen
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Help</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Shipping & Returns
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  FAQ
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Contact Us
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Size Guide
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for new arrivals and exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <button type="submit" className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Atelier. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
