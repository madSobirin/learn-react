export const Main = (p) => {
  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-white">{p.children}</h1>
        </div>
      </main>
    </>
  );
};
