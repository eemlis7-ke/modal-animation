import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import TabDemo from '../src/tabs';

export default function ModalDemo() {
  const [opened, setOpened] = useState(!false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="もっと便利になりました！新しいLAWGUEをぜひ体験してください"
        size={800}
        transition="slide-down"
        transitionDuration={300}
        exitTransitionDuration={300}
        transitionTimingFunction="ease"
        centered
        overlayColor="rgba(255,255,255,1)"
        overlayOpacity={0.8}
        // overlayOpacity={0.55}
        // overlayBlur={3}
        // closeOnClickOutside={false}
      >
        {/* Modal content */}
        <TabDemo />
        <div className="modal-footer">
          <Button onClick={() => setOpened(!true)}>閉じる</Button>
        </div>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}
