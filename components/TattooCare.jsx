import { FaBandAid, FaSoap, FaSun, FaRegHandPeace, FaHandHoldingWater } from 'react-icons/fa';

const TattooCare = () => {
  const steps = [
    {
      icon: <FaBandAid className="text-4xl text-accent" />,
      title: 'Păstrează-l Acoperit',
      description: 'După procedură, artistul va acoperi tatuajul cu o folie impermeabilă. Este important să menții folia pentru cel puțin 3-4 zile pentru a proteja tatuajul de bacterii și a începe procesul de vindecare.'
    },
    {
      icon: <FaSoap className="text-4xl text-accent" />,
      title: 'Curăță Blând',
      description: 'Îndepărtează folia și curăță tatuajul cu apă călduță și săpun antibacterian(Protex). Fă-o cu mișcări ușoare, fără a freca, și clătește bine.'
    },
    {
      icon: <FaSun className="text-4xl text-accent" />,
      title: 'Evită Soarele',
      description: 'Evită expunerea directă la soare, deoarece razele UV pot deteriora tatuajul. Folosește cremă cu protecție solară în cazul expunerilor inevitabile.'
    },
    {
      icon: <FaRegHandPeace className="text-4xl text-accent" />,
      title: 'Hidratează',
      description: 'După ce cureți zona, aplică o cremă hidratantă specială pentru tatuaje(Sorry Mom) pentru a menține pielea hidratată și a favoriza vindecarea. Repetă de 3/4 ori pe zi, timp de două săptămâni.'
    },
    {
      icon: <FaHandHoldingWater className="text-4xl text-accent" />,
      title: 'Evită Înotul',
      description: 'Evită bazinele de înot, saunele și băile lungi în primele săptămâni. Apa clorată sau murdară poate infecta tatuajul, iar expunerea prelungită la apă poate afecta vindecarea.'
    }
  ];

  return (
    <div className="container mx-auto p-6 mt-24 mb-12">
      <h2 className="text-3xl font-bold text-center  mb-24"><span className="text-accent">Instrucțiuni</span> de Îngrijire a <span className="text-accent">Tatuajului</span></h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className="flex items-start mb-6">
            <div>{step.icon}</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold ">{step.title}</h3>
              <p className="">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TattooCare;
