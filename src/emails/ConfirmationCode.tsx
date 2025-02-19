
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
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                <strong>Ingreso</strong> Nitro
              </Heading>
            </Section>
            <Section>
              <Text className="text-black text-[14px] leading-[24px]">
                Olá {username},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Aqui está seu código de confirmação:
              </Text>
              <Text className="text-black text-[30px] font-bold text-center my-[32px] font-mono tracking 32">
                {code}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Este código expira em 5 minutos. Se você não solicitou este código, por favor ignore este email.
              </Text>
            </Section>
            <Section className="mt-[32px] mb-[32px]">
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                Se você tiver alguma dúvida, entre em contato conosco em{" "}
                <Link
                  href="mailto:suporte@ingresonitro.com"
                  className="text-blue-600 underline"
                >
                  suporte@ingresonitro.com
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmationCodeEmail;
