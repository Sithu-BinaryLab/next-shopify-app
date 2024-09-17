import { useTranslations } from "next-intl";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

function TermsConditions() {
  const translationText = useTranslations();
  return (
    <main>
      <Header />
      <div className="py-10 container mx-auto px-10">
        <div className="h-96 mt-20 px-5 md:mx-40">
          <h1 className="text-2xl text-surface-foreground font-bold mb-2 ">
            {translationText("Terms & Conditions")}
          </h1>
          <p className="text-lg text-primary-foreground mb-6 text-justify">
            {translationText(
              "By accessing or using the app, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions"
            )}
          </p>
          <p className="italic">
            {translationText("This document was last updated on Sep 17, 2024")}
          </p>
        </div>
        <div className="px-5">
          <Footer />
        </div>
      </div>
    </main>
  );
}
export default TermsConditions;
