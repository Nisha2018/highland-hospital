"use client";
import InteractiveSignInButton from "./interactive-signin-button";

interface MobileUserMenuProps {
    onMobileActionComplete?: () => void;
}

export default function MobileUserSigninOrAvatar({onMobileActionComplete}:MobileUserMenuProps) {
  return (
    <InteractiveSignInButton onNavigateStart={onMobileActionComplete} />
  );
}
