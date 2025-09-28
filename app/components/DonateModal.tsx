"use client";
import { useEffect } from "react";
import Image from "next/image";
import PageTitle from "./pageTitle";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const handleDonateClick = () => {
    // Submit the PayPal form
    const form = document.getElementById("paypal") as HTMLFormElement;
    if (form) {
      form.submit();
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>

            <PageTitle title="Donate" />

            {/* Hidden PayPal form */}
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              id="paypal"
              className="hidden"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="XW85PVVH2P3CA"
              />
              <Image
                alt=""
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width={1}
                height={1}
              />
            </form>

            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-12">
                {/* Donate Button */}
                <button
                  onClick={handleDonateClick}
                  className="group relative inline-block bg-black text-white px-8 py-4 text-xl font-bold hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <span>Donate Now</span>
                    <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 0L8.59 1.41L14.17 7H0V9H14.17L8.59 14.59L10 16L18 8L10 0Z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>

              {/* Details Section */}
              <div className="space-y-8">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    Your donation will support our students, projects, programs,
                    and the Q&apos;eros community.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg italic mb-2">
                    &ldquo;Less than .01% of the world&apos;s development
                    funding goes directly to indigenous communities.&rdquo;
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    — First Peoples Worldwide
                  </p>
                  <p className="font-semibold">Help us change this.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  All donations are tax-deductible and processed through our
                  fiscal sponsor, Wiraqocha Foundation, a 501(c)3 non-profit
                  organization.
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  To wire funds, please contact us at{" "}
                  <a
                    href="mailto:info@willkayachay.org"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    info@willkayachay.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
