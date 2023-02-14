// import { MovistarIcon, Reload, Settings, Warning } from '@Icon';
import S from "./ModalStyled";
import { ModalProps, ModalType } from "./ModalTypes";

// function renderModalIcon (type: ModalType) {
//     return ({
//         alert: <S.Icon type={type}> <Settings /> </S.Icon>,
//         info: <S.Icon type={type}> <Reload /> </S.Icon>,
//         warning: <S.Icon type={type}> <Warning /></S.Icon>
//     }[type])
// }

function Modal({ children, type, ...props }: ModalProps) {
  return (
    <S.Overlay>
      <S.Wrapper {...props}>
        {/* {type && renderModalIcon(type)} */}
        {children}
      </S.Wrapper>
    </S.Overlay>
  );
}

export default Modal;
