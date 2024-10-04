type AccesibilityExampleProps = {
  text: string;
  background: string;
};

export const AccesibilityExample = ({
  text,
  background,
}: AccesibilityExampleProps) => {
  return (
    <section
      style={{ background: background, color: text }}
      className="flex items-center justify-center text-center rounded-[6px] size-full"
    >
      Accesibility Example
    </section>
  );
};
