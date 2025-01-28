import Footer from "../../components/layout/Footer";
export default function AftercareLayout({ children }) {
  return (
    <div className='bg-despre bg-cover bg-no-repeat bg-scroll lg:bg-fixed bg-[center_right_-45rem] md:bg-center relative'>
      <div className="page bg-primary/40">
      {children}
      <Footer />
      </div>
    </div>
  );
}
