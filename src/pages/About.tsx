import { useState, useEffect, useRef } from "react";
import {  Download, Mail } from "lucide-react";
import { roles, SITE_CONFIG, socialLinks } from "@/data/constants";
import Profile3D from "@/components/common/Profile3D";
import { motion, staggerContainer, staggerItem, textReveal, textBlurIn, buttonPrimary, buttonVariants, float } from "@/motion/motion";
import { SocialLink, type SocialLinkProps } from "@/components/common/SocialLink";
import Button from "@/components/ui/Button";
import { BackgroundBlobs } from "@/components/effects/BackgroundBlobs";
import { useInView } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const navigator = useNavigate();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Typing Effect
  useEffect(() => {
    const text = roles[currentRole];
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    setDisplayedText("");
    setIsTyping(true);

    const type = () => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        timer = setTimeout(type, 80);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    };

    type();
    return () => clearTimeout(timer);
  }, [currentRole]);

  const scrollTo = (str: string) => {
    navigator(str)
  };

  return (
    <section id="about" className="relative overflow-hidden bg-mesh section-y">
      <BackgroundBlobs opacity="normal" blur="heavy" />

      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            ref={ref}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1
              className="display-md"
              variants={textBlurIn}
            >
              Hi, I'm{" "}
              <span className="gradient-text">{SITE_CONFIG.author.name}</span>
            </motion.h1>

            <motion.div
              className="display-sm"
              variants={textReveal}
            >
              <span className="text-foreground-secondary">I am </span>
              <span className="gradient-text inline-block">
                {displayedText}
                <motion.span
                  animate={{
                    opacity: isTyping ? [1, 0, 1] : 0,
                    scale: isTyping ? [1, 1.1, 1] : 1
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: isTyping ? Infinity : 0,
                    ease: isTyping ? ["easeInOut", "easeInOut", "easeInOut"] : "linear"
                  }}
                  className="ml-1 inline-block"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              className="body-xl text-foreground-secondary/90"
              variants={staggerItem}
            >
              {SITE_CONFIG.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={staggerItem}
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  variant="secondary"
                  onClick={() => window.open(SITE_CONFIG.resumeLink, "_blank")}
                >
                  <Download className="w-5 h-5" /> Download CV
                </Button>
              </motion.div>

              <motion.div
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={buttonPrimary}
              >
                <Button variant="primary" onClick={() => scrollTo("/contact")}>
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </Button>

              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4 justify-center lg:justify-start"
              variants={staggerItem}
            >
              {socialLinks.map((link: SocialLinkProps, i: number) => (
                <SocialLink key={link.name} link={link} index={i} />
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
            animate={isInView ? {
              opacity: 1,
              scale: 1,
              rotateY: 0
            } : {}}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }}
          >
            {isInView && (
              <motion.div
                animate={float}
              >
                <Profile3D
                  name={SITE_CONFIG.author.name}
                  initials={SITE_CONFIG.avatar}
                  isVisible
                />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? {
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          } : {}}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.button
            onClick={() => scrollTo("#skills")}
            className="flex flex-col items-center gap-2 group"
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <span className="caption text-foreground-secondary group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
            <motion.div
              animate={{
                y: [0, 8, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}