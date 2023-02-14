import { Button, Tag, Text, ChevronRight } from "@phoenix/design-system";
import Image from "next/image";
import S from "./CardProduct.styled";

function CardProduct({ handleViewDetail }: { handleViewDetail: () => void }) {
  return (
    <S.Wrapper>
      <S.HeadBand>
        <Text textAlign="center" fontSize={{ xs: 12 }}>
          <b> Precio exclusivo Online </b> - Sólo aquí
        </Text>
      </S.HeadBand>
      <S.Body>
        <S.Photo>
          <Image
            src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
            width={150}
            height={230}
            style={{ objectFit: "contain" }}
            alt=""
            priority
          />
        </S.Photo>
        <S.Info>
          <Text mb={18} color="secondary-dark">
            SAMSUNG <br />
            <b> Galaxy A53 </b>
          </Text>
          <Tag mb={2}>12 cuotas</Tag>
          <Text
            mb={1}
            color="secondary-dark"
            fontWeight="bold"
            fontSize={{ xs: 20 }}
          >
            <Text as="span" fontSize={{ xs: 14 }}>
              S/
            </Text>{" "}
            95.90
          </Text>
          <Text color="gray-4" fontSize={{ xs: 12 }} maxWidth={110}>
            Disfruta hoy, paga desde Febrero
          </Text>

          <S.ButtonDetail onClick={handleViewDetail}>
            Detalle del equipo <ChevronRight />{" "}
          </S.ButtonDetail>
        </S.Info>
        <Button
          as={'a'}
          href="/order"
          label="Lo quiero"
          $variant="success"
          width="100%"
        />
      </S.Body>
    </S.Wrapper>
  );
}

export default CardProduct;
