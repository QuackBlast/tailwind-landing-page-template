"use client";

import { useState } from "react";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(false); // Set to false to hide banner by default

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 z-50 w-full md:bottom-8 md:right-12 md:w-auto">
          <div className="flex justify-between bg-slate-800 p-3 text-sm text-slate-50 shadow-lg md:rounded-sm">
            <div className="inline-flex text-slate-500">
              <span className="font-medium text-slate-50">
                Välkommen till AnteckningsBanken
              </span>
            </div>
            <button
              className="ml-3 border-l border-gray-700 pl-2 text-slate-500 hover:text-slate-400"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Stäng</span>
              <svg
                className="h-4 w-4 shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
