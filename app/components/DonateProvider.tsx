"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import DonateModal from "./DonateModal";

interface DonateContextType {
  showDonateModal: () => void;
  hideDonateModal: () => void;
}

const DonateContext = createContext<DonateContextType | undefined>(undefined);

export const useDonateModal = () => {
  const context = useContext(DonateContext);
  if (!context) {
    throw new Error("useDonateModal must be used within a DonateProvider");
  }
  return context;
};

interface DonateProviderProps {
  children: ReactNode;
}

export const DonateProvider = ({ children }: DonateProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showDonateModal = () => setIsModalOpen(true);
  const hideDonateModal = () => setIsModalOpen(false);

  return (
    <DonateContext.Provider value={{ showDonateModal, hideDonateModal }}>
      {children}
      <DonateModal isOpen={isModalOpen} onClose={hideDonateModal} />
    </DonateContext.Provider>
  );
};
