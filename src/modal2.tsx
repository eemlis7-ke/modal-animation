import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import TabDemo from './tabs';

export default function ModalDemo() {
  const [opened, setOpened] = useState(!false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="222もっと便利になりました！新しいLAWGUEをぜひ体験してください"
        size={800}
        transition="pop"
        transitionDuration={400}
        exitTransitionDuration={200}
        transitionTimingFunction="ease"
        centered
        overlayColor="rgba(255,255,255,0.7)"
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
        <Button onClick={() => setOpened(true)}>Modal01</Button>
      </Group>
    </>
  );
}
