// import React from "react";
// import { motion, type PanInfo } from "motion/react";
// import { cn } from "@/lib/clsx/cn";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
//     size?: "sm" | "md" | "lg";
//     children: React.ReactNode;
//     className?: string;
// }

// export default function Button({
//     children,
//     variant = "primary",
//     size = "md",
//     className = "",
//     onClick,
//     ...props
// }: ButtonProps) {
//     const [ripples, setRipples] = React.useState<
//         { x: number; y: number; id: number }[]
//     >([]);

//     const variantClasses = {
//         primary: "btn-primary",
//         secondary: "btn-secondary",
//         outline: "btn-outline",
//         danger: "btn-danger",
//         ghost: "btn-ghost",
//     };

//     const sizeClasses = {
//         sm: "text-[0.9rem] px-6 py-[0.875rem]",
//         md: "text-[0.95rem] px-8 py-4",
//         lg: "text-base px-10 py-5",
//     };

//     const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         const newRipple = { x, y, id: Date.now() };
//         setRipples((prev) => [...prev, newRipple]);

//         setTimeout(() => {
//             setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
//         }, 600);

//         onClick?.(e); // ✅ Call parent onClick
//     };

//     const handleDrag = (
//         _event: MouseEvent | TouchEvent | PointerEvent,
//         info: PanInfo
//     ) => {
//         // Optional: you can remove this if you don't need drag
//         console.log("Dragging:", info.point.x, info.point.y);
//     };

//     return (
//         <motion.button
//             drag
//             onDrag={handleDrag}     // ✅ Correct typing
//             onClick={handleClick}  // ✅ Always runs ripple + user click
//             {...props}
//             className={cn(
//                 "btn relative overflow-hidden w-full",
//                 variantClasses[variant],
//                 sizeClasses[size],
//                 className
//             )}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             whileHover={{ y: -4, scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         >
//             {/* Ripple Effect */}
//             {ripples.map((ripple) => (
//                 <motion.span
//                     key={ripple.id}
//                     className="absolute rounded-full bg-white/40 pointer-events-none"
//                     style={{
//                         left: ripple.x,
//                         top: ripple.y,
//                         x: "-50%",
//                         y: "-50%",
//                     }}
//                     initial={{ width: 0, height: 0, opacity: 1 }}
//                     animate={{ width: 300, height: 300, opacity: 0 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                 />
//             ))}

//             <span className="relative z-10 flex items-center gap-2">
//                 {children}
//             </span>
//         </motion.button>
//     );
// }




import React from "react";
import { motion, type PanInfo } from "framer-motion";
import { cn } from "@/lib/clsx/cn";

interface ButtonProps {
    variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    disabled,
    type = "button",
}: ButtonProps) {
    const [ripples, setRipples] = React.useState<
        { x: number; y: number; id: number }[]
    >([]);

    const variantClasses = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "btn-outline",
        danger: "btn-danger",
        ghost: "btn-ghost",
    };

    const sizeClasses = {
        sm: "text-[0.9rem] px-6 py-[0.875rem]",
        md: "text-[0.95rem] px-8 py-4",
        lg: "text-base px-10 py-5",
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);

        onClick?.(e);
    };

    const handleDrag = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        console.log("Dragging:", info.point.x, info.point.y);
    };

    return (
        <motion.button
            drag
            onDrag={handleDrag}
            onClick={handleClick}
            disabled={disabled}
            type={type}
            className={cn(
                "btn relative overflow-hidden w-full",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Ripple Effect */}
            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    className="absolute rounded-full bg-white/40 pointer-events-none"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        x: "-50%",
                        y: "-50%",
                    }}
                    initial={{ width: 0, height: 0, opacity: 1 }}
                    animate={{ width: 300, height: 300, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            ))}

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}
