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
  moment?: string
  reponses?: { question: string; reponse: string }[]
}

export const SuiviFiche = ({
  prenom = 'Prénom',
  nom = 'Nom',
  email = 'client@example.com',
  telephone = '',
  moment = 'J+3',
  reponses = [],
}: Props) => (
  <Html>
    <Head />
    <Preview>{`Suivi post-séance — ${prenom} ${nom}`}</Preview>
    <Body style={{ backgroundColor: '#fcf9f3', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <Container style={{ padding: '24px', maxWidth: '640px' }}>
        <Heading style={{ color: '#b0893c', fontSize: '22px' }}>Suivi post-séance</Heading>
        <Text style={{ color: '#2d2822', fontSize: '15px' }}>
          <strong>{prenom} {nom}</strong>
          <br />
          {email}
          {telephone ? <> · {telephone}</> : null}
          <br />
          Moment : {moment}
        </Text>
        <Hr style={{ borderColor: '#e4d9c3' }} />
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
  component: SuiviFiche,
  displayName: 'Fiche suivi post-séance',
  subject: (d: Record<string, any>) =>
    `Suivi post-séance — ${d.prenom ?? ''} ${d.nom ?? ''}`.trim(),
  to: 'matyas.challandes@gmail.com',
  previewData: {
    prenom: 'Marie',
    nom: 'Dupont',
    email: 'marie@example.com',
    moment: 'J+3',
    reponses: [{ question: 'Ressenti physique', reponse: 'Plus léger, meilleur sommeil.' }],
  },
} satisfies TemplateEntry
