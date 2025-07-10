import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`py-8 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Logo />
              <div className="text-sm text-gray-600">
                &copy; AnteckningsBanken - Alla rättigheter förbehållna.
              </div>
            </div>

            {/* Essential Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                className="text-gray-600 transition hover:text-gray-900"
                href="#0"
              >
                Om oss
              </Link>
              <Link
                className="text-gray-600 transition hover:text-gray-900"
                href="#0"
              >
                Kontakt
              </Link>
              <Link
                className="text-gray-600 transition hover:text-gray-900"
                href="#0"
              >
                Integritetspolicy
              </Link>
              <Link
                className="text-gray-600 transition hover:text-gray-900"
                href="#0"
              >
                Användarvillkor
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex gap-2">
              <Link
                className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                href="#0"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                </svg>
              </Link>
              <Link
                className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                href="#0"
                aria-label="Github"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
