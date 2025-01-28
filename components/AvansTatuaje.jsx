export default function AvansTatuaje() {
    return (
      <div className="xl:container max-xl:px-4 pt-24 shadow-lg rounded-2xl max-md:text-center">
        <h2 className="font-bold text-2xl text-accent mb-4">Politica de avans pentru programări</h2>
        <p className=" mb-4">
          Pentru a confirma o programare la salonul nostru de tatuaj, este necesar un avans cuprins între
          <span className="font-semibold"> 100 și 400 lei</span>, în funcție de costul total al tatuajului.
        </p>
        <h3 className="text-xl font-semibold text-red-500 mb-3">Avansul este <span className="underline">nereturnabil</span> în următoarele situații:</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li className="text-lg">Clientul nu se prezintă la programare.</li>
          <li className="text-lg">Clientul nu anunță în timp util dorința de a reprograma (cu cel puțin <span className="font-semibold">48 de ore</span> înainte de ora stabilită).</li>
        </ul>
        <p className=" mb-4">
          Această politică ne ajută să respectăm timpul fiecărui client și să menținem un program eficient.
          Dacă ne anunțați cu cel puțin <span className="font-semibold">48 de ore</span> înainte, vom face tot posibilul să găsim o
          nouă dată convenabilă pentru reprogramare, fără a pierde avansul achitat.
        </p>
        <h2 className="font-medium text-center mt-24">Vă mulțumim pentru înțelegere și pentru încrederea acordată!</h2>
      </div>
    );
  }