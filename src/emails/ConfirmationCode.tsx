
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Button,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ConfirmationCodeEmailProps {
  code: string;
  username?: string;
}

export const ConfirmationCodeEmail = ({
  code,
  username = "usuário",
}: ConfirmationCodeEmailProps) => {
  const previewText = "Seu código de confirmação Ingressify";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#F1F0FB] my-auto mx-auto font-sans">
          <Container className="max-w-[600px] mx-auto">
            {/* Header Banner */}
            <Section className="bg-gradient-to-br from-primary via-primary/90 to-secondary p-8 rounded-t-lg">
              <Heading className="text-white text-[32px] font-bold text-center m-0">
                Ingressify
              </Heading>
              <Text className="text-white/80 text-center text-[16px] m-0 mt-2">
                Sua plataforma de eventos
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="glass-card px-8 py-12">
              <Text className="text-[#1A1F2C] text-[16px] leading-[24px] mb-6 dark:text-white">
                Olá <strong>{username}</strong>,
              </Text>
              
              <Text className="text-[#1A1F2C] text-[16px] leading-[24px] dark:text-white">
                Para garantir a segurança da sua conta, use o código abaixo para confirmar sua identidade:
              </Text>

              {/* Code Display */}
              <Section className="glass-input rounded-lg px-6 py-8 my-8 text-center">
                <Text className="text-primary text-[36px] font-mono font-bold tracking-[0.5em] m-0">
                  {code}
                </Text>
                <Text className="text-secondary text-[14px] mt-4 mb-0">
                  Este código expira em 5 minutos
                </Text>
              </Section>

              <Text className="text-muted text-[14px] leading-[24px]">
                Se você não solicitou este código, por favor ignore este email ou entre em contato com nosso suporte.
              </Text>

              <Hr className="border-primary/20 my-8" />

              {/* Security Tips */}
              <Section className="glass-input rounded-lg p-6 mt-6">
                <Text className="text-[#1A1F2C] text-[14px] leading-[24px] m-0 dark:text-white">
                  <strong>🔒 Dica de segurança:</strong>
                </Text>
                <Text className="text-muted text-[14px] leading-[24px] mt-2 mb-0">
                  Nunca compartilhe este código com ninguém. Nossa equipe nunca solicitará seu código por telefone ou email.
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-[#1A1F2C] px-8 py-6 rounded-b-lg dark:bg-black/40">
              <Text className="text-white/80 text-[14px] text-center">
                Precisa de ajuda? Entre em contato com nosso{" "}
                <Link
                  href="mailto:suporte@ingressify.com"
                  className="text-primary underline"
                >
                  suporte
                </Link>
              </Text>
              <Text className="text-white/60 text-[12px] text-center mt-4">
                © 2024 Ingressify. Todos os direitos reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmationCodeEmail;
