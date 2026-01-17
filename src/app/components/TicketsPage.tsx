import { motion } from "motion/react";
import { Check, Download, Share2, Ticket } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function TicketsPage() {
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
    <motion.div
      className="w-full min-h-screen py-20 px-6 pt-24"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Ticket size={48} style={{ color: "#D4AF37" }} />
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
              My Tickets
            </h1>
          </div>
          <p
            className="text-xl text-gray-300"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            View and manage your Encore '26 event tickets
          </p>
        </motion.div>

        {/* Check Login Status */}
        {!isLoggedIn ? (
          <motion.div
            className="max-w-2xl mx-auto text-center p-12 rounded-3xl border-2"
            style={{
              background: "linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(15, 15, 15, 0.98) 100%)",
              borderColor: "#D4AF37",
              boxShadow: "0 0 80px rgba(212, 175, 55, 0.2)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Ticket size={64} style={{ color: "#D4AF37", margin: "0 auto 24px" }} />
            <h2
              className="text-3xl font-bold mb-4 tracking-wider"
              style={{
                fontFamily: "Cinzel, serif",
                color: "#D4AF37",
              }}
            >
              No Tickets Yet
            </h2>
            <p
              className="text-gray-400 mb-6"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Sign in to view your registered event tickets and digital passes.
            </p>
            <p
              className="text-sm text-gray-500"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Click "Register/Sign In" in the navbar to get started with Encore '26!
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Digital Ticket Card */}
            <motion.div
              className="rounded-3xl border-2 backdrop-blur-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(15, 15, 15, 0.98) 100%)",
                borderColor: "#D4AF37",
                boxShadow: "0 0 120px rgba(212, 175, 55, 0.3), inset 0 0 40px rgba(212, 175, 55, 0.1)",
              }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Success Header */}
              <motion.div
                className="p-8 text-center"
                style={{
                  background: "linear-gradient(90deg, rgba(212, 175, 55, 0.1) 0%, rgba(192, 57, 43, 0.05) 100%)",
                  borderBottom: "2px solid rgba(212, 175, 55, 0.2)",
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)" }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Check size={32} style={{ color: "#000" }} />
                </motion.div>
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  Ticket Confirmed
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Your registration is complete
                </p>
              </motion.div>

              {/* Content */}
              <div className="p-8">
                {/* Encore ID */}
                <motion.div
                  className="text-center mb-8"
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
                    className="text-4xl font-bold"
                    style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                  >
                    {mockTicket.userId}
                  </p>
                </motion.div>

                {/* Participant Details */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
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
                      className="p-4 rounded-lg"
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
                        className="text-gray-200"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {item.value}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(212, 175, 55, 0.3)", marginBottom: "24px" }} />

                {/* Selected Events */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h4
                    className="text-lg font-bold mb-4 tracking-wider"
                    style={{ color: "#D4AF37", fontFamily: "Cinzel, serif" }}
                  >
                    Registered Events
                  </h4>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {mockTicket.selectedEvents.map((event, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center p-4 rounded-lg"
                        style={{
                          background: "rgba(212, 175, 55, 0.1)",
                          border: "1px solid rgba(212, 175, 55, 0.2)",
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      >
                        <p
                          className="font-semibold text-gray-200"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          {event.name}
                        </p>
                        <p
                          className="text-lg font-bold"
                          style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                        >
                          ₹{event.price}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(212, 175, 55, 0.3)", marginBottom: "24px" }} />

                {/* Cost Breakdown */}
                <motion.div
                  className="mb-8 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="flex justify-between">
                    <p style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      Base Entry Fee:
                    </p>
                    <p style={{ color: "#FFD700", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      ₹{mockTicket.baseFee}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      Events Total:
                    </p>
                    <p style={{ color: "#FFD700", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      ₹{mockTicket.selectedEvents.reduce((sum, e) => sum + e.price, 0)}
                    </p>
                  </div>
                  {mockTicket.accommodation && (
                    <div className="flex justify-between">
                      <p style={{ color: "#D4AF37", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                        Accommodation + Food:
                      </p>
                      <p style={{ color: "#FFD700", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                        ₹{mockTicket.accommodationFee}
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(212, 175, 55, 0.3)", marginBottom: "24px" }} />

                {/* Total Amount */}
                <motion.div
                  className="flex justify-between items-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
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
                    ₹{mockTicket.totalAmount}
                  </p>
                </motion.div>

                {/* IET Lucknow Badge */}
                {user?.isIETian && (
                  <motion.div
                    className="p-4 rounded-lg text-center border-2 mb-8"
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

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <motion.button
                    className="flex-1 px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                      color: "#000",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      boxShadow: "0 8px 24px rgba(212, 175, 55, 0.4)",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={20} /> Download PDF
                  </motion.button>
                  <motion.button
                    className="flex-1 px-4 py-3 rounded-lg font-bold border-2 flex items-center justify-center gap-2 transition-all"
                    style={{
                      borderColor: "#D4AF37",
                      color: "#D4AF37",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                    whileHover={{ scale: 1.02, background: "rgba(212, 175, 55, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Share2 size={20} /> Share
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
