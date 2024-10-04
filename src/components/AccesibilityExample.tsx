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
      className="flex flex-col p-8 items-center justify-center text-center rounded-[6px] size-full"
    >
      <p className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        The People of the Kingdom
      </p>
      <p>
        A modal dialog that interrupts the user with important content and
        expects a response.
      </p>
      <p className="font-bold">HTML docs</p>
    </section>
  );
};
