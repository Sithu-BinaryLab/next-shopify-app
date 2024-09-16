import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

function TermsConditions() {
  return (
    <main>
      <Header />
      <div className="py-10 container mx-auto px-10">
        <div className="h-96 mt-20 px-5 md:mx-40">
          <h1 className="text-2xl text-surface-foreground font-bold mb-2 ">
            Terms & Conditions
          </h1>
          <p className="text-lg text-primary-foreground mb-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="italic">
            This document was last updated on Sep 17, 2024.
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
