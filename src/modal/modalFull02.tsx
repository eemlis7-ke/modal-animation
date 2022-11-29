import { memo, useState } from 'react';
import { Modal, Button, Group, Text } from '@mantine/core';
import TabDemo from '../tabs';


type Props = {
  modalTransition: string
  modalTransitionIn: number
  modalTransitionOut: number
  modalTransitionFunction: string
  modalOverlayColor: string
  modalButtonLabel:string
  children?: React.ReactNode;
};

export const ModalFull02: React.FC<Props> = memo((props) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="全画面モーダル"
        transition={props.modalTransition}
        transitionDuration={props.modalTransitionIn}
        exitTransitionDuration={props.modalTransitionOut}
        transitionTimingFunction={props.modalTransitionFunction}
        centered
        size="calc(100vw - 80px)"
        overlayColor={props.modalOverlayColor}
        className="is-modal-full full-type02"
        // overlayOpacity={0.55}
        // overlayBlur={3}
        // closeOnClickOutside={false}
      >
        {/* Modal content */}
        {/* <Text className='modal-boday'>テキストテキストテキストテキストテキストテキスト</Text> */}
        <TabDemo />
        <div className="modal-footer">
          <Button onClick={() => setOpened(!true)}>閉じる</Button>
        </div>
        <div className="modal-detail">
          <ul>
            <li>{props.modalTransition}</li>
            <li>{props.modalTransitionIn}</li>
            <li>{props.modalTransitionOut}</li>
            <li>{props.modalTransitionFunction}</li>
            <li>{props.modalOverlayColor}</li>
          </ul>
        </div>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)} color="grape">{props.modalButtonLabel}</Button>
      </Group>
    </>
  );
})
