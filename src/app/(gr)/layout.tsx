import Nav from "@components/core/Nav";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="bg-black">
      <Nav />
      {children}
    </div>
  );
};

export default RootLayout;
