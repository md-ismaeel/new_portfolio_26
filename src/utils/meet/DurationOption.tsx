import { motion, staggerItem, cardHover } from '@/motion/motion';
import { Clock } from 'lucide-react';

interface DurationOptionProps {
    value: number;
    label: string;
    isSelected: boolean;
    onClick: (value: number) => void;
}

export const DurationOption: React.FC<DurationOptionProps> = ({ value, label, isSelected, onClick }) => (
    <motion.button
        onClick={() => onClick(value)}
        variants={staggerItem}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.94 }}
        className={`w-full p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${isSelected
            ? 'bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(66,133,244,0.15)]'
            : 'bg-card border-custom-card hover:border-primary/50 text-foreground-secondary'
            }`}
        type="button"
    >
        <motion.div
            className={`p-2 rounded-full transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-secondary-background text-foreground-muted'
                }`}
            variants={cardHover}
        >
            <Clock size={20} />
        </motion.div>
        <span className="font-semibold text-sm">{label}</span>
    </motion.button>
);