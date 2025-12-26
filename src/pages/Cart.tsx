import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';

const Cart: React.FC = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-3">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              Start Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-muted-foreground">
                {cart.length} item{cart.length !== 1 ? 's' : ''} in cart
              </span>
              <button
                onClick={clearCart}
                className="text-sm text-destructive hover:text-destructive/80 transition-colors"
              >
                Clear All
              </button>
            </div>

            {/* Cart Item List */}
            <div>
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Continue Shopping */}
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-6"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
              <h2 className="text-lg font-semibold text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-foreground">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>

              <div className="flex justify-between pt-4 border-t border-border mb-6">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-semibold text-foreground text-xl">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="btn-primary w-full text-center block"
              >
                Proceed to Checkout
              </Link>

              {/* Security Note */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                🔒 Secure checkout powered by SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
