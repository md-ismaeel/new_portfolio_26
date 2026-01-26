import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from '@/motion/motion';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { getDaysInMonth, getFirstDayOfMonth, months } from '@/utils/index';

interface DatePickerProps {
    selectedDate: string;
    onSelect: (date: string) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [viewYear, setViewYear] = useState(new Date().getFullYear());
    const [viewMonth, setViewMonth] = useState(new Date().getMonth());
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleDateClick = (day: number) => {
        const localDate = new Date(viewYear, viewMonth, day);
        const year = localDate.getFullYear();
        const month = String(localDate.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        const dateStr = `${year}-${month}-${dayStr}`;
        onSelect(dateStr);
        setIsOpen(false);
    };

    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const startDay = getFirstDayOfMonth(viewYear, viewMonth);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptySlots = Array.from({ length: startDay }, (_, i) => i);

    const displayDate = selectedDate
        ? new Date(selectedDate + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
        : "Select Date";

    return (
        <div className={`relative w-full ${isOpen ? 'z-50' : 'z-20'}`} ref={containerRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 ${isOpen || selectedDate ? 'border-primary bg-primary/5 text-primary' : 'border-custom bg-card text-foreground-secondary hover:border-primary/50'
                    }`}
                type="button"
            >
                <div className="flex items-center gap-3">
                    <Calendar size={18} />
                    <span className="font-medium text-sm">{displayDate}</span>
                </div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-0 mb-2 w-full sm:w-[320px] p-4 rounded-xl bg-card border border-custom shadow-float backdrop-blur-xl origin-bottom"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <button onClick={() => viewMonth === 0 ? (setViewMonth(11), setViewYear(viewYear - 1)) : setViewMonth(viewMonth - 1)} type="button" className="p-1 hover:bg-secondary-background rounded-full transition-colors"><ChevronLeft size={16} /></button>
                            <span className="font-bold text-sm text-foreground">{months[viewMonth]} {viewYear}</span>
                            <button onClick={() => viewMonth === 11 ? (setViewMonth(0), setViewYear(viewYear + 1)) : setViewMonth(viewMonth + 1)} type="button" className="p-1 hover:bg-secondary-background rounded-full transition-colors"><ChevronRight size={16} /></button>
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="text-center text-[10px] font-bold text-foreground-muted py-1">{d}</div>)}
                            {emptySlots.map(i => <div key={`empty-${i}`} />)}
                            {days.map(day => {
                                const currentDayStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                                const isSelected = selectedDate === currentDayStr;

                                return (
                                    <motion.button
                                        key={day}
                                        onClick={() => handleDateClick(day)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${isSelected ? 'bg-primary text-white shadow-md' : 'text-foreground hover:bg-secondary-background'
                                            }`}
                                        type="button"
                                    >
                                        {day}
                                    </motion.button>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};