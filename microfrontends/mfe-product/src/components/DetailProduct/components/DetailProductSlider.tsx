import { Slide, Slider } from "@phoenix/design-system";
import Image from "next/image";
import S from "../DetailProduct.styled";

function DetailProductSlider() {
  return (
    <S.SliderContainer>
      <S.SliderMain>
        <Slider options={{}}>
          <Slide>
            <S.Photo>
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={250}
                height={250}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </S.Photo>
          </Slide>
          <Slide>
            <S.Photo>
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={250}
                height={250}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </S.Photo>
          </Slide>
          <Slide>
            <S.Photo>
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={250}
                height={250}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </S.Photo>
          </Slide>
        </Slider>
      </S.SliderMain>
      <S.SliderThumb>
        <Slider
          options={{
            direction: "vertical",
            spaceBetween: 16,
            slidesPerView: 4,
            watchSlidesProgress: true,
          }}
        >
          <Slide>
            <S.Photo>
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </S.Photo>
          </Slide>
          <Slide>
            <S.Photo>
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </S.Photo>
          </Slide>
          <Slide>
            <S.Photo>
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </S.Photo>
          </Slide>
          <Slide>
            <S.Photo>
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </S.Photo>
          </Slide>
          <Slide>
            <S.Photo>
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </S.Photo>
          </Slide>
          <Slide>
            <S.Photo>
              <Image
                src="https://catalogo.movistar.com.pe/ArchivosUsuario/ImagenEquipo/galaxy-a53-5g_86067885_Small_Imagen.webp"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </S.Photo>
          </Slide>
        </Slider>
      </S.SliderThumb>
    </S.SliderContainer>
  );
}

export default DetailProductSlider;
