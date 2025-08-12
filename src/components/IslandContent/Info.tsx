import { InfoImgWrapper, InfoWrapper } from './Info.styles';
import infoBgImg from '../../assets/info-bg.png';

import CloseButton from '../Actions/CloseButton';
import { motion } from 'motion/react';

interface InfoProps {
  onCloseInfo: () => void;
}

export default function Info({ onCloseInfo }: InfoProps) {
  return (
    <InfoWrapper
      as={motion.div}
      initial={{ width: '360px', height: '60px' }}
      animate={{ width: '360px', height: '500px' }}
      exit={{ height: '60px', width: '360px', opacity: 0, filter: 'blur(30px)' }}
    >
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
