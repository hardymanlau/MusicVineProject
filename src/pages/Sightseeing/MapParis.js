import { Icon } from 'leaflet';
import './mapstyles.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// The icon 
const customIcon = new Icon({
    iconUrl: require("./img/marker-icon.png"),
    iconSize: [38, 38]  // size of the icon
  });

// Setting Markers
const markers = [
    {
      geocode: [48.85820, 2.29469 ],
      popUp: "1. Eiffel Tower"
    },
    {
      geocode: [48.8606, 2.3376],
      popUp: "2. Lourve Museum"
    },
    {
      geocode: [48.83671, 2.37835],
      popUp: "3. Seine River Cruise"
    },
    {
      geocode: [48.88709, 2.34150],
      popUp: "4.Sacre-Coeur"
    },
    {
      geocode: [48.8738, 2.2950],
      popUp: "5. Arc de Triomphe"
    },
  ];   

// Map Function
export default function MapParis() {
    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            
            {markers.map((marker) => (
                <Marker position={marker.geocode} icon={customIcon}>
                    <Popup>{marker.popUp}</Popup>
                    
                </Marker>
                ))}
            
        </MapContainer>

    );
}