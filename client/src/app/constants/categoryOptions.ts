import { CategoryI } from "../types/TaskInterface";

export const CATEGORY_OPTIONS: Record<string, CategoryOption> = {
    Work: { value: "Work", label: "Work", backgroundColor: "#EDE4FF", color: '#9260F4' },
    Personal: { value: "Personal", label: "Personal", backgroundColor: "#FFE4F2", color: '#F478B8' },
    Shop: { value: "Shop", label: "Shop", backgroundColor: "#FFE6D4", color: '#FF9142' },
    Pets: { value: "Pets", label: "Pets", backgroundColor: "#FFF6D4" , color: '#FFD332'},
    "Self Care": { value: "Self Care", label: "Self Care", backgroundColor: "#E7F3FF" , color: '#0087FF'},
};

export interface CategoryOption {
    value: CategoryI;
    label: string;
    color: string;
    backgroundColor: string;
}
