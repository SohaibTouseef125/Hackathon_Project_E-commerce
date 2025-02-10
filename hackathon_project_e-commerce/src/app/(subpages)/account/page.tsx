import AccountHeroSection from "@/components/account/AccountHeroSection";

import RegisterForm from "@/components/account/RegisterForm";
import FeaturesShop from "@/components/shop/FeaturesShop";

const Account = () => {
  return (
    <>
      <AccountHeroSection />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RegisterForm />
        </div>
      </main>
      <FeaturesShop />
    </>
  );
};

export default Account;
