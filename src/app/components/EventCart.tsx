import { motion, AnimatePresence } from "motion/react";
import { Trash2, ShoppingCart, X, Check, Star } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { AuthModal } from "./AuthModal";
import { DigitalTicket } from "./DigitalTicket";

interface Event {
  id: string;
  category: string;
  name: string;
  price: number;
  type: "solo" | "group" | "flagship";
}

interface CategoryInfo {
  description: string;
}

const categoryDescriptions: Record<string, CategoryInfo> = {
  Dramatics: {
    description: "A picture story that explores the different emotions we experience in life. Capture moments of joy, love, sadness, and excitement while creating a visual narrative that takes the viewers on an emotional and memorable journey. 'Life is a roller coaster of emotions, and every feeling adds colour to the story.' Join us in Encore '26 as we embrace the highs and lows of being human!"
  },
  "Photography & Videography": {
    description: "A picture story that explores the different emotions we experience in life. Capture moments of joy, love, sadness, and excitement while creating a visual narrative that takes the viewers on an emotional and memorable journey. 'Life is a roller coaster of emotions, and every feeling adds colour to the story.' Join us in Encore '26 as we embrace the highs and lows of being human!"
  },
  Arts: {
    description: "A picture story that explores the different emotions we experience in life. Capture moments of joy, love, sadness, and excitement while creating a visual narrative that takes the viewers on an emotional and memorable journey. 'Life is a roller coaster of emotions, and every feeling adds colour to the story.' Join us in Encore '26 as we embrace the highs and lows of being human!"
  }
};

const events: Event[] = [
  // Dramatics
  { id: "d1", category: "Dramatics", name: "Bawaal (Nukkad)", price: 150, type: "solo" },
  { id: "d2", category: "Dramatics", name: "Ekanki (Monoact)", price: 150, type: "solo" },
  { id: "d3", category: "Dramatics", name: "Tamasha (Skit)", price: 500, type: "group" },
  { id: "d4", category: "Dramatics", name: "Mime", price: 150, type: "solo" },
  { id: "d5", category: "Dramatics", name: "Kirdaar (Mimicry)", price: 150, type: "solo" },
  { id: "d6", category: "Dramatics", name: "Cosplay", price: 500, type: "group" },

  // Dance
  { id: "da1", category: "Dance", name: "Natraj (Solo Dance)", price: 150, type: "solo" },
  { id: "da2", category: "Dance", name: "One to One Dance Battle", price: 500, type: "group" },
  { id: "da3", category: "Dance", name: "Raqs (Group Dance)", price: 500, type: "group" },

  // Singing
  { id: "s1", category: "Singing", name: "Sargam (Solo Singing)", price: 150, type: "solo" },
  { id: "s2", category: "Singing", name: "Raftaar (Rap Battle)", price: 500, type: "group" },
  { id: "s3", category: "Singing", name: "Swarsangam (Band War)", price: 500, type: "group" },

  // Entrepreneurship
  { id: "e1", category: "Entrepreneurship", name: "Marketing Mania", price: 500, type: "group" },
  { id: "e2", category: "Entrepreneurship", name: "Brand Wars", price: 500, type: "group" },
  { id: "e3", category: "Entrepreneurship", name: "Tehkikat (Case Study)", price: 150, type: "solo" },
  { id: "e4", category: "Entrepreneurship", name: "Maya Bazaar (Auction)", price: 1000, type: "flagship" },

  // Photography & Videography
  { id: "pv1", category: "Photography & Videography", name: "Tasveeron ki Dastan (Picture Story)", price: 500, type: "group" },
  { id: "pv2", category: "Photography & Videography", name: "Darpan (Photography)", price: 150, type: "solo" },
  { id: "pv3", category: "Photography & Videography", name: "Safarnama (Short Film)", price: 500, type: "group" },
  { id: "pv4", category: "Photography & Videography", name: "Reel Making", price: 150, type: "solo" },

  // Literature
  { id: "lit1", category: "Literature", name: "Essay Writing", price: 150, type: "solo" },
  { id: "lit2", category: "Literature", name: "Afsane (Twist a Tale)", price: 150, type: "solo" },
  { id: "lit3", category: "Literature", name: "Roobaroo (Debate)", price: 500, type: "group" },
  { id: "lit4", category: "Literature", name: "MUN (Model United Nation)", price: 500, type: "group" },
  { id: "lit5", category: "Literature", name: "Jumla (JAM)", price: 150, type: "solo" },
  { id: "lit6", category: "Literature", name: "Rangmanch (Open Stage)", price: 150, type: "solo" },
  { id: "lit7", category: "Literature", name: "Lit Quiz", price: 150, type: "solo" },

  // Arts
  { id: "a1", category: "Arts", name: "Pratibimb (Live Sketching)", price: 150, type: "solo" },
  { id: "a2", category: "Arts", name: "Mukhauta (Face Painting)", price: 150, type: "solo" },
  { id: "a3", category: "Arts", name: "Rangsaaz (Relay Rangoli)", price: 500, type: "group" },
  { id: "a4", category: "Arts", name: "T-Shirt Painting", price: 150, type: "solo" },

  // Miscellaneous Events
  { id: "m1", category: "Miscellaneous Events", name: "Mr & Miss Encore", price: 1000, type: "flagship" },
  { id: "m2", category: "Miscellaneous Events", name: "Puzzle", price: 150, type: "solo" },
  { id: "m3", category: "Miscellaneous Events", name: "Roadies", price: 500, type: "group" },
  { id: "m4", category: "Miscellaneous Events", name: "Tic Tac Toe", price: 150, type: "solo" },
  { id: "m5", category: "Miscellaneous Events", name: "E-Games", price: 150, type: "solo" },
  { id: "m6", category: "Miscellaneous Events", name: "Human Ludo", price: 500, type: "group" },
  { id: "m7", category: "Miscellaneous Events", name: "Dumb Charades", price: 500, type: "group" },
  { id: "m8", category: "Miscellaneous Events", name: "Gully Cricket", price: 500, type: "group" },
];

export function EventCart() {
  const { isLoggedIn, user } = useAuth();
  const [cartItems, setCartItems] = useState<Set<string>>(new Set());
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingEventId, setPendingEventId] = useState<string | null>(null);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketData, setTicketData] = useState<any>(null);
  const [accommodationSelected, setAccommodationSelected] = useState(false);

  const toggleCart = (eventId: string) => {
    const newCart = new Set(cartItems);
    if (newCart.has(eventId)) {
      newCart.delete(eventId);
    } else {
      newCart.add(eventId);
    }
    setCartItems(newCart);
  };

  const handleParticipate = (eventId: string) => {
    if (!isLoggedIn) {
      setPendingEventId(eventId);
      setShowAuthModal(true);
    } else {
      toggleCart(eventId);
    }
  };

  const handleAuthSuccess = () => {
    if (pendingEventId) {
      const newCart = new Set(cartItems);
      newCart.add(pendingEventId);
      setCartItems(newCart);
      setPendingEventId(null);
      setShowAuthModal(false);
    }
  };

  const selectedEvents = events.filter(e => cartItems.has(e.id));
  const totalPrice = selectedEvents.reduce((sum, e) => sum + e.price, 0);

  const handleCheckout = () => {
    if (!isLoggedIn || !user) return;

    // Generate Encore ID
    const encoreId = `EN26-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    
    // Base fee: ₹0 for IET Lucknow, ₹300 for others
    const baseFee = user.isIETian ? 0 : 300;
    
    // Accommodation fee: ₹1500 if selected
    const accommodationFee = accommodationSelected ? 1500 : 0;
    
    // Create ticket data
    const newTicketData = {
      userId: encoreId,
      name: user.name,
      email: user.email,
      college: user.college,
      baseFee: baseFee,
      selectedEvents: selectedEvents.map(e => ({ name: e.name, price: e.price })),
      accommodation: accommodationSelected,
      accommodationFee: accommodationFee,
      totalAmount: baseFee + totalPrice + accommodationFee,
      timestamp: new Date().toLocaleString(),
    };

    setTicketData(newTicketData);
    setCheckoutSuccess(true);
    
    setTimeout(() => {
      setShowCheckoutModal(false);
      setShowTicket(true);
      setCheckoutSuccess(false);
      setCartItems(new Set());
      setAccommodationSelected(false);
    }, 1500);
  };

  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = [];
    }
    acc[event.category].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  return (
    <motion.div
      className="w-full min-h-screen py-20 px-6"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <motion.div
        className="max-w-7xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <ShoppingCart size={40} style={{ color: "#D4AF37" }} />
          <h1
            className="text-5xl md:text-7xl font-bold tracking-wider"
            style={{
              fontFamily: "Cinzel, serif",
              background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Register for Competitions
          </h1>
        </div>
        <p
          className="text-xl text-gray-300"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Choose your events and proceed to checkout
        </p>
      </motion.div>

      {/* Events Table */}
      <motion.div
        className="max-w-7xl mx-auto mb-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {Object.entries(groupedEvents).map(([ category, categoryEvents ], categoryIndex) => (
          <motion.div
            key={category}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.05 }}
          >
            {/* Category Header */}
            <div
              className="px-6 py-4 rounded-t-lg border-b-2"
              style={{
                background: "linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(192, 57, 43, 0.1) 100%)",
                borderColor: "#D4AF37",
              }}
            >
              <h2
                className="text-2xl font-bold tracking-wide mb-3"
                style={{
                  fontFamily: "Cinzel, serif",
                  color: "#D4AF37",
                }}
              >
                {category}
              </h2>
              {categoryDescriptions[category] && (
                <motion.p
                  className="text-sm leading-relaxed max-w-4xl"
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {categoryDescriptions[category].description}
                </motion.p>
              )}
            </div>

            {/* Events List */}
            <div className="bg-black/40 backdrop-blur-md rounded-b-lg border border-gray-700/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: "2px solid rgba(212, 175, 55, 0.3)" }}>
                      <th
                        className="px-6 py-4 text-left text-sm font-semibold tracking-wide"
                        style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                      >
                        Event Name
                      </th>
                      <th
                        className="px-6 py-4 text-left text-sm font-semibold tracking-wide"
                        style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                      >
                        Type
                      </th>
                      <th
                        className="px-6 py-4 text-left text-sm font-semibold tracking-wide"
                        style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                      >
                        Price
                      </th>
                      <th
                        className="px-6 py-4 text-center text-sm font-semibold tracking-wide"
                        style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryEvents.map((event, eventIndex) => {
                      const isInCart = cartItems.has(event.id);
                      return (
                        <motion.tr
                          key={event.id}
                          className="border-b border-gray-700/20 hover:bg-white/5 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + eventIndex * 0.05 }}
                        >
                          <td
                            className="px-6 py-4 text-gray-200"
                            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                          >
                            {event.name}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{
                                background:
                                  event.type === "solo"
                                    ? "rgba(212, 175, 55, 0.2)"
                                    : event.type === "group"
                                    ? "rgba(192, 57, 43, 0.2)"
                                    : "rgba(212, 175, 55, 0.3)",
                                color:
                                  event.type === "solo"
                                    ? "#FFD700"
                                    : event.type === "group"
                                    ? "#FF6B6B"
                                    : "#D4AF37",
                              }}
                            >
                              {event.type === "solo"
                                ? "Solo"
                                : event.type === "group"
                                ? "Group"
                                : "Flagship"}
                            </span>
                          </td>
                          <td
                            className="px-6 py-4 font-semibold"
                            style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                          >
                            ₹{event.price}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <motion.button
                              onClick={() => handleParticipate(event.id)}
                              className="px-4 py-2 rounded-lg font-semibold text-sm transition-all"
                              style={{
                                background: isInCart
                                  ? "rgba(192, 57, 43, 0.8)"
                                  : "rgba(212, 175, 55, 0.2)",
                                color: isInCart ? "#FF6B6B" : "#D4AF37",
                                border: isInCart
                                  ? "2px solid #FF6B6B"
                                  : "2px solid rgba(212, 175, 55, 0.5)",
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {isInCart ? (
                                <span className="flex items-center gap-2">
                                  <X size={16} /> Remove
                                </span>
                              ) : (
                                <span className="flex items-center gap-2">
                                  <Star size={16} /> Participate
                                </span>
                              )}
                            </motion.button>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Cart Summary */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div
          className="max-w-7xl mx-auto px-6 py-6 rounded-t-2xl backdrop-blur-2xl border-t-2 flex items-center justify-between"
          style={{
            background: "linear-gradient(90deg, rgba(26, 26, 26, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)",
            borderColor: "#D4AF37",
            boxShadow: "0 -8px 32px rgba(212, 175, 55, 0.1)",
          }}
        >
          {/* Summary Info */}
          <div className="flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="text-sm text-gray-400"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Total Events
              </p>
              <p
                className="text-3xl font-bold"
                style={{ color: "#D4AF37", fontFamily: "Cinzel, serif" }}
              >
                {cartItems.size}
              </p>
            </motion.div>

            <div
              style={{ width: "1px", height: "60px", background: "rgba(212, 175, 55, 0.3)" }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p
                className="text-sm text-gray-400"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Total Price
              </p>
              <p
                className="text-3xl font-bold"
                style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
              >
                ₹{totalPrice}
              </p>
            </motion.div>
          </div>

          {/* Checkout Button */}
          <motion.button
            onClick={() => setShowCheckoutModal(true)}
            disabled={cartItems.size === 0}
            className="px-8 py-3 rounded-lg font-bold text-black tracking-wide transition-all disabled:opacity-50"
            style={{
              background:
                cartItems.size === 0
                  ? "rgba(212, 175, 55, 0.3)"
                  : "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              boxShadow:
                cartItems.size > 0
                  ? "0 8px 24px rgba(212, 175, 55, 0.4)"
                  : "none",
            }}
            whileHover={cartItems.size > 0 ? { scale: 1.05 } : {}}
            whileTap={cartItems.size > 0 ? { scale: 0.95 } : {}}
          >
            Proceed to Pay
          </motion.button>
        </div>
      </motion.div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckoutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60"
              onClick={() => setShowCheckoutModal(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-2xl w-full rounded-2xl border-2 p-8 backdrop-blur-xl"
              style={{
                background: "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)",
                borderColor: "#D4AF37",
                boxShadow: "0 0 60px rgba(212, 175, 55, 0.2)",
              }}
            >
              {!checkoutSuccess ? (
                <>
                  {/* Close Button */}
                  <motion.button
                    onClick={() => setShowCheckoutModal(false)}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} style={{ color: "#D4AF37" }} />
                  </motion.button>

                  {/* Header */}
                  <h2
                    className="text-3xl font-bold mb-6 tracking-wider"
                    style={{
                      fontFamily: "Cinzel, serif",
                      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Order Summary
                  </h2>

                  {/* Events List */}
                  <div className="mb-6 max-h-64 overflow-y-auto">
                    <div className="space-y-3">
                      {selectedEvents.map((event, index) => (
                        <motion.div
                          key={event.id}
                          className="flex justify-between items-center p-4 rounded-lg"
                          style={{
                            background: "rgba(212, 175, 55, 0.1)",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <div>
                            <p
                              className="font-semibold text-gray-200"
                              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                            >
                              {event.name}
                            </p>
                            <p
                              className="text-sm text-gray-400"
                              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                            >
                              {event.category}
                            </p>
                          </div>
                          <p
                            className="text-lg font-bold"
                            style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                          >
                            ₹{event.price}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Accommodation Toggle */}
                  <motion.div
                    className="mb-6 p-4 rounded-lg border-2 cursor-pointer transition-all"
                    style={{
                      background: accommodationSelected ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0.05)",
                      borderColor: accommodationSelected ? "#D4AF37" : "rgba(212, 175, 55, 0.3)",
                    }}
                    onClick={() => setAccommodationSelected(!accommodationSelected)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p
                          className="font-semibold text-gray-200"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          Accommodation + Food
                        </p>
                        <p
                          className="text-sm text-gray-400"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          2-day stay with meals included
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p
                          className="text-lg font-bold"
                          style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                        >
                          ₹1500
                        </p>
                        <div
                          className="w-6 h-6 rounded border-2 flex items-center justify-center transition-all"
                          style={{
                            borderColor: "#D4AF37",
                            background: accommodationSelected ? "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)" : "transparent",
                          }}
                        >
                          {accommodationSelected && (
                            <Check size={16} style={{ color: "#000" }} />
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "rgba(212, 175, 55, 0.3)", marginBottom: "16px" }} />

                  {/* Cost Breakdown */}
                  <div className="mb-4 space-y-2">
                    <div className="flex justify-between">
                      <p style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Base Entry Fee:</p>
                      <p style={{ color: "#FFD700", fontFamily: "Plus Jakarta Sans, sans-serif" }}>₹{user?.isIETian ? 0 : 300}</p>
                    </div>
                    <div className="flex justify-between">
                      <p style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Events Total:</p>
                      <p style={{ color: "#FFD700", fontFamily: "Plus Jakarta Sans, sans-serif" }}>₹{totalPrice}</p>
                    </div>
                    {accommodationSelected && (
                      <div className="flex justify-between">
                        <p style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Accommodation + Food:</p>
                        <p style={{ color: "#FFD700", fontFamily: "Plus Jakarta Sans, sans-serif" }}>₹1500</p>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "rgba(212, 175, 55, 0.3)", marginBottom: "16px" }} />

                  {/* Total */}
                  <div className="flex justify-between items-center mb-8">
                    <p
                      className="text-xl font-bold"
                      style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                    >
                      Total Amount:
                    </p>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                    >
                      ₹{(user?.isIETian ? 0 : 300) + totalPrice + (accommodationSelected ? 1500 : 0)}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => setShowCheckoutModal(false)}
                      className="flex-1 px-4 py-3 rounded-lg font-bold border-2 transition-all"
                      style={{
                        borderColor: "#D4AF37",
                        color: "#D4AF37",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                      }}
                      whileHover={{ scale: 1.02, background: "rgba(212, 175, 55, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      onClick={handleCheckout}
                      className="flex-1 px-4 py-3 rounded-lg font-bold text-black transition-all"
                      style={{
                        background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        boxShadow: "0 8px 24px rgba(212, 175, 55, 0.4)",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Complete Payment
                    </motion.button>
                  </div>
                </>
              ) : (
                /* Success State */
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                    }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <Check size={40} className="text-black" />
                  </motion.div>
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                  >
                    Payment Successful!
                  </h3>
                  <p
                    className="text-gray-300 mb-4"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Your {cartItems.size} event{cartItems.size !== 1 ? "s" : ""} have been registered successfully.
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                  >
                    Total: ₹{totalPrice}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Auth Modal for Event Participation */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => {
          setShowAuthModal(false);
          setPendingEventId(null);
        }}
        onLoginSuccess={handleAuthSuccess}
      />

      {/* Digital Ticket Modal */}
      {showTicket && ticketData && (
        <DigitalTicket 
          isOpen={showTicket} 
          onClose={() => setShowTicket(false)}
          ticketData={ticketData}
        />
      )}
    </motion.div>
  );
}
