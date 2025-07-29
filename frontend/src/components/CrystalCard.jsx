import React, {useEffect, useState} from "react";
import "../styles/CrystalCard.scss";

function CrystalCard({name, confidence, description}) {

    return (
      <div className="crystal-card">
          <div className="crystal-img"></div>
          <div className="crystal-name">{name}</div>

          <div className="crystal-label">Confidence</div>
          <div className='crystal-confidence'>{confidence+'%'}</div>

          <div className="crystal-label">Description</div>
          <div className="crystal-description">{description}
          </div>
      </div>
    );
}

export default CrystalCard