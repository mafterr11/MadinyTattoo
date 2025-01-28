export default function AvansTatuaje() {
  return (
    <div className="rounded-2xl pt-24 max-xl:px-4 max-md:text-center xl:container">
      <h2 className="text-accent mb-4 text-2xl font-bold">
        Politica de avans pentru programări
      </h2>
      <p className="mb-4">
        Pentru a confirma o programare la salonul nostru de tatuaj, este necesar
        un avans cuprins între
        <span className="font-semibold"> 100 și 400 lei</span>, în funcție de
        costul total al tatuajului.
      </p>
      <h3 className="mb-3 text-xl font-semibold text-red-500">
        Avansul este <span className="underline">nereturnabil</span> în
        următoarele situații:
      </h3>
      <ul className="mb-4 list-inside list-disc space-y-2">
        <li className="text-lg">Clientul nu se prezintă la programare.</li>
        <li className="text-lg">
          Clientul nu anunță în timp util dorința de a reprograma (cu cel puțin{" "}
          <span className="font-semibold">48 de ore</span> înainte de ora
          stabilită).
        </li>
      </ul>
      <p className="mb-4">
        Această politică ne ajută să respectăm timpul fiecărui client și să
        menținem un program eficient. Dacă ne anunțați cu cel puțin{" "}
        <span className="font-semibold">48 de ore</span> înainte, vom face tot
        posibilul să găsim o nouă dată convenabilă pentru reprogramare, fără a
        pierde avansul achitat.
      </p>
      <h2 className="mt-24 text-center font-medium">
        Vă mulțumim pentru înțelegere și pentru încrederea acordată!
      </h2>
    </div>
  );
}
