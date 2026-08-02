import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  prenom?: string
}

export const CarnetConfirmation = ({ prenom = 'toi' }: Props) => (
  <Html>
    <Head />
    <Preview>Ton carnet de préparation est bien reçu</Preview>
    <Body style={{ backgroundColor: '#fcf9f3', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <Container style={{ padding: '24px', maxWidth: '600px' }}>
        <Heading style={{ color: '#b0893c', fontSize: '22px' }}>
          Ton carnet est bien arrivé 🌿
        </Heading>
        <Text style={{ color: '#2d2822' }}>Bonjour {prenom},</Text>
        <Text style={{ color: '#2d2822' }}>
          Merci pour ta confiance. Je lis ton carnet avant notre rencontre.
        </Text>
        <Heading as="h3" style={{ color: '#b0893c', fontSize: '16px' }}>
          Tes rappels pour les 72 heures avant la séance
        </Heading>
        <Text style={{ color: '#2d2822' }}>• Bois davantage d'eau, allège l'alimentation le jour même.</Text>
        <Text style={{ color: '#2d2822' }}>• Réduis alcool, écrans tardifs et sollicitations inutiles.</Text>
        <Text style={{ color: '#2d2822' }}>• Prends 5 minutes de respiration lente matin et soir.</Text>
        <Text style={{ color: '#2d2822' }}>• Note tes rêves et ce qui remonte : tout fait partie du mouvement.</Text>
        <Text style={{ color: '#2d2822' }}>• Viens en vêtements confortables, sans attente particulière.</Text>
        <Text style={{ color: '#2d2822' }}>
          Une question avant la séance ? Réponds à cet email ou écris-moi au +41 76 244 55 52.
        </Text>
        <Text style={{ color: '#2d2822' }}>À très vite,<br />Matyas Challandes</Text>
        <Text style={{ color: '#888', fontSize: '12px' }}>
          Accompagnement de bien-être et de développement personnel, sans visée médicale ni diagnostic.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: CarnetConfirmation,
  displayName: 'Confirmation client — carnet',
  subject: 'Ton carnet de préparation est bien reçu 🌿',
  previewData: { prenom: 'Marie' },
} satisfies TemplateEntry
