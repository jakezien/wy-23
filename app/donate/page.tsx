"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DonateModal from "../components/DonateModal";
import Home from "../page";

export default function Donate() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show modal when page loads
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    // Navigate back to home page after modal closes
    setTimeout(() => {
      router.push("/");
    }, 300); // Small delay to allow modal close animation
  };

  return (
    <>
      {/* Render home page content */}
      <Home />

      {/* Show donate modal on top */}
      <DonateModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  );
}
