import { InfoImgWrapper, InfoWrapper } from './Info.styles';
import infoBgImg from '../../assets/info-bg.png';

import CloseButton from '../Actions/CloseButton';

export default function Info() {
  return (
    <InfoWrapper>
      <CloseButton />
      <InfoImgWrapper>
        <img src={infoBgImg} />
      </InfoImgWrapper>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ipsam perspiciatis harum consequuntur eaque
        numquam itaque, facilis sint dignissimos voluptas facere odit soluta. Odit, possimus quod? Optio maiores
        corporis sint.
      </p>
    </InfoWrapper>
  );
}
