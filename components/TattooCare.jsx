import { FaCheck } from "react-icons/fa6";

const TattooCare = () => {
  const steps = [
    {
      title: "Păstrează-l acoperit",
      description:
        "Păstrează folia protectoare timp de 2-3 zile - este impermeabilă, deci poți face duș fără griji.",
    },
    {
      title: "Igienă",
      description:
        "Schimbă lenjeria de pat în ziua în care îndepărtezi folia și evită contactul tatuajului cu orice mediu care ar putea duce la infectarea acestuia, cum ar fi praf, transpirație sau părul de animale.",
    },
    {
      title: "Curăță tatuajul cu grijă",
      description:
        "Spală-l cu apă călduță și săpun antibacterian, tamponează-l ușor cu un prosop curat și așteaptă să se usuce bine.",
    },
    {
      title: "Cremă de vindecare",
      description:
        "Dupa spălare, aplică un strat foarte subțire de cremă specială pentru vindecarea tatuajului (ex: Sorry Mom) pentru a menține pielea hidratată. Repetă acest proces de 3-4 ori pe zi timp de 2 săptămâni, pentru o vindecare optimă.",
    },
    {
      title: "Protejează tatuajul",
      description:
        "Evită expunerea la soare, băi lungi în cadă, piscină, saună sau solar pe toată perioada de vindecare.",
    },
  ];

  return (
    <div className=" mx-auto p-3 xl:mt-24 mb-12">
      <h1 className="font-bold text-center xl:mt-24 mb-24"><span className="text-accent">Aftercare-ul</span> tatuajelor</h1>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className="flex items-start mb-6">
            <div className="ml-4">
              <h3 className="text-xl font-semibold flex items-center max-md:justify-center gap-x-2">
                <FaCheck className="text-accent" size={32} /> {step.title}
              </h3>
              <p className="max-md:text-balance">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TattooCare;
