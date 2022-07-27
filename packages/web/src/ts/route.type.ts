import React from 'react';

export type RouteType = {
  component: React.FC;
  path?: string;
  exact?: boolean;
};
