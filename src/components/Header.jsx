export const Header = (props) => {
  const { name = "Ahmad", main = "3" } = props;
  return (
    <>
      <h1>
        Ini adalah {name}, dan saya kelas {main}
      </h1>
    </>
  );
};
