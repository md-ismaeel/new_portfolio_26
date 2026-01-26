import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  staggerContainer,
  staggerItem,
  fadeInUp,
  textBlurIn,
  textReveal,
  useInView,
} from "@/motion/motion";
import { Video, ExternalLink, ArrowRight } from "lucide-react";
import { DurationOption } from "@/utils/meet/DurationOption";
import { DatePicker } from "@/utils/meet/DatePicker";
import { TimePicker } from "@/utils/meet/TimePicker";
import { BackgroundBlobs } from "@/components/effects/BackgroundBlobs";

export default function MeetingScheduler() {
  const [duration, setDuration] = useState<number>(30);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [generatedLink, setGeneratedLink] = useState<string>("");

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const handleGenerate = () => {
    if (!date || !time) return;

    const [hours, minutes] = time.split(":").map(Number);
    const startDateTime = new Date(date);
    startDateTime.setHours(hours, minutes, 0, 0);

    const endDateTime = new Date(startDateTime.getTime() + duration * 60000);

    const formatGoogleDate = (d: Date) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const hrs = String(d.getHours()).padStart(2, "0");
      const mins = String(d.getMinutes()).padStart(2, "0");
      const secs = String(d.getSeconds()).padStart(2, "0");
      return `${year}${month}${day}T${hrs}${mins}${secs}`;
    };

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `Client Meeting (${duration} min)`,
      dates: `${formatGoogleDate(startDateTime)}/${formatGoogleDate(endDateTime)}`,
      details: `Video conference meeting via Google Meet.\nDuration: ${duration} minutes.\nScheduled for: ${new Date(date).toLocaleDateString()} at ${time}`,
      add: "",
    });

    setGeneratedLink(
      `https://calendar.google.com/calendar/render?${params.toString()}&add=conferenceData`,
    );
  };

  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <BackgroundBlobs opacity="normal" blur="normal" />

      <div className="container-content relative z-10">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={textBlurIn}
            className="display-md gradient-text mb-4 flex items-center justify-center gap-4"
          >
            <span className="p-3 rounded-xl glass shadow-card">
              <Video size={32} className="text-primary" />
            </span>{" "}
            <span>Let’s Make It Worth It</span>
          </motion.h2>

          <motion.p
            className="body-lg text-foreground-secondary max-w-2xl mx-auto px-4"
            variants={textReveal}
          >
            Since you’ve made it this far, why not take a moment to connect?
            Pick a time that works for you, and we’ll instantly set up a video
            call—quick, easy, and just for you.
          </motion.p>
        </motion.div>

        {/* Card Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <div className="card-modern relative overflow-visible glass shadow-float">
            {/* Decorative Glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-60" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none opacity-40" />

            <div className="relative z-10 space-y-8 p-4 sm:p-6 lg:p-8">
              {/* Duration Selection */}
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <label className="text-xs font-bold text-foreground-muted uppercase tracking-wider block">
                  Select Duration
                </label>
                <motion.div
                  className="grid grid-cols-2 gap-3 sm:gap-4"
                  variants={staggerContainer}
                >
                  <motion.div variants={staggerItem}>
                    <DurationOption
                      value={15}
                      label="15 Mins"
                      isSelected={duration === 15}
                      onClick={setDuration}
                    />
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <DurationOption
                      value={30}
                      label="30 Mins"
                      isSelected={duration === 30}
                      onClick={setDuration}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Date & Time Selection */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="space-y-3" variants={staggerItem}>
                  <label className="text-xs font-bold text-foreground-muted uppercase tracking-wider block">
                    Date
                  </label>
                  <DatePicker selectedDate={date} onSelect={setDate} />
                </motion.div>
                <motion.div className="space-y-3" variants={staggerItem}>
                  <label className="text-xs font-bold text-foreground-muted uppercase tracking-wider block">
                    Time
                  </label>
                  <TimePicker selectedTime={time} onSelect={setTime} />
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="pt-4"
                variants={staggerItem}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence mode="wait">
                  {!generatedLink ? (
                    <motion.button
                      key="generate-btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      onClick={handleGenerate}
                      disabled={!date || !time}
                      whileHover={{
                        scale: !date || !time ? 1 : 1.02,
                        y: !date || !time ? 0 : -2,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                      }}
                      whileTap={{
                        scale: !date || !time ? 1 : 0.98,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 20,
                        },
                      }}
                      className={`btn btn-primary w-full justify-center group h-12 sm:h-14 ${!date || !time
                        ? "opacity-60 cursor-not-allowed grayscale"
                        : ""
                        }`}
                      type="button"
                    >
                      <span className="text-sm sm:text-base">
                        Generate Meeting Link
                      </span>
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </motion.button>
                  ) : (
                    <motion.div
                      key="success-state"
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className="space-y-3"
                    >
                      <motion.a
                        href={generatedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary w-full justify-center h-12 sm:h-14 font-bold"
                        whileHover={{
                          scale: 1.02,
                          y: -2,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                        }}
                        whileTap={{
                          scale: 0.98,
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 20,
                          },
                        }}
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm sm:text-base">
                          Open in Google Calendar
                        </span>
                      </motion.a>
                      <motion.button
                        onClick={() => setGeneratedLink("")}
                        className="btn btn-ghost w-full text-xs sm:text-sm font-medium text-foreground-muted hover:bg-secondary-background h-10"
                        type="button"
                        whileHover={{
                          scale: 1.01,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                        }}
                        whileTap={{
                          scale: 0.98,
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 20,
                          },
                        }}
                      >
                        Reset & Create New
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/40 pointer-events-none" />
    </section>
  );
}
