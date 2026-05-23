import * as React from 'react'
import { cn } from '@/lib/utils'

export function Button({
  className,
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
        variant === 'primary' && 'bg-acid text-paper hover:bg-acid/90',
        variant === 'secondary' && 'border border-border bg-paper text-ink hover:bg-paper2',
        variant === 'ghost' && 'text-ink2 hover:bg-paper2',
        className,
      )}
      {...props}
    />
  )
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-xl border border-border bg-paper p-5', className)} {...props} />
}

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('inline-flex rounded-full bg-paper2 px-2.5 py-1 text-xs font-semibold text-ink2', className)} {...props} />
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('w-full rounded-lg border border-border bg-paper2 px-3 py-2 text-sm outline-none focus:border-acid text-ink placeholder:text-ink3', className)} {...props} />
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn('w-full rounded-lg border border-border bg-paper2 px-3 py-2 text-sm outline-none focus:border-acid text-ink placeholder:text-ink3', className)} {...props} />
}

export function StatCard({
  label,
  value,
  detail,
}: {
  label: string
  value: string | number
  detail?: string
}) {
  return (
    <Card>
      <p className="text-sm text-ink3">{label}</p>
      <p className="mt-2 text-2xl font-bold text-ink">{value}</p>
      {detail && <p className="mt-1 text-xs text-ink3">{detail}</p>}
    </Card>
  )
}

export function Modal({
  open,
  children,
}: {
  open: boolean
  children: React.ReactNode
}) {
  if (!open) return null
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">{children}</div>
}

export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return <table className={cn('w-full border-collapse text-sm', className)} {...props} />
}
