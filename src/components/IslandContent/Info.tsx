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
      exit={{ height: '77px', width: '360px', opacity: 0, filter: 'blur(30px)' }}
    >
      <CloseButton onClose={onCloseInfo} />
      <InfoImgWrapper
        as={motion.div}
        initial={{ filter: 'blur(30px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <img src={infoBgImg} />
      </InfoImgWrapper>
      <motion.p
        initial={{ filter: 'blur(30px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ipsam perspiciatis harum consequuntur eaque
        numquam itaque, facilis sint dignissimos voluptas facere odit soluta. Odit, possimus quod? Optio maiores
        corporis sint.
      </motion.p>
    </InfoWrapper>
  );
}
