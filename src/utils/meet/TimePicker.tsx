import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from '@/motion/motion';
import { generateTimeSlots } from '@/utils/index';
import { Clock, ChevronDown } from 'lucide-react';


interface TimePickerProps {
    selectedTime: string;
    onSelect: (time: string) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ selectedTime, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeSlots = generateTimeSlots();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        // Z-Index Logic: Higher z-index when open
        <div className={`relative w-full ${isOpen ? 'z-50' : 'z-20'}`} ref={containerRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 ${isOpen || selectedTime ? 'border-primary bg-primary/5 text-primary' : 'border-custom bg-card text-foreground-secondary hover:border-primary/50'
                    }`}
                type="button"
            >
                <div className="flex items-center gap-3">
                    <Clock size={18} />
                    <span className="font-medium text-sm">{selectedTime || "Select Time"}</span>
                </div>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-0 mb-2 w-full p-2 rounded-xl bg-card border border-custom shadow-float backdrop-blur-xl origin-bottom"
                    >
                        <div className="flex items-center gap-2 mb-2 px-2 py-1 text-[10px] font-bold text-foreground-muted uppercase tracking-wider border-b border-custom">
                            Available Slots
                        </div>
                        <div className="max-h-50 overflow-y-auto custom-scrollbar flex flex-col gap-1">
                            {timeSlots.map(time => (
                                <button
                                    key={time}
                                    onClick={() => { onSelect(time); setIsOpen(false); }}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${selectedTime === time ? 'bg-primary text-white' : 'hover:bg-secondary-background text-foreground-secondary'
                                        }`}
                                    type="button"
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};