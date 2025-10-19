import React, { ReactNode } from 'react';
import CacheBuster from 'react-cache-buster';
import { version } from '../package.json';
import CWhiteLabel from './components/ui/CWhiteLabel';
// import Loading from './loading';
export default ({ children }: { children: ReactNode }) => {
    const isProduction = process.env.NODE_ENV === 'production';
    return (
        <CacheBuster
            currentVersion={version}
            isEnabled={isProduction} //If false, the library is disabled.
            isVerboseMode={false} //If true, the library writes verbose logs to console.
            loadingComponent={<CWhiteLabel txt='Loading' />} //If not pass, nothing appears at the time of new version check.
        // metaFileDirectory={'.'} //If public assets are hosted somewhere other than root on your server.
        >
            {children}
        </CacheBuster>
    );
};
