import { NextApiRequest, NextApiResponse } from 'next';
import { find } from 'lodash';

interface Plugin {
  name: string;
  port: string;
}

import { getCurrentPluginLink } from '../utils';

// Available on route /api/plugins/:plugin/discusage
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { plugin } = req.query;

  try {
    const { name, port } = find(PLUGINS, { name: plugin }) as Plugin;

    if (!name || !port) {
      return res.status(404).json({ error: 'Plugin not found' });
    }

    const response = await fetch(`${getCurrentPluginLink(name, port)}/api/discusage`);

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch `discusage` data' });
    }

    const { diskUsage } = await response.json();

    return res.status(200).json({ diskUsage });
  } catch (error: unknown) {
    const errorMessage = (error as { message: string }).message;
    return res.status(500).json({ error: 'Internal Server Error', details: errorMessage });
  }
}
