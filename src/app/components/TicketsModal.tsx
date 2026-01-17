import { motion } from "motion/react";
import { Check, Download, Share2, Ticket, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

interface TicketsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TicketsModal({ isOpen, onClose }: TicketsModalProps) {
  const { isLoggedIn, user } = useAuth();

  // Mock ticket data for logged-in users
  const mockTicket = {
    userId: "EN26-ABC123",
    name: user?.name || "Participant",
    email: user?.email || "user@example.com",
    college: user?.college || "Your College",
    baseFee: user?.isIETian ? 0 : 300,
    selectedEvents: [
      { name: "Bawaal (Nukkad)", price: 150 },
      { name: "Natraj (Solo Dance)", price: 150 },
    ],
    accommodation: true,
    accommodationFee: 1500,
    totalAmount: (user?.isIETian ? 0 : 300) + 150 + 150 + 1500,
    timestamp: new Date().toLocaleString(),
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
            className="relative max-w-4xl mx-4 w-full rounded-lg p-8 shadow-2xl text-white group overflow-hidden max-h-[80vh] overflow-y-auto"
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
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.05em'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <Ticket size={32} style={{ color: '#D4AF37' }} />
                My Tickets
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

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10"
            >
              {!isLoggedIn ? (
                <div className="text-center py-12">
                  <Ticket size={64} style={{ color: "#D4AF37", margin: "0 auto 24px" }} />
                  <h3
                    className="text-2xl font-bold mb-4 tracking-wider"
                    style={{
                      fontFamily: "Cinzel, serif",
                      color: "#D4AF37",
                    }}
                  >
                    No Tickets Yet
                  </h3>
                  <p
                    className="text-gray-400 mb-4"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Sign in to view your registered event tickets and digital passes.
                  </p>
                </div>
              ) : (
                <div>
                  {/* Encore ID */}
                  <motion.div
                    className="text-center mb-8 p-6 rounded-lg"
                    style={{
                      background: "linear-gradient(90deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)",
                      border: "1px solid rgba(212, 175, 55, 0.2)",
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <p
                      className="text-gray-400 mb-2"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Your Encore ID
                    </p>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                    >
                      {mockTicket.userId}
                    </p>
                  </motion.div>

                  {/* Participant Details */}
                  <motion.div
                    className="grid grid-cols-2 gap-4 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {[
                      { label: "Name", value: mockTicket.name },
                      { label: "Email", value: mockTicket.email },
                      { label: "College", value: mockTicket.college },
                      { label: "Booking Date", value: mockTicket.timestamp.split(",")[0] },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="p-3 rounded-lg"
                        style={{
                          background: "rgba(212, 175, 55, 0.1)",
                          border: "1px solid rgba(212, 175, 55, 0.2)",
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      >
                        <p
                          className="text-xs uppercase tracking-wider mb-1"
                          style={{ color: "#D4AF37", fontFamily: "Cinzel, serif" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-gray-200 text-sm"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          {item.value}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "rgba(212, 175, 55, 0.3)", marginBottom: "16px" }} />

                  {/* Selected Events */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h4
                      className="text-lg font-bold mb-3 tracking-wider"
                      style={{ color: "#D4AF37", fontFamily: "Cinzel, serif" }}
                    >
                      Registered Events
                    </h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {mockTicket.selectedEvents.map((event, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center p-3 rounded-lg"
                          style={{
                            background: "rgba(212, 175, 55, 0.1)",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                        >
                          <p
                            className="font-semibold text-sm text-gray-200"
                            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                          >
                            {event.name}
                          </p>
                          <p
                            className="font-bold"
                            style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                          >
                            ₹{event.price}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "rgba(212, 175, 55, 0.3)", marginBottom: "16px" }} />

                  {/* Cost Breakdown */}
                  <motion.div
                    className="mb-6 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="flex justify-between text-sm">
                      <p style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Base Entry Fee:</p>
                      <p style={{ color: "#FFD700", fontFamily: "Plus Jakarta Sans, sans-serif" }}>₹{mockTicket.baseFee}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Events Total:</p>
                      <p style={{ color: "#FFD700", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                        ₹{mockTicket.selectedEvents.reduce((sum, e) => sum + e.price, 0)}
                      </p>
                    </div>
                    {mockTicket.accommodation && (
                      <div className="flex justify-between text-sm">
                        <p style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}>Accommodation + Food:</p>
                        <p style={{ color: "#FFD700", fontFamily: "Plus Jakarta Sans, sans-serif" }}>₹{mockTicket.accommodationFee}</p>
                      </div>
                    )}
                  </motion.div>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "rgba(212, 175, 55, 0.3)", marginBottom: "16px" }} />

                  {/* Total */}
                  <motion.div
                    className="flex justify-between items-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <p
                      className="text-lg font-bold"
                      style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                    >
                      Total Amount:
                    </p>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                    >
                      ₹{mockTicket.totalAmount}
                    </p>
                  </motion.div>

                  {/* IET Badge */}
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
                        ✨ SPECIAL ACCESS GRANTED ✨
                      </p>
                      <p
                        className="text-xs text-gray-300 mt-1"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        IET Lucknow member - ₹0 base fee applied
                      </p>
                    </motion.div>
                  )}

                  {/* Complete Payment Button */}
                  <motion.button
                    className="w-full px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all mb-4"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                      color: "#000",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      boxShadow: "0 12px 32px rgba(212, 175, 55, 0.5)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.65 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(212, 175, 55, 0.6)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert(`Processing payment of ₹${mockTicket.totalAmount} for ${mockTicket.name}`)}
                  >
                    💳 Complete Payment - ₹{mockTicket.totalAmount}
                  </motion.button>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <motion.button
                      className="flex-1 px-3 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-all text-sm"
                      style={{
                        background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                        color: "#000",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        boxShadow: "0 8px 24px rgba(212, 175, 55, 0.4)",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download size={16} /> Download
                    </motion.button>
                    <motion.button
                      className="flex-1 px-3 py-2 rounded-lg font-bold border-2 flex items-center justify-center gap-2 transition-all text-sm"
                      style={{
                        borderColor: "#D4AF37",
                        color: "#D4AF37",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                      }}
                      whileHover={{ scale: 1.02, background: "rgba(212, 175, 55, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Share2 size={16} /> Share
                    </motion.button>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
}
