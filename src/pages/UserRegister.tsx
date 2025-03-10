
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import BenefitsSection from "@/components/auth/BenefitsSection";
import RegisterForm from "@/components/auth/RegisterForm";
import VerificationModal from "@/components/VerificationModal";

const UserRegister = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleRegistrationSuccess = (email: string) => {
    setUserEmail(email);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
        {/* Left column - Benefits */}
        <BenefitsSection />

        {/* Right column - Registration form */}
        <RegisterForm onSubmitSuccess={handleRegistrationSuccess} />
      </div>

      {/* Verification Modal */}
      <VerificationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        email={userEmail} 
      />
    </div>
  );
};

export default UserRegister;
