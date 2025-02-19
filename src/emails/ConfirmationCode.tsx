
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
  const previewText = "Seu código de confirmação Ingreso Nitro";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#F1F0FB] my-auto mx-auto font-sans">
          <Container className="max-w-[600px] mx-auto">
            {/* Header Banner */}
            <Section className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] p-8 rounded-t-lg">
              <Heading className="text-white text-[32px] font-bold text-center m-0">
                Ingreso Nitro
              </Heading>
              <Text className="text-white/80 text-center text-[16px] m-0 mt-2">
                Sua plataforma de eventos
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="bg-white px-8 py-12">
              <Text className="text-[#1A1F2C] text-[16px] leading-[24px] mb-6">
                Olá <strong>{username}</strong>,
              </Text>
              
              <Text className="text-[#1A1F2C] text-[16px] leading-[24px]">
                Para garantir a segurança da sua conta, use o código abaixo para confirmar sua identidade:
              </Text>

              {/* Code Display */}
              <Section className="bg-[#F1F0FB] rounded-lg px-6 py-8 my-8 text-center">
                <Text className="text-[#9b87f5] text-[36px] font-mono font-bold tracking-[0.5em] m-0">
                  {code}
                </Text>
                <Text className="text-[#7E69AB] text-[14px] mt-4 mb-0">
                  Este código expira em 5 minutos
                </Text>
              </Section>

              <Text className="text-[#666666] text-[14px] leading-[24px]">
                Se você não solicitou este código, por favor ignore este email ou entre em contato com nosso suporte.
              </Text>

              <Hr className="border-[#E5DEFF] my-8" />

              {/* Security Tips */}
              <Section className="bg-[#F1F0FB] rounded-lg p-6 mt-6">
                <Text className="text-[#1A1F2C] text-[14px] leading-[24px] m-0">
                  <strong>🔒 Dica de segurança:</strong>
                </Text>
                <Text className="text-[#666666] text-[14px] leading-[24px] mt-2 mb-0">
                  Nunca compartilhe este código com ninguém. Nossa equipe nunca solicitará seu código por telefone ou email.
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-[#1A1F2C] px-8 py-6 rounded-b-lg">
              <Text className="text-white/80 text-[14px] text-center">
                Precisa de ajuda? Entre em contato com nosso{" "}
                <Link
                  href="mailto:suporte@ingresonitro.com"
                  className="text-[#9b87f5] underline"
                >
                  suporte
                </Link>
              </Text>
              <Text className="text-white/60 text-[12px] text-center mt-4">
                © 2024 Ingreso Nitro. Todos os direitos reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmationCodeEmail;
