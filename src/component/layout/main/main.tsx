import { appStyle } from "../../../db/appStyle";

type MainProp = {
  children: React.ReactNode;
};

export const Main = ({ children }: MainProp) => {
  return (
    <main
      style={{
        height: `${appStyle.appSectionDefaultHeight}`,
        minHeight: `${appStyle.appSectionDefaultMinimunHeight}`,
        backgroundColor: `${appStyle.appBackgroundColor}`,
      }}
    >
      {children}
    </main>
  );
};
