import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Text,
  ChevronLeft,
} from "@phoenix/design-system";
import Image from "next/image";
// import Link from "next/link";
import { AppOrderThemeProvider } from "@/theme";

export default function OrderDetail() {
  return (
    <AppOrderThemeProvider>
      <Container>
        <h1>Hello mfe-order</h1>
        <Button
          mb={3}
          iconLeft={<ChevronLeft />}
          label="Volver"
          $size="sm"
          $variant="text"
          href="/"
          as="a"
        />
        <Card $elevation={false} mb={2}>
          <Text color="primary" textAlign="center" mb={3}>
            Resumen del pedido
          </Text>
          <Box display="flex" alignItems="center">
            <Box width="100%">
              <Text $size="Body3" mb={1}>
                Tu nuevo equipo
              </Text>
              <Text fontWeight="bold" mb={1}>
                Samsung Galaxy A53
              </Text>
              <Box display="flex" alignItems="center">
                <Text $size="Body3" mr={2}>
                  Color disponible:
                </Text>
                <Box
                  width={16}
                  height={16}
                  bg="black"
                  as="span"
                  display="inline-block"
                  borderRadius={50}
                />
              </Box>
            </Box>
            <Box width="20%" textAlign="right">
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={38}
                height={70}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </Box>
          </Box>
        </Card>
        <Card $elevation={false} mb={2}>
          <Text color="primary" textAlign="center" mb={3}>
            Próximos pagos en tu recibo
          </Text>
          <Box display="flex" alignItems="center" mb={2}>
            <Box width="100%">
              <Text mb={1}>Cuota por el equipo</Text>
              <Text $size="Body3" fontWeight="light" color="gray-4" mb={1}>
                Durante 12 meses
              </Text>
            </Box>
            <Box width="40%" textAlign="right" fontWeight="bold">
              <Text as="span" fontWeight="bold" $size="Body3">
                S/
              </Text>
              80.00
            </Box>
          </Box>
          <Alert $type="info">
            Este monto figurará en tu recibo el siguiente mes junto a tu plan
            actual.
          </Alert>
        </Card>
        <Card
          border="1px solid"
          borderColor="gray-2"
          $elevation={false}
          display="flex"
          alignItems="center"
          mb={3}
        >
          <input type="checkbox" />
          <Text color="gray-3" as="i" $size="Body4" ml={3}>
            Acepto <a href="/">términos y condiciones de uso</a> del
            producto y el{" "}
            <a href="/">tratamiento de mis datos personales</a>
          </Text>
        </Card>
        <Button label="Confirmar pedido" $variant="success" width="100%" />
      </Container>
    </AppOrderThemeProvider>
  );
}
