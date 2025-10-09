import { ReactNode } from "react";

interface InstituteHeroProps {
  title: string;
  subtitle: string;
  image: string;
  children?: ReactNode;
}

const InstituteHero = ({ title, subtitle, image, children }: InstituteHeroProps) => {
  return (
    <section 
      className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-6">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};

export default InstituteHero;
