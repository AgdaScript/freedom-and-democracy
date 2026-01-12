"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function EventoHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full py-6 px-4 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-end">
        <Link
          href="/#timeline"
          className={`inline-flex items-center justify-center w-10 h-10 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full transition-all duration-500 ease-out ${
            isVisible
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-0 rotate-90"
          }`}
          style={{
            transitionDelay: "100ms",
          }}
        >
          <X className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}

