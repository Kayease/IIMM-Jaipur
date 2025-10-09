import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Next.js
const DefaultIcon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Set the default icon
L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  height?: string;
  className?: string;
}

const Map = ({ height = '400px', className = '' }: MapProps) => {
  // Coordinates for IIMM Headquarters (example coordinates - replace with actual)
  const position = [28.6139, 77.2090]; // Example: New Delhi coordinates

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <MapContainer 
        center={position as [number, number]} 
        zoom={15} 
        style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
        zoomControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position as [number, number]}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">IIMM Headquarters</h3>
              <p>123 Example Street, New Delhi</p>
              <p>Delhi 110001, India</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
