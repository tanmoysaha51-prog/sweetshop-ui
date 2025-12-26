import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
        <div className="container-custom py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6 md:space-y-8 animate-slide-up">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                New Collection 2024
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Thoughtfully
                <br />
                <span className="text-primary">Designed</span> Goods
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Curated essentials for modern living. Every piece crafted with intention, made to last, and designed to bring joy to your everyday.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                  Shop Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/products" className="btn-outline">
                  View All
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop"
                  alt="Curated home goods collection"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-card rounded-xl p-4 md:p-6 shadow-xl animate-slide-up" style={{ animationDelay: '400ms' }}>
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <p className="text-2xl font-semibold text-foreground">$38</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Featured Products
              </h2>
              <p className="text-muted-foreground mt-2">
                Handpicked favorites from our collection
              </p>
            </div>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Category Card 1 */}
            <Link 
              to="/products?category=Home" 
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop"
                alt="Home collection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold text-background">Home</h3>
                <p className="text-background/80 text-sm mt-1">Comfort essentials</p>
              </div>
            </Link>

            {/* Category Card 2 */}
            <Link 
              to="/products?category=Kitchen" 
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=450&fit=crop"
                alt="Kitchen collection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold text-background">Kitchen</h3>
                <p className="text-background/80 text-sm mt-1">Culinary craftsmanship</p>
              </div>
            </Link>

            {/* Category Card 3 */}
            <Link 
              to="/products?category=Accessories" 
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=450&fit=crop"
                alt="Accessories collection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold text-background">Accessories</h3>
                <p className="text-background/80 text-sm mt-1">Daily companions</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Quality Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">Free</div>
              <p className="text-sm text-muted-foreground">Shipping Over $50</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">30</div>
              <p className="text-sm text-muted-foreground">Day Returns</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
