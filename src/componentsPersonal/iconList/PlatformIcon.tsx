import { Icons } from './Icons';


const PlatformIcon: React.FC<PlatformIconProps> = ({ platforms }) => {
  return (
    <div className="flex w-full items-center gap-2" style={{ height: '30px' }}>
      {platforms && platforms.length > 0 && platforms.map((platform) => {
        const platformDetails = platform.platform; // Otteniamo l'oggetto `platform`
        
        // Controlliamo se `platformDetails` è definito
        const platformName = platformDetails ? platformDetails.name : null;
        const icon = platformName && Icons[platformName]; // Otteniamo l'icona

        // Verifichiamo se `platformDetails` e `icon` sono definiti
        return platformDetails && icon ? (
          <div key={platformDetails.id} className="flex items-center gap-3">
            <p title={platformName}>
              {icon}
            </p>
          </div>
        ) : null; // Se non sono definiti, restituiamo null
      })}
    </div>
  );
};

export default PlatformIcon;
interface Platform {
  id: number;
  name: string;
  platform?: {
    id: number;
    name: string;
  };
}

interface PlatformIconProps {
  platforms: Platform[];
}