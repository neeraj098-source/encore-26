import { motion, AnimatePresence } from "motion/react";
import { X, Copy, Award, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface CADashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock leaderboard data
const mockLeaderboard = [
  { rank: 1, name: "Aarav Singh", college: "IET Lucknow", points: 5420, referrals: 45 },
  { rank: 2, name: "Priya Sharma", college: "NIT Rourkela", points: 4890, referrals: 38 },
  { rank: 3, name: "Karan Verma", college: "MAIT Delhi", points: 4320, referrals: 34 },
  { rank: 4, name: "Ananya Gupta", college: "VIT Vellore", points: 3850, referrals: 29 },
  { rank: 5, name: "Rohan Patel", college: "IIT BHU", points: 3420, referrals: 25 },
];

export function CADashboard({ isOpen, onClose }: CADashboardProps) {
  const { caData } = useAuth();
  const [copied, setCopied] = useState(false);

  const handleCopyReferral = () => {
    if (caData) {
      navigator.clipboard.writeText(
        `Join Encore '26 using my referral code: ${caData.referralCode}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
            className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-3xl border-2 backdrop-blur-2xl my-auto"
            style={{
              background: "linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(15, 15, 15, 0.98) 100%)",
              borderColor: "#D4AF37",
              boxShadow: "0 0 120px rgba(212, 175, 55, 0.3), inset 0 0 40px rgba(212, 175, 55, 0.1)",
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="sticky top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-all z-10 float-right"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={24} style={{ color: "#D4AF37" }} />
            </motion.button>

            <div className="p-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <h2
                  className="text-4xl font-bold tracking-wider mb-2"
                  style={{
                    fontFamily: "Cinzel, serif",
                    background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Campus Ambassador Dashboard
                </h2>
                <p
                  className="text-gray-300"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Your exclusive rewards and referral program
                </p>
              </motion.div>

              {/* CA Stats Cards */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              >
                {/* Referral Code Card */}
                <motion.div
                  className="p-6 rounded-xl border-2 cursor-pointer"
                  style={{
                    background: "rgba(212, 175, 55, 0.1)",
                    borderColor: "#D4AF37",
                  }}
                  whileHover={{ scale: 1.02 }}
                  onClick={handleCopyReferral}
                >
                  <p
                    className="text-xs uppercase tracking-wide text-gray-400 mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Your Referral Code
                  </p>
                  <p
                    className="text-2xl font-bold mb-3"
                    style={{
                      fontFamily: "Cinzel, serif",
                      color: "#FFD700",
                    }}
                  >
                    {caData?.referralCode}
                  </p>
                  <motion.button
                    className="w-full py-2 rounded-lg flex items-center justify-center gap-2 font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                      color: "#000",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Copy size={16} /> {copied ? "Copied!" : "Copy"}
                  </motion.button>
                </motion.div>

                {/* Referrals Card */}
                <motion.div
                  className="p-6 rounded-xl border-2"
                  style={{
                    background: "rgba(192, 57, 43, 0.1)",
                    borderColor: "#FF6B6B",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <p
                    className="text-xs uppercase tracking-wide text-gray-400 mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Referrals Count
                  </p>
                  <div className="flex items-center gap-3">
                    <Users size={32} style={{ color: "#FF6B6B" }} />
                    <p
                      className="text-4xl font-bold"
                      style={{
                        fontFamily: "Cinzel, serif",
                        color: "#FF6B6B",
                      }}
                    >
                      {caData?.referralCount || 0}
                    </p>
                  </div>
                </motion.div>

                {/* Points Card */}
                <motion.div
                  className="p-6 rounded-xl border-2"
                  style={{
                    background: "rgba(0, 255, 209, 0.1)",
                    borderColor: "#00FFD1",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <p
                    className="text-xs uppercase tracking-wide text-gray-400 mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Current Points
                  </p>
                  <div className="flex items-center gap-3">
                    <TrendingUp size={32} style={{ color: "#00FFD1" }} />
                    <p
                      className="text-4xl font-bold"
                      style={{
                        fontFamily: "Cinzel, serif",
                        color: "#00FFD1",
                      }}
                    >
                      {caData?.points || 0}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Rewards Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="p-6 rounded-xl border-2 mb-8"
                style={{
                  background: "rgba(212, 175, 55, 0.05)",
                  borderColor: "rgba(212, 175, 55, 0.3)",
                }}
              >
                <h3
                  className="text-lg font-bold mb-4 uppercase tracking-wide"
                  style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                >
                  Rewards System
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Per Successful Referral
                    </p>
                    <p
                      className="font-bold"
                      style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                    >
                      +100 Points
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Top 10 Leaderboard Bonus
                    </p>
                    <p
                      className="font-bold"
                      style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                    >
                      +500 Points
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p
                      className="text-gray-300"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Event Special Discount Code
                    </p>
                    <p
                      className="font-bold"
                      style={{ color: "#FFD700", fontFamily: "Cinzel, serif" }}
                    >
                      50% OFF
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Leaderboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h3
                  className="text-lg font-bold mb-4 uppercase tracking-wide flex items-center gap-2"
                  style={{ fontFamily: "Cinzel, serif", color: "#D4AF37" }}
                >
                  <Award size={24} style={{ color: "#FFD700" }} />
                  Live Leaderboard
                </h3>
                <div className="space-y-3">
                  {mockLeaderboard.map((ca, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-lg flex items-center justify-between"
                      style={{
                        background:
                          index === 0
                            ? "rgba(212, 175, 55, 0.15)"
                            : index === 1
                            ? "rgba(192, 57, 43, 0.1)"
                            : index === 2
                            ? "rgba(0, 255, 209, 0.1)"
                            : "rgba(212, 175, 55, 0.05)",
                        borderLeft: `4px solid ${
                          index === 0
                            ? "#FFD700"
                            : index === 1
                            ? "#FF6B6B"
                            : index === 2
                            ? "#00FFD1"
                            : "#D4AF37"
                        }`,
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                          style={{
                            background:
                              index === 0
                                ? "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)"
                                : index === 1
                                ? "linear-gradient(135deg, #FF6B6B 0%, #FF8787 100%)"
                                : index === 2
                                ? "linear-gradient(135deg, #00FFD1 0%, #00D9B8 100%)"
                                : "rgba(212, 175, 55, 0.3)",
                            color: index < 3 ? "#000" : "#FFD700",
                            fontFamily: "Cinzel, serif",
                          }}
                        >
                          {ca.rank}
                        </div>
                        <div>
                          <p
                            className="font-bold text-white"
                            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                          >
                            {ca.name}
                          </p>
                          <p
                            className="text-xs text-gray-400"
                            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                          >
                            {ca.college}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className="font-bold"
                          style={{
                            color: "#FFD700",
                            fontFamily: "Cinzel, serif",
                          }}
                        >
                          {ca.points}pts
                        </p>
                        <p
                          className="text-xs text-gray-400"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          {ca.referrals} referrals
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
