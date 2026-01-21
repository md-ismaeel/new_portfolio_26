import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import { Mail, Send, User, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { textBlurIn, textReveal, staggerContainer, staggerItem, cardVariants } from "@/motion/motion";
import { BackgroundBlobs } from "@/components/effects/BackgroundBlobs";
import { cn } from "@/lib/clsx/cn";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface TouchedFields {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

type FieldStatus = "default" | "success" | "error";

const validateField = (name: string, value: string): string | null => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return "Name can only contain letters";
      return null;
    case "email":
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Please enter a valid email";
      return null;
    case "subject":
      if (!value.trim()) return "Subject is required";
      if (value.trim().length < 5) return "Subject must be at least 5 characters";
      return null;
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 20) return "Message must be at least 20 characters";
      return null;
    default:
      return null;
  }
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (fieldName: keyof FormData) => {
    setTouchedFields((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, formData[fieldName]);
    setErrors((prev) => ({ ...prev, [fieldName]: error || "" }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setTouchedFields({ name: true, email: true, subject: true, message: true });

    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouchedFields({});
      setErrors({});
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (fieldName: keyof FormData): FieldStatus => {
    if (!touchedFields[fieldName]) return "default";
    return errors[fieldName] ? "error" : "success";
  };

  const getFieldClasses = (fieldName: keyof FormData) => {
    const status = getFieldStatus(fieldName);
    return cn(
      "w-full py-4 rounded-xl transition-all duration-300 text-foreground placeholder-foreground-muted backdrop-blur-sm focus:outline-none focus:ring-2",
      status === "error" ? "border-2 border-red-500 bg-red-50 dark:bg-red-900/10 focus:ring-red-500/20" : "",
      status === "success" ? "border-2 border-green-500 bg-green-50 dark:bg-green-900/10 focus:ring-green-500/20" : "",
      status === "default" ? "border border-custom bg-card/50 focus:border-primary focus:ring-primary/20" : ""
    );
  };

  const messageCharColor = formData.message.length > 950
    ? "text-red-500"
    : formData.message.length > 800
      ? "text-orange-500"
      : "text-foreground-muted";

  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <BackgroundBlobs opacity="light" blur="heavy" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.h1 className="display-md gradient-text mb-4" variants={textBlurIn}>
            Let's Start a Conversation
          </motion.h1>

          <motion.p className="body-lg text-foreground-secondary max-w-2xl mx-auto px-4" variants={textReveal}>
            Have a question or want to work together? I'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Form */}
        <div className="container-narrow">
          <motion.div
            ref={formRef}
            variants={cardVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
          >
            <div className="card-modern glass shadow-card p-6 lg:p-10 relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold gradient-text mb-2">Send a Message</h2>
                <p className="text-sm text-foreground-secondary">Fill out the form and I'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit}>
                <motion.div
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isFormInView ? "visible" : "hidden"}
                >
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <motion.div className="space-y-2" variants={staggerItem}>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Full Name *
                      </label>
                      <div className="relative">
                        <motion.div
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <User className="w-5 h-5 text-foreground-muted" />
                        </motion.div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("name")}
                          className={cn(getFieldClasses("name"), "pl-12 pr-12")}
                          placeholder="John Doe"
                        />
                        {getFieldStatus("name") === "success" && (
                          <motion.div
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          </motion.div>
                        )}
                        {getFieldStatus("name") === "error" && (
                          <motion.div
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                          >
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          </motion.div>
                        )}
                      </div>
                      {errors.name && touchedFields.name && (
                        <motion.p
                          className="text-sm text-red-500 flex items-center gap-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div className="space-y-2" variants={staggerItem}>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        Email Address *
                      </label>
                      <div className="relative">
                        <motion.div
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                          <Mail className="w-5 h-5 text-foreground-muted" />
                        </motion.div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("email")}
                          className={cn(getFieldClasses("email"), "pl-12 pr-12")}
                          placeholder="john@example.com"
                        />
                        {getFieldStatus("email") === "success" && (
                          <motion.div
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          </motion.div>
                        )}
                        {getFieldStatus("email") === "error" && (
                          <motion.div
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                          >
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          </motion.div>
                        )}
                      </div>
                      {errors.email && touchedFields.email && (
                        <motion.p
                          className="text-sm text-red-500 flex items-center gap-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  {/* Subject Field */}
                  <motion.div className="space-y-2" variants={staggerItem}>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                      Subject *
                    </label>
                    <div className="relative">
                      <motion.div
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                        whileHover={{ scale: 1.1 }}
                      >
                        <MessageSquare className="w-5 h-5 text-foreground-muted" />
                      </motion.div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("subject")}
                        className={cn(getFieldClasses("subject"), "pl-12 pr-12")}
                        placeholder="How can I help you?"
                      />
                      {getFieldStatus("subject") === "success" && (
                        <motion.div
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                      {getFieldStatus("subject") === "error" && (
                        <motion.div
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        >
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </motion.div>
                      )}
                    </div>
                    {errors.subject && touchedFields.subject && (
                      <motion.p
                        className="text-sm text-red-500 flex items-center gap-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div className="space-y-2" variants={staggerItem}>
                    <div className="flex justify-between items-center">
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                        Message *
                      </label>
                      <span className={cn("text-xs font-medium transition-colors", messageCharColor)}>
                        {formData.message.length}/1000
                      </span>
                    </div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("message")}
                        rows={6}
                        className={cn(getFieldClasses("message"), "px-4 pr-12 resize-y min-h-37.5")}
                        placeholder="Tell me about your project... (minimum 20 characters)"
                      />
                      {getFieldStatus("message") === "success" && (
                        <motion.div
                          className="absolute right-4 top-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                      {getFieldStatus("message") === "error" && (
                        <motion.div
                          className="absolute right-4 top-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        >
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </motion.div>
                      )}
                    </div>
                    {errors.message && touchedFields.message && (
                      <motion.p
                        className="text-sm text-red-500 flex items-center gap-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  {/* <motion.div variants={staggerItem}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-primary py-4 px-6 font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonPrimary}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.div> */}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size={"lg"}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Success Message */}
                  {showSuccess && (
                    <motion.div
                      className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl flex items-center gap-3"
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <div>
                        <p className="font-semibold text-green-700 dark:text-green-300">Message sent successfully!</p>
                        <p className="text-sm text-green-600 dark:text-green-400">I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}