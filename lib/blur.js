import blurData from "./blurData";

/**
 * Spreads the pre-generated placeholder onto a next/image.
 *
 *   <Image src={src} {...blurProps(src)} />
 *
 * Keep this on the server side of a component boundary: importing it into a
 * "use client" module would drag the whole placeholder map into the browser
 * bundle, instead of shipping only the handful of strings a page renders.
 */
export const blurProps = (src) => {
  const blurDataURL = blurData[src];
  return blurDataURL ? { placeholder: "blur", blurDataURL } : {};
};

export default blurProps;
