import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Img1 from "../../../assets/logo-3.png";
import Img2 from "../../../assets/logo-32.png";
import Img3 from "../../../assets/logo-53.png";
import Img4 from "../../../assets/Frame.png";

export function CustomeTabs() {
  const content = (
    <div>
      <div className="flex justify-around">
        <img src={Img1} alt="img1" />
        <img src={Img2} alt="img2" />
        <img src={Img3} alt="img3" />
        <img src={Img4} alt="img4" />
      </div>
      <div className="flex justify-around">
        <img src={Img4} alt="img4" />
        <img src={Img3} alt="img3" />
        <img src={Img2} alt="img2" />
        <img src={Img1} alt="img1" />
      </div>
    </div>
  );
  const data = [
    {
      label: "Contact",
      value: "html",
      desc: content,
    },
    {
      label: "Contact",
      value: "react",
      desc: content,
    },
  ];

  return (
    <Tabs id="custom-animation" value="html">
      <TabsHeader placeholder={undefined}>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} placeholder={undefined}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
        placeholder={undefined}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
