import infoBgImg from '../../../assets/info-bg2.png';

import { motion } from 'motion/react';
import CloseButton from '../../../ui/CloseButton';
import { InfoImgWrapper, InfoLink, InfoText, InfoTextContainer, InfoWrapper } from '../styles/Info.styles';
import { Overlay } from '../../../styles/GeneralComponents.Styles';
import { useTranslations } from '../../../hooks/useTranslation';

interface InfoProps {
  onCloseInfo: () => void;
}

export default function Info({ onCloseInfo }: InfoProps) {
  const { t, lang } = useTranslations();

  return (
    <>
      <Overlay />
      <InfoWrapper
        as={motion.div}
        initial={{ width: '360px', height: '60px' }}
        animate={{ width: '360px', height: lang === 'UA' ? '695px' : '610px' }}
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
            {t.infoDescription1}
          </InfoText>
          <InfoText
            as={motion.p}
            initial={{ filter: 'blur(30px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1, transition: { delay: 0.1, duration: 0.4 } }}
            exit={{ filter: 'blur(30px)', opacity: 0, transition: { duration: 0.2 } }}
          >
            {t.infoDescription2}
          </InfoText>
          <InfoText
            as={motion.p}
            initial={{ filter: 'blur(30px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1, transition: { delay: 0.1, duration: 0.4 } }}
            exit={{ filter: 'blur(30px)', opacity: 0, transition: { duration: 0.2 } }}
          >
            {t.infoDescription3}{' '}
            <InfoLink href="https://github.com/olehhasii/family-subscription-manager">{t.githubRepository}</InfoLink>.
          </InfoText>
        </InfoTextContainer>
      </InfoWrapper>
    </>
  );
}
