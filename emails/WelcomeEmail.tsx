// emails/WelcomeEmail.tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Img,
  Link,
} from '@react-email/components';
import * as React from 'react';

export default function WelcomeEmail({ userEmail }: { userEmail: string }) {
  return (
    <Html>
      <Head />
      <Preview>You're officially on the waitlist! 🎉</Preview>
      <Body style={{ backgroundColor: '#f4f4f4', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
          
          <Section style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Img src="https://res.cloudinary.com/dlzrikshx/image/upload/v1747080391/Email_Banner_dawjsu.png" alt="SolNest Logo" width="350" />
  
          </Section>

          <Text style={{ fontSize: '16px', color: '#333' }}>
            Hi <strong>{userEmail}</strong>,
          </Text>

          <Text style={{ fontSize: '16px', color: '#333', marginBottom: '16px' }}>
            Thank you for signing up for SolNest! Your journey to smarter high-yield savings starts now.
          </Text>

          <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#4f46e5' }}>
            You’re Officially on The Waitlist!
          </Text>

          <Text style={{ fontSize: '16px', color: '#333', marginBottom: '20px' }}>
            We’ll keep you updated on our progress, exclusive early access, and exciting features as we build the future of Web3 savings on Solana.
          </Text>

          <Section>
            <Text style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>What’s Next?</Text>
            <ul style={{ paddingLeft: '20px', color: '#333', listStyleType: 'none' }}>
              <li>📩 Keep an eye on your inbox for updates</li>
              <li>🔗 <Link href="https://x.com/solnestfinance" style={{ color: '#4f46e5' }}>Follow us on X</Link> for real-time news</li>
              <li>🚀 Get ready to earn, save, and grow with SolNest!</li>
            </ul>
          </Section>

          <Text style={{ fontSize: '16px', color: '#333' }}>
            If you have any questions, feel free to reply to this email. We’re thrilled to have you on board!
          </Text>

          <Text style={{ fontSize: '16px', color: '#333' }}>
            Stay tuned,<br />
            The SolNest Team
          </Text>

          <Text style={{ fontSize: '12px', color: '#999', marginTop: '32px', textAlign: 'center' }}>
            You’re receiving this email because you signed up for our waitlist.<br />
            If you no longer wish to receive these emails, please <Link href="#">unsubscribe here</Link>.<br />
            &copy; {new Date().getFullYear()} SolNest. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
