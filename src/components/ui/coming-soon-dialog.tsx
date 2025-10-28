"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ComingSoonDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
export function ComingSoonDialog({
  isOpen,
  onOpenChange,
}: ComingSoonDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-[#FF6B2B]">
            🚀 Coming Soon!
          </DialogTitle>

          <div className="text-center mt-4">
            <div className="space-y-3">
              <p className="text-base text-gray-600">
                Our mobile app is currently in development and will be launched
                soon!
              </p>
              <p className="text-sm text-gray-500">
                Stay tuned for exclusive offers and seamless vending experience
                right from your phone.
              </p>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm font-medium text-orange-800">
                  📱 Get notified when we launch!
                </p>
                <p className="text-xs text-orange-600 mt-1">
                  Follow us on social media for updates
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
