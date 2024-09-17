import { useTranslations } from "next-intl";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

function About() {
  const translationText = useTranslations();
  return (
    <main>
      <Header />
      <div className="py-10 container mx-auto px-10">
        <div className="h-96 mt-20 px-5 md:mx-40">
          <h1 className="text-2xl text-surface-foreground font-bold mb-2">
            {translationText("About")}
          </h1>
          <p className="text-lg text-primary-foreground mb-6 text-justify">
            {translationText(
              "This website is built with Next js Commerce which is a ecommerce template for creating a headless Shopify storefront"
            )}
          </p>
        </div>
        <div className="px-5">
          <Footer />
        </div>
      </div>
    </main>
  );
}
export default About;
