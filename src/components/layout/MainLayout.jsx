import { Navbar } from "./Navbar/Navbar";
import { Header } from "./Header";
import { Main } from "./Main";

export const Mainlayout = (p) => {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <Header title="Dashboard Page" />
        <Main>{p.children}</Main>
      </div>
    </>
  );
};
