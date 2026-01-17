import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Building2, User, Send } from "lucide-react";

export function BecomePartnerForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    tier: "Platinum"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyName && formData.contactPerson && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ companyName: "", contactPerson: "", email: "", tier: "Platinum" });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <motion.section
      id="become-partner"
      className="w-full py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: "linear-gradient(180deg, rgba(10,5,20,0.9) 0%, rgba(15,8,32,0.9) 100%)"
      }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          style={{
            background: "linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Become a Partner
        </motion.h2>
        <motion.p
          className="text-center text-white/70 mb-12"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Share your vision with Encore and grow together
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#071017]/80 border border-orange-800/30 rounded-lg p-8"
          style={{ backdropFilter: "blur(12px)" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Company Name */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="block text-white/80 mb-2 text-sm font-medium" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Company Name
            </label>
            <div className="relative">
              <Building2 size={18} className="absolute left-3 top-3 text-orange-400" />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full pl-10 pr-4 py-3 bg-black/30 border border-orange-800/30 rounded-lg text-white placeholder-white/40 focus:border-orange-500/60 focus:outline-none transition-all"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              />
            </div>
          </motion.div>

          {/* Contact Person */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <label className="block text-white/80 mb-2 text-sm font-medium" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Contact Person Name
            </label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-3 text-orange-400" />
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full pl-10 pr-4 py-3 bg-black/30 border border-orange-800/30 rounded-lg text-white placeholder-white/40 focus:border-orange-500/60 focus:outline-none transition-all"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="block text-white/80 mb-2 text-sm font-medium" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Email Address
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-3 text-orange-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-3 bg-black/30 border border-orange-800/30 rounded-lg text-white placeholder-white/40 focus:border-orange-500/60 focus:outline-none transition-all"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              />
            </div>
          </motion.div>

          {/* Tier Selection */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <label className="block text-white/80 mb-2 text-sm font-medium" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Interested Sponsorship Tier
            </label>
            <select
              name="tier"
              value={formData.tier}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/30 border border-orange-800/30 rounded-lg text-white focus:border-orange-500/60 focus:outline-none transition-all cursor-pointer"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <option value="Title">Title Sponsor</option>
              <option value="Platinum">Platinum Sponsor</option>
              <option value="Associate">Associate Partner</option>
              <option value="Other">Other (Discuss with team)</option>
            </select>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={submitted}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg font-semibold text-black flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-60"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {submitted ? (
              <>
                <span>✓</span>
                <span>Proposal Submitted!</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Submit Proposal</span>
              </>
            )}
          </motion.button>

          {submitted && (
            <motion.p
              className="mt-4 text-center text-orange-300 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Thank you! Our team will contact you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}
