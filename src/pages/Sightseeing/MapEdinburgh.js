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
        geocode: [55.9441, -3.1618],
        popUp: "1. Arthur's Seat"
    },
    {
        geocode: [55.9486, -3.1999],
        popUp: "2. Edinburgh Castle"
    },
    {
        geocode: [55.9470, -3.1906],
        popUp: "3. National Museum of Scotland"
    },
    {
        geocode: [55.9821554, -3.1772521],
        popUp: "4. Royal Yacht Britannia"
    },
    {
        geocode: [55.9490, -3.1957],
        popUp: "5. Camera Obscura and World of Illusions"
    },
];

// Map Function
export default function MapEdinburgh() {
    return (
        <MapContainer center={[55.95206, -3.19648]} zoom={13}>
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