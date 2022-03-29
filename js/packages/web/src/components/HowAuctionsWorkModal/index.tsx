import { InstructionsModal } from '../InstructionsModal';
import React from 'react';
import { LABELS } from '../../constants';

interface HowAuctionsWorkModalProps {
  buttonClassName: string;
}

export const HowAuctionsWorkModal: React.FC<HowAuctionsWorkModalProps> = ({
  buttonClassName,
}) => {
  return (
    <InstructionsModal
      buttonClassName={buttonClassName}
      buttonText="How Auctions Work"
      modalTitle="How Auctions Work"
      cardProps={[
        {
          title: 'Размещение тендера',
          description: `Как только вы найдете NFT, которым хотели бы владеть, сделайте ставку на странице аукциона. Имейте в виду, что сумма SOL, которую вы поставили, будет заблокирована в вашем кошельке до конца аукциона..`,
          imgSrc: '/modals/how-auctions-work-1.jpg',
        },
        {
          title: 'Победа в аукционе',
          description: `Следите за страницей аукциона (и своими уведомлениями), чтобы знать, когда вас перебили, и как продвигается продажа..`,
          imgSrc: '/modals/how-auctions-work-2.jpg',
        },
        {
          title: 'Погашение вашего НФТ',
          description: `Если вам посчастливилось выиграть аукцион NFT, вы должны будете выкупить его, чтобы пополнить свой кошелек. Это можно сделать на аукционе, в уведомлении о выигрыше или в своем профиле на сайте ${LABELS.STORE_NAME}.`,
          imgSrc: '/modals/how-auctions-work-3.jpg',
        },
      ]}
    />
  );
};
