"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, Code } from "lucide-react"

interface ConsentModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function ConsentModal({ isOpen, onClose, onConfirm }: ConsentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5 text-orange-500" />
            Final Security Confirmation
          </DialogTitle>
          <DialogDescription className="text-left space-y-4 pt-4">
            <p className="text-gray-600 dark:text-gray-300">Before proceeding, please confirm you understand:</p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Eye className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Read-Only Access</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We can only read your files, never modify or delete them
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Lock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Secure Storage</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Your backups are encrypted and stored on Cloudflare's secure infrastructure
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Code className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Open Source</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Our code is publicly auditable on GitHub</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/50 p-4 rounded-lg">
              <p className="text-sm text-orange-800 dark:text-orange-200">
                You can revoke this access at any time through your Google Account settings or our dashboard.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end space-x-3 pt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-orange-500 hover:bg-orange-600 text-white">
            I Understand, Proceed
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
