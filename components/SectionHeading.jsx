import Reveal from "./Reveal";

/**
 * Shared eyebrow + title + lead block, so every section shares one rhythm.
 */
const SectionHeading = ({
  eyebrow,
  title,
  lead,
  align = "center",
  as: Tag = "h2",
  className = "",
}) => {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${centered ? "eyebrow-center" : ""}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={0.08}>
        <Tag className="mt-5">{title}</Tag>
      </Reveal>

      {lead && (
        <Reveal delay={0.16}>
          <p className={`lead mt-5 max-w-2xl ${centered ? "mx-auto" : ""}`}>
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
