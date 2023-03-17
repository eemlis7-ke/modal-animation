import { memo, useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import TabDemo from '../tabs';


type Props = {
  modalTransition?: string
  modalTransitionIn: number
  modalTransitionOut: number
  modalTransitionFunction: string
  modalOverlayColor: string
  modalButtonLabel:string
  children?: React.ReactNode;
};

export const ModalDemo00: React.FC<Props> = memo((props) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="もっと便利になりました！"
        size={800}
        transition={props.modalTransition}
        transitionDuration={props.modalTransitionIn}
        exitTransitionDuration={props.modalTransitionOut}
        transitionTimingFunction={props.modalTransitionFunction}
        centered
        overlayColor={props.modalOverlayColor}
        className="is-new-modal"
        // overlayOpacity={0.55}
        // overlayBlur={3}
        // closeOnClickOutside={false}
      >
        {/* Modal content */}
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
        <Button onClick={() => setOpened(true)}>{props.modalButtonLabel}</Button>
      </Group>
    </>
  );
})
