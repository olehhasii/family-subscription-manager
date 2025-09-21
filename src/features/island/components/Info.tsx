import infoBgImg from '../../../assets/info-bg2.png';

import { motion } from 'motion/react';
import CloseButton from '../../../ui/CloseButton';
import { InfoImgWrapper, InfoLink, InfoText, InfoTextContainer, InfoWrapper } from '../styles/Info.styles';
import { Overlay } from '../../../styles/GeneralComponents.Styles';

interface InfoProps {
  onCloseInfo: () => void;
}

export default function Info({ onCloseInfo }: InfoProps) {
  return (
    <>
      <Overlay />
      <InfoWrapper
        as={motion.div}
        initial={{ width: '360px', height: '60px' }}
        animate={{ width: '360px', height: '610px' }}
        exit={{ height: '60px', width: '360px', transition: { delay: 0.3 } }}
      >
        <CloseButton onClose={onCloseInfo} />
        <InfoImgWrapper
          as={motion.div}
          initial={{ filter: 'blur(30px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1, transition: { delay: 0.1, duration: 0.4 } }}
          exit={{ filter: 'blur(30px)', opacity: 0, transition: { duration: 0.2 } }}
        >
          <img src={infoBgImg} />
        </InfoImgWrapper>
        <InfoTextContainer>
          <InfoText
            as={motion.p}
            initial={{ filter: 'blur(30px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1, transition: { delay: 0.1, duration: 0.4 } }}
            exit={{ filter: 'blur(30px)', opacity: 0, transition: { duration: 0.2 } }}
          >
            I always kept forgetting who already paid me for our YouTube Premium family subscription, so I built a small
            app to solve that.
          </InfoText>
          <InfoText
            as={motion.p}
            initial={{ filter: 'blur(30px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1, transition: { delay: 0.1, duration: 0.4 } }}
            exit={{ filter: 'blur(30px)', opacity: 0, transition: { duration: 0.2 } }}
          >
            It lets me manage friends in a private dashboard: add, update, or remove them, while everyone can see the
            current payment status.
          </InfoText>
          <InfoText
            as={motion.p}
            initial={{ filter: 'blur(30px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1, transition: { delay: 0.1, duration: 0.4 } }}
            exit={{ filter: 'blur(30px)', opacity: 0, transition: { duration: 0.2 } }}
          >
            I made it with React, styled-components, Supabase, and also tried out Framer Motion for animations and React
            Query for handling data. It was mainly a fun way to practice and explore new tools. You can check out
            details on this{' '}
            <InfoLink href="https://github.com/olehhasii/family-subscription-manager">GitHub repository</InfoLink>.
          </InfoText>
        </InfoTextContainer>
      </InfoWrapper>
    </>
  );
}
