import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex gap-4 py-6 border-b border-border animate-fade-in">
      {/* Product Image */}
      <Link 
        to={`/product/${item.id}`}
        className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-secondary"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <Link 
              to={`/product/${item.id}`}
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              {item.category}
            </p>
          </div>
          
          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
            aria-label={`Remove ${item.name} from cart`}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Price & Quantity */}
        <div className="flex items-end justify-between mt-auto">
          {/* Quantity Controls */}
          <div className="flex items-center gap-1 bg-secondary rounded-lg">
            <button
              onClick={handleDecrement}
              disabled={item.quantity <= 1}
              className="p-2 text-foreground hover:bg-muted rounded-l-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-medium text-foreground">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="p-2 text-foreground hover:bg-muted rounded-r-lg transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="font-semibold text-foreground">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            {item.quantity > 1 && (
              <p className="text-sm text-muted-foreground">
                ${item.price} each
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
