"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  size?: "sm" | "lg" | "icon";
}

export default function LogoutButton({ size }: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };
  return (
    <Button
      variant={"outline"}
      className="cursor-pointer"
      onClick={handleLogout}
      size={size}
    >
      Logout
    </Button>
  );
}
