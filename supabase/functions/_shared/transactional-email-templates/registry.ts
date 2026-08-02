import type * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  to?: string
}

import { template as carnetFiche } from './carnet-fiche.tsx'
import { template as carnetConfirmation } from './carnet-confirmation.tsx'
import { template as suiviFiche } from './suivi-fiche.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'carnet-fiche': carnetFiche,
  'carnet-confirmation': carnetConfirmation,
  'suivi-fiche': suiviFiche,
}
