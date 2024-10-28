import React from "react";
import Card from "../components/Card.jsx";

const Tools = () => {
  return (
    <div className="page-container">
      <Card
        image="ClassiFlyerLogo.webp"
        title="ClassiFlyer"
        description="This tool uses sensor data to identify UAS platforms"
        url="https://idsg.dev.svc.ac2sp.army.mil/ClassiFlyer"
      />
      <Card
        image="VigilantNitroLogo.webp"
        title="Vigilant Nitro"
        description="Multi-language translation tool for PPT, PDF, and Docx files"
        url="https://idsg.dev.svc.ac2sp.army.ic.gov/VigilantNitro"
      />
      <Card
        image="AugurLogo.webp"
        title="Augur"
        description="Sensor Status Dashboard"
        url="https://idsg.dev.svc.ac2sp.army.ic.gov/Augur"
      />
    </div>
  );
};

export default Tools;