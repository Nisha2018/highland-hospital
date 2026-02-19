import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";
import { LucideIcon,icons,HelpCircle } from "lucide-react";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIconComponent(iconName:string):LucideIcon {

  if(!iconName) {
    return HelpCircle;
  }

  const IconComponent = icons[iconName as keyof typeof icons];
 
  // If the icon component is found, return it.
  if (IconComponent) {
    return IconComponent;
  }
 
  // If the icon is not found, log a warning and return a default icon.
  // This prevents the application from crashing if an invalid icon name is provided.
  console.warn(`Icon "${iconName}" not found. Falling back to default icon.`);
  return HelpCircle; // Default fallback icon
}

