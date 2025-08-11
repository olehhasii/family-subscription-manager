import { InfoImgWrapper, InfoWrapper } from './Info.styles';
import infoBgImg from '../../assets/info-bg.png';

import CloseButton from '../Actions/CloseButton';
import { motion } from 'motion/react';

interface InfoProps {
  onCloseInfo: () => void;
}

export default function Info({ onCloseInfo }: InfoProps) {
  return (
    <InfoWrapper as={motion.div}>
      <CloseButton onClose={onCloseInfo} />
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
