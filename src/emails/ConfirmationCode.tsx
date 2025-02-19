
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
  code = "000000", // Valor padrão caso não seja fornecido
  username = "usuário",
}: ConfirmationCodeEmailProps) => {
  const previewText = "Seu código de confirmação Ingresso Nitro";

  // Garante que o código seja uma string e tenha 6 dígitos
  const formattedCode = (code || "").toString().padStart(6, '0').slice(0, 6);
  const codeArray = formattedCode.split('');

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#E5DEFF] my-auto mx-auto font-sans">
          <Container className="max-w-[600px] mx-auto">
            {/* Header Banner */}
            <Section className="bg-[#9b87f5] p-8 rounded-t-lg text-center">
              <div className="inline-block bg-white/80 w-10 h-10 align-middle rounded-lg">
                <Text className="text-[#9b87f5] text-2xl font-bold leading-10 m-0">
                  IN
                </Text>
              </div>
              <Text className="text-white text-2xl font-bold inline-block ml-2 align-middle m-0">
                Ingresso Nitro
              </Text>
              <Text className="text-white/80 text-center text-[16px] block mt-2 m-0">
                Sua plataforma de eventos
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="bg-white/90 px-8 py-12">
              <Text className="text-[#1A1F2C] text-[16px] leading-[24px] mb-6">
                Olá <strong>{username}</strong>,
              </Text>
              
              <Text className="text-[#1A1F2C] text-[16px] leading-[24px]">
                Use o código abaixo para confirmar sua identidade:
              </Text>

              {/* Code Display */}
              <Section className="bg-[#E5DEFF] rounded-lg px-6 py-8 my-8 text-center">
                {codeArray.map((digit, index) => (
                  <div 
                    key={index}
                    className="inline-block w-12 h-14 bg-white rounded-lg border-2 border-[#9b87f5] mx-1 align-middle"
                  >
                    <Text className="text-[#9b87f5] text-[24px] font-mono font-bold leading-[56px] m-0">
                      {digit}
                    </Text>
                  </div>
                ))}
                <Text className="text-[#7E69AB] text-[14px] block mt-4 mb-0">
                  Este código expira em 5 minutos
                </Text>
              </Section>

              <Text className="text-[#8E9196] text-[14px] leading-[24px]">
                Se você não solicitou este código, por favor ignore este email ou entre em contato com nosso suporte.
              </Text>

              <Hr className="border-[#9b87f5]/20 my-8" />

              {/* Security Tips */}
              <Section className="bg-[#E5DEFF] rounded-lg p-6 mt-6">
                <Text className="text-[#1A1F2C] text-[14px] leading-[24px] m-0">
                  <strong>🔒 Dica de segurança:</strong>
                </Text>
                <Text className="text-[#8E9196] text-[14px] leading-[24px] mt-2 mb-0">
                  Nunca compartilhe este código com ninguém. Nossa equipe nunca solicitará seu código por telefone ou email.
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-[#1A1F2C] px-8 py-6 rounded-b-lg text-center">
              <Text className="text-white/80 text-[14px]">
                Precisa de ajuda? Entre em contato com nosso{" "}
                <Link
                  href="mailto:suporte@ingresonitro.com"
                  className="text-[#9b87f5] underline"
                >
                  suporte
                </Link>
              </Text>
              <Text className="text-white/60 text-[12px] mt-4">
                © 2024 Ingresso Nitro. Todos os direitos reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmationCodeEmail;
