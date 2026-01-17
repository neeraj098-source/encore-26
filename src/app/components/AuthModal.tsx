import { motion, AnimatePresence } from "motion/react";
import { X, Mail, User, Building2, Zap } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

export function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const { login } = useAuth();
  const [isSignup, setIsSignup] = useState(true);
  const [isCAMode, setIsCAMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    rollNumber: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.college || !formData.rollNumber) {
      setError("All fields are required");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    login(
      {
        name: formData.name,
        email: formData.email,
        college: formData.college,
        rollNumber: formData.rollNumber,
        isIETian: false,
        userId: "",
      },
      isCAMode
    );

    setFormData({ name: "", email: "", college: "", rollNumber: "" });
    if (onLoginSuccess) onLoginSuccess();
    onClose();
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-md w-full rounded-3xl border-2 p-8 backdrop-blur-2xl my-auto"
            style={{
              background: "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)",
              borderColor: "#D4AF37",
              boxShadow: "0 0 80px rgba(212, 175, 55, 0.2), inset 0 0 40px rgba(212, 175, 55, 0.05)",
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={24} style={{ color: "#D4AF37" }} />
            </motion.button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-8"
            >
              <h2
                className="text-4xl font-bold mb-2 tracking-wider"
                style={{
                  fontFamily: "Cinzel, serif",
                  background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {isSignup ? "Join Encore '26" : "Welcome Back"}
              </h2>
              <p
                className="text-gray-400"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {isSignup
                  ? "Create your account and register for events"
                  : "Log in to your account"}
              </p>
            </motion.div>

            {/* CA Mode Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex gap-4 mb-8 p-4 rounded-lg"
              style={{ background: "rgba(212, 175, 55, 0.1)" }}
            >
              <motion.button
                onClick={() => setIsCAMode(false)}
                className="flex-1 py-3 rounded-lg font-bold transition-all"
                style={{
                  background: !isCAMode
                    ? "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)"
                    : "transparent",
                  color: !isCAMode ? "#000" : "#D4AF37",
                  border: `2px solid ${isCAMode ? "#D4AF37" : "transparent"}`,
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Participant
              </motion.button>
              <motion.button
                onClick={() => setIsCAMode(true)}
                className="flex-1 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                style={{
                  background: isCAMode
                    ? "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)"
                    : "transparent",
                  color: isCAMode ? "#000" : "#D4AF37",
                  border: `2px solid ${!isCAMode ? "#D4AF37" : "transparent"}`,
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap size={18} /> Campus Ambassador
              </motion.button>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="relative"
              >
                <User size={20} className="absolute left-4 top-4" style={{ color: "#D4AF37" }} />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border-2 text-white placeholder-gray-500 focus:outline-none transition-all"
                  style={{
                    borderColor: "rgba(212, 175, 55, 0.3)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#D4AF37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)")}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="relative"
              >
                <Mail size={20} className="absolute left-4 top-4" style={{ color: "#D4AF37" }} />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border-2 text-white placeholder-gray-500 focus:outline-none transition-all"
                  style={{
                    borderColor: "rgba(212, 175, 55, 0.3)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#D4AF37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)")}
                />
              </motion.div>

              {/* College */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="relative"
              >
                <Building2 size={20} className="absolute left-4 top-4" style={{ color: "#D4AF37" }} />
                <input
                  type="text"
                  placeholder="College/University Name"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border-2 text-white placeholder-gray-500 focus:outline-none transition-all"
                  style={{
                    borderColor: "rgba(212, 175, 55, 0.3)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#D4AF37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)")}
                />
              </motion.div>

              {/* Roll Number */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative"
              >
                <User size={20} className="absolute left-4 top-4" style={{ color: "#D4AF37" }} />
                <input
                  type="text"
                  placeholder="Roll Number/ID"
                  value={formData.rollNumber}
                  onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border-2 text-white placeholder-gray-500 focus:outline-none transition-all"
                  style={{
                    borderColor: "rgba(212, 175, 55, 0.3)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#D4AF37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)")}
                />
              </motion.div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 rounded-lg"
                    style={{ background: "rgba(255, 107, 107, 0.2)", borderLeft: "3px solid #FF6B6B" }}
                  >
                    <p
                      className="text-red-400 text-sm"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {error}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 rounded-lg font-bold text-black mt-6 transition-all"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  boxShadow: "0 8px 24px rgba(212, 175, 55, 0.4)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSignup ? "Create Account" : "Sign In"}
              </motion.button>
            </form>

            {/* Special Access Badge */}
            {formData.college.toLowerCase().includes("iet lucknow") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-4 rounded-lg text-center border-2"
                style={{
                  background: "rgba(212, 175, 55, 0.1)",
                  borderColor: "#FFD700",
                }}
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
                  IET Lucknow members get ₹0 base fee + early access to events!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
