import { InstructionsModal } from '../InstructionsModal';
import React from 'react';
import { LABELS } from '../../constants';
import { ConnectButton } from '@oyster/common';

interface HowToBuyModalProps {
  buttonClassName: string;
  onClick?: any;
}

export const HowToBuyModal: React.FC<HowToBuyModalProps> = ({
  buttonClassName,
  onClick,
}) => {
  return (
    <InstructionsModal
      buttonClassName={buttonClassName}
      buttonText="Как купить"
      modalTitle={`Покупка NFT на ${LABELS.STORE_NAME}`}
      cardProps={[
        {
          title: 'Создать кошелек SOL',
          imgSrc: '/modals/how-to-buy-1.svg',
          description: `SOL криптовалюта использующая для покупки в ${LABELS.STORE_NAME}. Чтобы сохранить SOL в безопасности, вам понадобится криптокошелек - мы рекомендуем использовать кошелек Phantom. Просто зайдите на сайт Phantom, установите расширение для Chrome и создайте учетную запись..`,
        },
        {
          title: 'Добавить средства в свой кошелек',
          imgSrc: '/modals/how-to-buy-2.svg',
          description: `Чтобы пополнить свой кошелек, вам нужно будет приобрести токены SOL. Проще всего это сделать с помощью кредитной карты на FTX Pay - сервис, который уже является частью вашего нового кошелька Phantom. Откройте свой кошелек, нажмите "Пополнить SOL" и выберите "Пополнить с FTX". Откроется новое окно, где вы сможете создать учетную запись FTX и приобрести SOL.`,
        },
        {
          title: `Подключите свой кошелек к ${LABELS.STORE_NAME}.`,
          imgSrc: '/modals/how-to-buy-3.jpg',
          description: `Чтобы подключить кошелек, нажмите "Подключить кошелек" здесь на сайте. Выберите опцию Phantom, и ваш кошелек будет подключен. После этого вы можете начать участвовать в торгах на НФТ.`,
          endElement: <ConnectButton className={'secondary-btn'} />,
        },
      ]}
      onClick={onClick}
    />
  );
};
