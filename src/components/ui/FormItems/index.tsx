export const FormItems = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start">
      {children}
    </div>
  );
};
