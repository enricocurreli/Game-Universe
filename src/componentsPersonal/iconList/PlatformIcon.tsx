import { Icons } from './Icons';
import { Platform } from '../../types/interfaces';

export default function PlatformIcon({ platforms } :{ platforms: Platform[] }) {
    
  return (
    <div className="flex w-full items-center gap-2" style={{ height: '30px' }}>
      {platforms && platforms.length > 0 && platforms.map((platform) => {
        const platformName = platform.platform && platform.platform.name;
        const icon = platformName && Icons[platformName];
        const urlPlatformName = platformName && platformName.replace(/\s+/g, '-').replace(/[^\w-]/g, '');

        return platform.platform && icon ? (
          <div key={platform.platform.id} className="flex items-center gap-3">
            <p  title={platformName}>
              {icon}
            </p>
          </div>
        ) : null;
      })}
    </div>
  );
}