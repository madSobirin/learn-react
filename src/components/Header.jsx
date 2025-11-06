export const Header = (props) => {
  const { name = "Ahmad", angka = "3" } = props;
  return (
    <>
      <h1 className="text-white">
        Ini adalah {name}, dan saya mau belajar react
      </h1>
    </>
  );
};