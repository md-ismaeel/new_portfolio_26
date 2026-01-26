import { motion } from "@/motion/motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/clsx/cn";

interface InputProps {
    name: string;
    label?: string;
    placeholder?: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    error?: string;
    touched?: boolean;
    icon?: React.ReactNode;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

// INPUT COMPONENT
export function Input({
    name,
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    onBlur,
    error,
    touched,
    icon,
    required,
    disabled,
    className = "",
}: InputProps) {
    const hasError = error && touched;
    const isSuccess = !error && touched && value;

    const inputClasses = cn(
        // Base styles
        "w-full py-4 rounded-lg transition-all duration-300",
        "text-foreground placeholder-foreground-muted",
        "backdrop-blur-sm font-medium text-sm",
        "bg-card/50",

        // Glowing ring on focus
        "focus:outline-none",
        "shadow-[0_0_0_1px_var(--primary)]",
        "focus:shadow-[0_0_0_1px_var(--primary),0_0_20px_rgba(66,133,244,0.4)]",
        "dark:focus:shadow-[0_0_0_1px_var(--primary),0_0_25px_rgba(96,165,250,0.5)]",

        // Padding for icon
        icon ? "pl-12 pr-12" : "pl-6 pr-12",

        // Error state
        hasError ?
            "shadow-[0_0_0_2px_rgb(239,68,68)] focus:shadow-[0_0_0_3px_rgb(239,68,68),0_0_20px_rgba(239,68,68,0.4)]" : "",

        // Success state
        isSuccess ?
            "shadow-[0_0_0_2px_rgb(34,197,94)] focus:shadow-[0_0_0_3px_rgb(34,197,94),0_0_20px_rgba(34,197,94,0.3)]" : "",

        // Disabled
        disabled ? "opacity-60 cursor-not-allowed" : "",

        className
    );

    return (
        <div className="space-y-2.5 w-full">
            {/* Label */}
            {label && (
                <label
                    htmlFor={name}
                    className="block text-xs font-bold text-foreground uppercase tracking-wider"
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <div className="relative">
                {/* Left Icon */}
                {icon && (
                    <motion.div
                        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 text-foreground-muted"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        {icon}
                    </motion.div>
                )}

                {/* Input */}
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={inputClasses}
                />

                {/* Success Icon */}
                {isSuccess && (
                    <motion.div
                        className="absolute right-5 top-1/2 -translate-y-1/2"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                )}

                {/* Error Icon */}
                {hasError && (
                    <motion.div
                        className="absolute right-5 top-1/2 -translate-y-1/2"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    >
                        <AlertCircle className="w-5 h-5 text-red-500" />
                    </motion.div>
                )}
            </div>

            {/* Error Message */}
            {hasError && (
                <motion.p
                    className="text-xs text-red-500 flex items-center gap-1 font-medium pl-2"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <AlertCircle className="w-3.5 h-3.5" />
                    {error}
                </motion.p>
            )}
        </div>
    );
}


interface TextareaProps {
    name: string;
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: () => void;
    error?: string;
    touched?: boolean;
    required?: boolean;
    disabled?: boolean;
    maxLength?: number;
    rows?: number;
    className?: string;
}

// TEXTAREA COMPONENT
export function Textarea({
    name,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    touched,
    required,
    disabled,
    maxLength = 1000,
    rows = 6,
    className = "",
}: TextareaProps) {
    const hasError = error && touched;
    const isSuccess = !error && touched && value;

    const charCount = value.length;
    const charColor =
        charCount > maxLength * 0.95
            ? "text-red-500" : charCount > maxLength * 0.8
                ? "text-orange-500"
                : "text-foreground-muted";

    const textareaClasses = cn(
        // Base styles
        "w-full px-5 py-3.5 rounded-lg transition-all duration-300",
        "text-foreground placeholder-foreground-muted",
        "backdrop-blur-sm font-medium text-sm",
        "resize-y bg-card/50",

        // Glowing ring on focus
        // "focus:outline-none",
        "shadow-[0_0_0_1px_var(--primary)]",
        "focus:shadow-[0_0_0_1px_var(--primary),0_0_20px_rgba(66,133,244,0.4)]",
        "dark:focus:shadow-[0_0_0_1px_var(--primary),0_0_25px_rgba(96,165,250,0.5)]",

        // Padding for status icon
        "pr-12",

        // Error state
        hasError ?
            "shadow-[0_0_0_2px_rgb(239,68,68)] focus:shadow-[0_0_0_1px_rgb(239,68,68),0_0_20px_rgba(239,68,68,0.4)]" : "",

        // Success state
        isSuccess ?
            "shadow-[0_0_0_2px_rgb(34,197,94)] focus:shadow-[0_0_0_3px_rgb(34,197,94),0_0_20px_rgba(34,197,94,0.3)]" : "",

        // Disabled
        disabled ? "opacity-60 cursor-not-allowed" : "",

        className
    );

    return (
        <div className="space-y-2.5 w-full">
            {/* Label with character count */}
            <div className="flex justify-between items-center">
                {label && (
                    <label
                        htmlFor={name}
                        className="block text-xs font-bold text-foreground uppercase tracking-wider"
                    >
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}
                <span
                    className={cn(
                        "text-xs font-bold transition-colors uppercase tracking-wider",
                        charColor
                    )}
                >
                    {charCount}/{maxLength}
                </span>
            </div>

            <div className="relative">
                {/* Textarea */}
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                    maxLength={maxLength}
                    rows={rows}
                    className={textareaClasses}
                />

                {/* Success Icon */}
                {isSuccess && (
                    <motion.div
                        className="absolute right-5 top-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                )}

                {/* Error Icon */}
                {hasError && (
                    <motion.div
                        className="absolute right-5 top-4"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    >
                        <AlertCircle className="w-5 h-5 text-red-500" />
                    </motion.div>
                )}
            </div>

            {/* Error Message */}
            {hasError && (
                <motion.p
                    className="text-xs text-red-500 flex items-center gap-1 font-medium pl-2"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <AlertCircle className="w-3.5 h-3.5" />
                    {error}
                </motion.p>
            )}
        </div>
    );
}