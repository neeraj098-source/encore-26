import { motion } from "motion/react";
import { ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface MerchandiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const products = [
  {
    id: 1,
    name: "Royal Hoodie",
    description: "Premium comfort with Encore '26 branding",
    regularPrice: 1200,
    studentPrice: 800,
    image: "🧥",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "Nawabi Elegance Tee",
    description: "Classic design featuring Encore's aesthetic",
    regularPrice: 650,
    studentPrice: 450,
    image: "👕",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "Legacy Tote Bag",
    description: "Stylish carry bag for Encore festivities",
    regularPrice: 350,
    studentPrice: 200,
    image: "🎒",
    sizes: ["One Size"],
  },
];

export function MerchandiseModal({ isOpen, onClose }: MerchandiseModalProps) {
  const { user } = useAuth();
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  const [cartItems, setCartItems] = useState<Record<number, number>>({});

  const getPrice = (regularPrice: number, studentPrice: number) => {
    return user?.isIETian ? studentPrice : regularPrice;
  };

  const handleAddToCart = (productId: number) => {
    if (!selectedSizes[productId]) {
      alert("Please select a size");
      return;
    }
    setCartItems({
      ...cartItems,
      [productId]: (cartItems[productId] || 0) + 1,
    });
    alert("Added to cart!");
  };

  return (
    <>
      {isOpen && (
        <div style={{ zIndex: 9999 }} className="fixed inset-0 flex items-start justify-center pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-5xl mx-4 w-full rounded-lg p-8 shadow-2xl text-white group overflow-hidden max-h-[80vh] overflow-y-auto"
            style={{
              backdropFilter: 'blur(20px)',
              background: 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(15,15,15,0.95) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 0 80px rgba(212, 175, 55, 0.2), inset 0 0 40px rgba(212, 175, 55, 0.05)'
            }}
          >
            {/* Close Button */}
            <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
              <motion.h2
                className="text-3xl font-bold tracking-wider flex items-center gap-2"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFFFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.05em'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <ShoppingCart size={32} style={{ color: '#D4AF37' }} />
                Merchandise
              </motion.h2>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded hover:bg-white/10 flex-shrink-0 transition-all"
                style={{ color: '#D4AF37' }}
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-6" />

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10 mb-8"
            >
              <p
                className="text-gray-300 leading-relaxed mb-8"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Bring home the essence of Encore '26 with our exclusive merchandise collection. From premium hoodies that celebrate the Nawabi Elegance theme to stylish tees and practical tote bags, each piece is designed to be a lasting memento of your festival experience. Limited edition items perfect for collectors and festival enthusiasts alike.
              </p>

              {/* IET Pricing Badge */}
              {user?.isIETian && (
                <motion.div
                  className="p-3 rounded-lg text-center border-2 mb-6"
                  style={{
                    background: "rgba(212, 175, 55, 0.1)",
                    borderColor: "#FFD700",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                  >
                    ✨ STUDENT PRICING APPLIED ✨
                  </p>
                  <p
                    className="text-xs text-gray-300 mt-1"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Enjoy special discounts on all merchandise
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Products Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {products.map((product, index) => {
                const price = getPrice(product.regularPrice, product.studentPrice);
                const itemsInCart = cartItems[product.id] || 0;

                return (
                  <motion.div
                    key={product.id}
                    className="rounded-lg overflow-hidden group cursor-pointer transition-all"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0.02) 100%)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{
                      boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)',
                      border: '1px solid rgba(212, 175, 55, 0.6)',
                    }}
                  >
                    {/* Product Image/Icon */}
                    <div
                      className="h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(192,57,43,0.05) 100%)',
                      }}
                    >
                      {product.image}
                    </div>

                    {/* Product Details */}
                    <div className="p-4">
                      <h3
                        className="text-lg font-bold mb-2 tracking-wider"
                        style={{ fontFamily: 'Cinzel, serif', color: '#D4AF37' }}
                      >
                        {product.name}
                      </h3>
                      <p
                        className="text-sm text-gray-400 mb-3"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {product.description}
                      </p>

                      {/* Price Display */}
                      <div className="mb-4">
                        {user?.isIETian ? (
                          <div className="flex items-center gap-2">
                            <p
                              className="text-2xl font-bold"
                              style={{ color: '#FFD700', fontFamily: 'Cinzel, serif' }}
                            >
                              ₹{price}
                            </p>
                            <p
                              className="text-sm text-gray-500 line-through"
                              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                              ₹{product.regularPrice}
                            </p>
                          </div>
                        ) : (
                          <p
                            className="text-2xl font-bold"
                            style={{ color: '#FFD700', fontFamily: 'Cinzel, serif' }}
                          >
                            ₹{price}
                          </p>
                        )}
                      </div>

                      {/* Size Selection */}
                      <div className="mb-4">
                        <label
                          className="block text-xs uppercase mb-2 tracking-wider"
                          style={{ color: '#D4AF37', fontFamily: 'Cinzel, serif' }}
                        >
                          Size
                        </label>
                        <select
                          value={selectedSizes[product.id] || ''}
                          onChange={(e) =>
                            setSelectedSizes({ ...selectedSizes, [product.id]: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded bg-white/5 border border-[#D4AF37]/30 text-white text-sm"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          <option value="">Select Size</option>
                          {product.sizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Add to Cart Button */}
                      <motion.button
                        onClick={() => handleAddToCart(product.id)}
                        className="w-full px-3 py-2 rounded font-bold flex items-center justify-center gap-2 transition-all text-sm"
                        style={{
                          background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                          color: '#000',
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          boxShadow: '0 4px 16px rgba(212, 175, 55, 0.3)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ShoppingCart size={16} />
                        Add to Cart {itemsInCart > 0 && `(${itemsInCart})`}
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Cart Summary */}
            {Object.values(cartItems).some((count) => count > 0) && (
              <motion.div
                className="mt-8 p-4 rounded-lg"
                style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p
                  className="text-center font-bold"
                  style={{ color: '#FFD700', fontFamily: 'Cinzel, serif' }}
                >
                  Items in Cart: {Object.values(cartItems).reduce((a, b) => a + b, 0)}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}
