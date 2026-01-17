import { motion, AnimatePresence } from "motion/react";
import { Check, Download, Share2, X } from "lucide-react";

interface DigitalTicketProps {
  isOpen: boolean;
  onClose: () => void;
  ticketData: {
    userId: string;
    name: string;
    email: string;
    college: string;
    baseFee: number;
    selectedEvents: Array<{ name: string; price: number }>;
    accommodation: boolean;
    accommodationFee: number;
    totalAmount: number;
    timestamp: string;
  };
}

export function DigitalTicket({ isOpen, onClose, ticketData }: DigitalTicketProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 min-h-screen overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="relative max-w-2xl w-full rounded-3xl border-2 backdrop-blur-2xl overflow-y-auto max-h-[80vh] my-auto"
            style={{
              background: "linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(15, 15, 15, 0.98) 100%)",
              borderColor: "#D4AF37",
              boxShadow: "0 0 120px rgba(212, 175, 55, 0.3), inset 0 0 40px rgba(212, 175, 55, 0.1)",
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-all z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={24} style={{ color: "#D4AF37" }} />
            </motion.button>

            {/* Success Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative p-8 text-center"
              style={{
                background: "linear-gradient(90deg, rgba(212, 175, 55, 0.1) 0%, rgba(192, 57, 43, 0.05) 100%)",
                borderBottom: "2px solid rgba(212, 175, 55, 0.2)",
              }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)" }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Check size={32} className="text-black" />
              </motion.div>
              <h2
                className="text-3xl font-bold tracking-wider mb-2"
                style={{
                  fontFamily: "Cinzel, serif",
                  color: "#D4AF37",
                }}
              >
                Payment Successful!
              </h2>
              <p
                className="text-gray-300"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Your ticket has been generated. Check your email for the PDF.
              </p>
            </motion.div>

            {/* Ticket Content */}
            <div className="p-8 space-y-6">
              {/* Encore ID */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 rounded-xl border-2"
                style={{
                  background: "rgba(212, 175, 55, 0.05)",
                  borderColor: "#D4AF37",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest text-gray-400 mb-2"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Your Encore ID
                </p>
                <p
                  className="text-3xl font-bold tracking-wider"
                  style={{
                    fontFamily: "Cinzel, serif",
                    color: "#FFD700",
                  }}
                >
                  {ticketData.userId}
                </p>
              </motion.div>

              {/* Participant Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-4 rounded-lg" style={{ background: "rgba(212, 175, 55, 0.1)" }}>
                  <p
                    className="text-xs uppercase tracking-wide text-gray-400 mb-1"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Name
                  </p>
                  <p
                    className="font-semibold text-white"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {ticketData.name}
                  </p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "rgba(212, 175, 55, 0.1)" }}>
                  <p
                    className="text-xs uppercase tracking-wide text-gray-400 mb-1"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Email
                  </p>
                  <p
                    className="font-semibold text-white text-sm break-all"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {ticketData.email}
                  </p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "rgba(212, 175, 55, 0.1)" }}>
                  <p
                    className="text-xs uppercase tracking-wide text-gray-400 mb-1"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    College
                  </p>
                  <p
                    className="font-semibold text-white"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {ticketData.college}
                  </p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: "rgba(212, 175, 55, 0.1)" }}>
                  <p
                    className="text-xs uppercase tracking-wide text-gray-400 mb-1"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Booking Date
                  </p>
                  <p
                    className="font-semibold text-white text-sm"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {new Date(ticketData.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>

              {/* Selected Events */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6 rounded-xl border-2"
                style={{
                  borderColor: "rgba(212, 175, 55, 0.3)",
                }}
              >
                <p
                  className="text-sm font-bold mb-4 uppercase tracking-wide"
                  style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                >
                  Selected Events ({ticketData.selectedEvents.length})
                </p>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {ticketData.selectedEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-lg"
                      style={{ background: "rgba(212, 175, 55, 0.08)" }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                    >
                      <p
                        className="text-sm text-gray-200"
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

              {/* Cost Breakdown */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="p-6 rounded-xl border-2"
                style={{
                  borderColor: "rgba(212, 175, 55, 0.3)",
                }}
              >
                <p
                  className="text-sm font-bold mb-4 uppercase tracking-wide"
                  style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                >
                  Payment Breakdown
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Base Entry Fee
                    </p>
                    <p
                      className="font-bold"
                      style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                    >
                      ₹{ticketData.baseFee}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Events Total
                    </p>
                    <p
                      className="font-bold"
                      style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                    >
                      ₹{ticketData.selectedEvents.reduce((sum, e) => sum + e.price, 0)}
                    </p>
                  </div>
                  {ticketData.accommodation && (
                    <div className="flex justify-between">
                      <p
                        className="text-gray-300"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        Accommodation + Food
                      </p>
                      <p
                        className="font-bold"
                        style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                      >
                        ₹{ticketData.accommodationFee}
                      </p>
                    </div>
                  )}
                  <div
                    style={{ height: "1px", background: "rgba(212, 175, 55, 0.3)", margin: "12px 0" }}
                  />
                  <div className="flex justify-between">
                    <p
                      className="font-bold text-lg"
                      style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                    >
                      TOTAL AMOUNT
                    </p>
                    <p
                      className="font-bold text-lg"
                      style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                    >
                      ₹{ticketData.totalAmount}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex gap-4 mt-8"
              >
                <motion.button
                  className="flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
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
                  className="flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 border-2 transition-all"
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
        </div>
      )}
    </AnimatePresence>
  );
}
