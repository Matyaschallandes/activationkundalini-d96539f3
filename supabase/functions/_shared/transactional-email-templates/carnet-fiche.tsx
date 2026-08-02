import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  prenom?: string
  nom?: string
  email?: string
  telephone?: string
  intensity?: number
  chakra?: string
  themes?: string
  cles?: string[]
  reponses?: { question: string; reponse: string }[]
}

export const CarnetFiche = ({
  prenom = 'Prénom',
  nom = 'Nom',
  email = 'client@example.com',
  telephone = '',
  intensity = 5,
  chakra = 'Chakra du plexus solaire',
  themes = '',
  cles = [],
  reponses = [],
}: Props) => (
  <Html>
    <Head />
    <Preview>{`Carnet de préparation — ${prenom} ${nom}`}</Preview>
    <Body style={{ backgroundColor: '#fcf9f3', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <Container style={{ padding: '24px', maxWidth: '640px' }}>
        <Heading style={{ color: '#b0893c', fontSize: '22px' }}>
          Nouvelle fiche client
        </Heading>
        <Text style={{ color: '#2d2822', fontSize: '15px' }}>
          <strong>{prenom} {nom}</strong>
          <br />
          {email}
          {telephone ? <> · {telephone}</> : null}
        </Text>
        <Hr style={{ borderColor: '#e4d9c3' }} />
        <Section>
          <Text style={{ color: '#2d2822' }}>Intensité ressentie : {intensity} / 10</Text>
          <Text style={{ color: '#2d2822' }}>Centre le plus sollicité : {chakra}</Text>
          {themes ? <Text style={{ color: '#2d2822' }}>Thèmes : {themes}</Text> : null}
        </Section>
        {cles.length > 0 && (
          <Section>
            <Heading as="h3" style={{ color: '#b0893c', fontSize: '16px' }}>
              Pistes d'accompagnement
            </Heading>
            {cles.map((c, i) => (
              <Text key={i} style={{ color: '#2d2822', fontSize: '14px' }}>• {c}</Text>
            ))}
          </Section>
        )}
        <Hr style={{ borderColor: '#e4d9c3' }} />
        <Heading as="h3" style={{ color: '#b0893c', fontSize: '16px' }}>
          Réponses complètes
        </Heading>
        {reponses.map((r, i) => (
          <Section key={i} style={{ marginBottom: '12px' }}>
            <Text style={{ color: '#6e6458', fontSize: '13px', margin: '0 0 4px' }}>
              {r.question}
            </Text>
            <Text style={{ color: '#2d2822', fontSize: '14px', margin: 0, whiteSpace: 'pre-wrap' }}>
              {r.reponse}
            </Text>
          </Section>
        ))}
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: CarnetFiche,
  displayName: 'Fiche client — carnet de préparation',
  subject: (d: Record<string, any>) =>
    `Carnet de préparation — ${d.prenom ?? ''} ${d.nom ?? ''}`.trim(),
  to: 'matyas.challandes@gmail.com',
  previewData: {
    prenom: 'Marie',
    nom: 'Dupont',
    email: 'marie@example.com',
    telephone: '+41 79 000 00 00',
    intensity: 7,
    chakra: 'Chakra du cœur',
    themes: 'Stress et surcharge · Estime et confiance',
    cles: ['Chakra du cœur — un geste d’amour envers soi chaque jour.'],
    reponses: [{ question: 'Ce que je choisis de libérer', reponse: 'La peur de décevoir.' }],
  },
} satisfies TemplateEntry
