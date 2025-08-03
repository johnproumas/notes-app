import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Tailwind,
} from "@react-email/components";

interface ResetPasswordEmailProps {
  userName: string;
  resetPasswordUrl: string;
}

const ResetPasswordEmail = ({
  userName,
  resetPasswordUrl,
}: ResetPasswordEmailProps) => {
  return (
    <Html
      lang="en"
      dir="ltr"
    >
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[24px] font-bold text-gray-900 m-0">
                Reset Your Password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hello {userName},
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                We received a request to reset the password
                for your NoteTaker account..
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                Click the button below to create a new
                password.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={resetPasswordUrl}
                className="bg-red-600 text-white px-[32px] py-[12px] rounded-[6px] text-[16px] font-semibold no-underline box-border hover:bg-red-700"
              >
                Reset Password
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                If the button above doesn't work, copy and
                paste this link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all m-0">
                {resetPasswordUrl}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[24px]" />

            {/* Security Information */}
            <Section className="mb-[24px] bg-yellow-50 p-[16px] rounded-[6px] border-l-[4px] border-yellow-400">
              <Text className="text-[14px] text-gray-800 mb-[8px] m-0">
                <strong>
                  Important Security Information:
                </strong>
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                • If you didn't request this password reset,
                please ignore this email
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                • Your current password will remain
                unchanged until you create a new one
              </Text>
              <Text className="text-[14px] text-gray-700 m-0">
                • For security reasons, this link can only
                be used once
              </Text>
            </Section>

            {/* Help Section */}
            <Section className="mb-[24px]">
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                Need help or have concerns about your
                account security?
              </Text>
              <Text className="text-[14px] text-gray-600 m-0">
                Contact our support team at{" "}
                <a
                  href="mailto:support@company.com"
                  className="text-blue-600 no-underline"
                >
                  support@company.com
                </a>
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © 2025 NoteTaker. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                123 Business Street, Suite 100, City, State
                12345
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                <a
                  href="#"
                  className="text-gray-500 no-underline"
                >
                  Unsubscribe
                </a>{" "}
                |
                <a
                  href="#"
                  className="text-gray-500 no-underline ml-[4px]"
                >
                  Privacy Policy
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPasswordEmail;
