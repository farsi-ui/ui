import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

/**
 * Utilities for RTL (Right-to-Left) support in Persian applications
 */

/**
 * Convert English numbers to Persian numbers
 */
export function toPersianNumber(num: number | string): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  return String(num).replace(/\d/g, (digit) => persianDigits[Number.parseInt(digit)])
}

/**
 * Convert Persian numbers to English numbers
 */
export function toEnglishNumber(num: string): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  let result = num
  persianDigits.forEach((persianDigit, index) => {
    result = result.replace(new RegExp(persianDigit, "g"), String(index))
  })
  return result
}

/**
 * Format date to Persian locale
 */
export function formatPersianDate(date: Date): string {
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

/**
 * Format number to Persian locale
 */
export function formatPersianNumber(num: number): string {
  return num.toLocaleString("fa-IR")
}

/**
 * Check if text direction should be RTL
 */
export function isRTL(text: string): boolean {
  const rtlChars = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/
  return rtlChars.test(text)
}
