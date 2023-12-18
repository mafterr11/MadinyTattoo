import { FaBandAid, FaSoap, FaSun, FaRegHandPeace, FaHandHoldingWater } from 'react-icons/fa';

const TattooCare = () => {
  const steps = [
    {
      icon: <FaBandAid className="text-4xl text-accent" />,
      title: 'Păstrează-l Acoperit',
      description: 'După procedură, artistul va acoperi tatuajul cu un bandaj. Este important să menții bandajul pentru cel puțin 2-4 ore pentru a proteja tatuajul de bacterii și a începe procesul de vindecare.'
    },
    {
      icon: <FaSoap className="text-4xl text-accent" />,
      title: 'Curăță Blând',
      description: 'Îndepărtează bandajul și curăță tatuajul cu apă călduță și săpun antibacterian. Fă-o cu mișcări ușoare, fără a freca, și clătește bine.'
    },
    {
      icon: <FaSun className="text-4xl text-accent" />,
      title: 'Evită Soarele',
      description: 'Evită expunerea directă la soare, deoarece razele UV pot deteriora tatuajul. Folosește cremă cu protecție solară în cazul expunerilor inevitabile.'
    },
    {
      icon: <FaRegHandPeace className="text-4xl text-accent" />,
      title: 'Hidratează',
      description: 'Aplică o cremă hidratantă specială pentru tatuaje sau o loțiune fără parfum pentru a menține pielea hidratată și a favoriza vindecarea.'
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
