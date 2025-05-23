"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function SignOutButton() {
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/auth/signout', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to sign out');
      }
      
      // Redirect to sign-in page
      router.push('/sign-in')
    } catch (error) {
      console.error('Error signing out:', error);
      // You might want to show an error toast here
    }
  }

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="w-full justify-start"
      onClick={handleSignOut}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign out
    </Button>
  )
}

