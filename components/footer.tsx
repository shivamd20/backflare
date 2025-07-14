import Link from "next/link"
import { Github, Twitter, Mail } from "lucide-react"
import {
  ABOUT_LINK,
  CAREERS_LINK,
  CONTACT_LINK,
  FEATURES_LINK,
  GITHUB_LINK,
  MAIL_LINK,
  PRICING_LINK,
  X_COM_LINK
} from "@/lib/landing-page";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-orange-500 to-orange-600" />
              <span className="font-bold text-gray-900 dark:text-white">Backflare</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Serverless backup infrastructure built on Cloudflare's edge network.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={FEATURES_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href={PRICING_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href={GITHUB_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href={GITHUB_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ABOUT_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href={GITHUB_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={CAREERS_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href={CONTACT_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <Link href={GITHUB_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href={X_COM_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={MAIL_LINK} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Backflare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
