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
  Tailwind,
} from '@react-email/components';

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

const ContactEmail = ({ name, email, message }: ContactEmailProps) => {
  const previewText = `Nuevo mensaje de ${name} desde tu web`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section style={box}>
              <Heading as="h2" style={heading}>
                Nuevo Mensaje desde tu Página Web
              </Heading>
              <Hr style={hr} />
              <Text style={paragraph}>Has recibido un nuevo mensaje a través del formulario de contacto.</Text>

              <Section style={infoSection}>
                <Text style={infoLabel}>Nombre:</Text>
                <Text style={infoValue}>{name}</Text>
              </Section>

              <Section style={infoSection}>
                <Text style={infoLabel}>Email:</Text>
                <Text style={infoValue}>{email}</Text>
              </Section>
              
              <Hr style={hr} />

              <Section>
                <Text style={messageLabel}>Mensaje:</Text>
                <Text style={messageText}>{message}</Text>
              </Section>
              
              <Hr style={hr} />
              <Text style={footer}>
                Este mensaje fue enviado desde el formulario de contacto de rubyvillarroel.cl
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  border: '1px solid #e6e6e6',
};

const box = {
  padding: '0 48px',
};

const heading = {
  color: '#1a1a1a',
  fontSize: '28px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const hr = {
  borderColor: '#e6e6e6',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const infoSection = {
  margin: '16px 0',
};

const infoLabel = {
  color: '#525f7f',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: 0,
};

const infoValue = {
  color: '#1a1a1a',
  fontSize: '16px',
  margin: '4px 0 0 0',
};

const messageLabel = {
  ...infoLabel,
  marginBottom: '8px',
};

const messageText = {
  ...paragraph,
  padding: '12px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
  whiteSpace: 'pre-wrap' as const,
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
