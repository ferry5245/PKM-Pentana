import React, { useEffect, useState } from 'react';
import './Tracking.scss';
import Partners       from '../../assets/partners.png';
import Header         from '../../Components/Header/Header';
import Footer         from '../../Components/Footer/Footer';
import MapComp        from '../../Components/MapComp/MapComp';
import Kapal          from '../../assets/Boat.png';
import { fetchData }  from '../../services/firebaseFetch';

function Tracking() {
  const [datas, setFirebaseData] = useState(null);

  useEffect(() => {
    fetchData().then((data) => {
      setFirebaseData(data);
    });
  }, []);

  return (
    <div className="tracking">
      <Header />
      {/* Page Title */}
      <h1>PELACAKAN NELAYAN</h1>

      {/* Map Components */}
      <div className="map-holder">
        {datas ? (
            <MapComp latitude={datas.Latitude} longitude={datas.Longitude} />
        ) : (
          console.log()
        )}
      </div>

      {/* Boat Rotation Part */}
      <div className="boat-data">
        <div className="boat-img">
          <img src={Kapal} alt="Kapal" />
        </div>
        <div className="boat-datas">
          <p>Penumpang : <br />[data RFID]</p>
        </div>
      </div>

      {/* Partner Part */}
      <div className="partners">
        <img src={Partners} alt="Partner" />
      </div>
      <Footer />
    </div>
  );
}

export default Tracking;
