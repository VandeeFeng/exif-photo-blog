import { Suspense } from 'react';
import GitHubForkStatusBadgeClient from './GitHubForkStatusBadgeClient';
import GitHubForkStatusBadgeServer from './GitHubForkStatusBadgeServer';
import { IS_DEVELOPMENT } from '@/site/config';

export default function GitHubForkStatusBadge() {
  return IS_DEVELOPMENT
    ? <GitHubForkStatusBadgeClient label="Local" />
    : <Suspense>
      <GitHubForkStatusBadgeServer />
    </Suspense>;
}
