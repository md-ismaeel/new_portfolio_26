import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import { Mail, Send, User, CheckCircle, MessageSquare } from "lucide-react";
import { Input, Textarea } from '@/components/ui/InputField';
import { motion, useInView } from "framer-motion";
import { textBlurIn, textReveal, staggerContainer, cardVariants } from "@/motion/motion";
import { BackgroundBlobs } from "@/components/effects/BackgroundBlobs";
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
            <div className="card-modern glass shadow-card relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-8 mt-3 text-center">
                <h2 className="text-2xl font-bold gradient-text mb-2">Send a Message</h2>
                <p className="text-sm text-foreground-secondary">Fill out the form and I'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit}>
                <motion.div
                  className="space-y-6 lg:px-3"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isFormInView ? "visible" : "hidden"}
                >
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <Input
                      name="name"
                      label="Name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('name')}
                      error={errors?.name}
                      touched={touchedFields?.name}
                      icon={<User className="w-5 h-5" />}
                      required
                    />

                    {/* Email Field */}
                    <Input
                      name="email"
                      label="Email Address"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('email')}
                      error={errors.email}
                      touched={touchedFields.email}
                      icon={<Mail className="w-5 h-5" />}
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <Input
                    name="subject"
                    label="Subject"
                    placeholder="How can I help you?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('subject')}
                    error={errors.subject}
                    touched={touchedFields.subject}
                    icon={<MessageSquare className="w-5 h-5" />}
                    required
                  />

                  {/* Message Field */}
                  <Textarea
                    name="message"
                    label="Message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('message')}
                    error={errors.message}
                    touched={touchedFields.message}
                    maxLength={1000}
                    rows={6}
                    required
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size={"lg"}
                    className="w-full mb-3"
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