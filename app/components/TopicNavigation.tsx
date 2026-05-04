'use client'

import Link from 'next/link'

type Props = {
  nextUrl: string
  nextLabel: string
}

export default function TopicNavigation({ nextUrl, nextLabel }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
      >
        Home
      </Link>
      <Link
        href={nextUrl}
        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Continue to {nextLabel}
      </Link>
    </div>
  )
}
