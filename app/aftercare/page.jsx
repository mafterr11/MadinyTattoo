import AftercarePage from "../../components/pages/AftercarePage";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema, howToSchema } from "../../lib/schema";
import { aftercareSteps } from "../../lib/aftercare";

const description =
  "Ghid complet de aftercare pentru tatuaje de la Madiny Tattoo: cum păstrezi folia protectoare, cum cureți tatuajul, ce cremă de vindecare folosești și cum îl protejezi pe toată perioada de vindecare.";

export const metadata = constructMetadata({
  title: "Aftercare - MadinyTattoo",
  description,
  keywords:
    "aftercare tatuaj, ingrijire tatuaj, vindecare tatuaj, cum ingrijesc tatuajul, folie protectoare tatuaj, crema vindecare tatuaj, sfaturi dupa tatuaj, tatuaj proaspat, protectie solara tatuaj",
  path: "/aftercare",
});

const Aftercare = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Aftercare", path: "/aftercare" },
        ]),
        howToSchema({
          name: "Cum îngrijești un tatuaj proaspăt",
          description,
          steps: aftercareSteps,
        }),
      ]}
    />
    <AftercarePage />
  </>
);

export default Aftercare;
