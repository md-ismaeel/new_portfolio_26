export const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
export const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let i = 9; i <= 17; i++) {
        slots.push(`${i}:00`);
        slots.push(`${i}:30`);
    }
    return slots;
};