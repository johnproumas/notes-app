"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
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
    >
      Logout
    </Button>
  );
}
