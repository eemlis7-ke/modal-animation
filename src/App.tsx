import { Group, MantineProvider, Text, SimpleGrid, Button } from '@mantine/core';
import { IconDatabase, IconCircleNumber0 } from '@tabler/icons';
import { ModalDemo00 } from '../src/modal/modal00';
import { ModalDemo02 } from '../src/modal/modal02';
import { ModalAlert00 } from '../src/modal/modalAlert00';
import { ModalFull00 } from '../src/modal/modalFull00';
import { ModalFull02 } from '../src/modal/modalFull02';

export default function App() {
  return (
    <MantineProvider>
      <header>Header</header>
      <div className='main-wrap'>
        <div className='main-left'>
          <SimpleGrid
            cols={1}
            spacing="xs"
            className='main-left-grid'
          >
            <div>
              <Button leftIcon={<IconDatabase size={14} />}variant="subtle" color="dark">
                プロジェクト名
              </Button>
            </div>
            <div>
              <Button
                leftIcon={<IconDatabase size={14} />}
                rightIcon={<IconCircleNumber0 size={18} />} variant="subtle" color="dark">
                全てのドキュメント
              </Button>
            </div>
            <SimpleGrid
            cols={1}
            className='main-left-list'
            >
              <div>
                <Button
                leftIcon={<IconDatabase size={14} />}
                rightIcon={<IconCircleNumber0 size={18} />} variant="subtle" color="dark">
                  下書き
                </Button>
              </div>
              <div>
                <Button
                leftIcon={<IconDatabase size={14} />}
                rightIcon={<IconCircleNumber0 size={18} />} variant="subtle" color="dark">
                  レビュー中
                </Button>
              </div>
              <div>
                <Button
                leftIcon={<IconDatabase size={14} />}
                rightIcon={<IconCircleNumber0 size={18} />} variant="subtle" color="dark">
                  レビュー済
                </Button>
              </div>
              <div>
                <Button
                leftIcon={<IconDatabase size={14} />}
                rightIcon={<IconCircleNumber0 size={18} />} variant="subtle" color="dark">
                  送信済
                </Button>
              </div>
              <div>
                <Button
                leftIcon={<IconDatabase size={14} />}
                rightIcon={<IconCircleNumber0 size={18} />} variant="subtle" color="dark">
                  承認中
                </Button>
              </div>
              <div>
                <Button
                leftIcon={<IconDatabase size={14} />}
                rightIcon={<IconCircleNumber0 size={18} />} variant="subtle" color="dark">
                  承認済
                </Button>
              </div>
              <div>
                <Button
                leftIcon={<IconDatabase size={14} />}
                rightIcon={<IconCircleNumber0 size={18} />} variant="subtle" color="dark">
                  完了
                </Button>
              </div>
            </SimpleGrid>
            <div>
                <Button leftIcon={<IconDatabase size={14} />} variant="subtle" color="dark">
                  タグから探す
                </Button>
              </div>
              <div>
                <Button leftIcon={<IconDatabase size={14} />} variant="subtle" color="dark">
                  プロジェクトの設定
                </Button>
              </div>
          </SimpleGrid>
        </div>
        <div className='main-body'>
          <div className='main-content'>
            <Text>現在の設定</Text>
            <Group my="md" align="center">
              <ModalDemo00
                modalTransition="slide-down"
                modalTransitionIn={400}
                modalTransitionOut={400}
                modalTransitionFunction="ease"
                modalOverlayColor="rgba(255,255,255,0.95)"
                modalButtonLabel="案内モーダル"
              />
              <ModalAlert00
                modalTransition="slide-down"
                modalTransitionIn={300}
                modalTransitionOut={300}
                modalTransitionFunction="ease"
                modalOverlayColor="rgba(255,255,255,0.8)"
                modalButtonLabel="確認モダール"
              />
              <ModalFull00
                modalTransition="slide-down"
                modalTransitionIn={300}
                modalTransitionOut={300}
                modalTransitionFunction="ease"
                modalOverlayColor="rgba(255,255,255,0.8)"
                modalButtonLabel="全画面モダール"
              />
              <ModalFull02
                modalTransition="slide-down"
                modalTransitionIn={300}
                modalTransitionOut={300}
                modalTransitionFunction="ease"
                modalOverlayColor="rgba(255,255,255,0.8)"
                modalButtonLabel="全画面80モダール"
              />
            </Group>
            <div className='main-content-suggestion'>
              <div className='main-suggestion-box'>
                <Text>案内モーダル</Text>
                <Group my="md" align="center">
                  {/* <ModalDemo02
                    modalTransition="pop"
                    modalTransitionIn={600}
                    modalTransitionOut={300}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Pop"
                  /> */}
                  <ModalDemo02
                    modalTransition="pop"
                    modalTransitionIn={400}
                    modalTransitionOut={200}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Pop2"
                  />
                  <ModalDemo02
                    modalTransition="slide-up"
                    modalTransitionIn={300}
                    modalTransitionOut={150}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Slide-up"
                  />
                  {/* <ModalDemo02
                    modalTransition="slide-up"
                    modalTransitionIn={300}
                    modalTransitionOut={150}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(255,255,255,0.6)"
                    modalButtonLabel="Slide-up"
                  /> */}
                  {/* <ModalDemo02
                    modalTransition="scale"
                    modalTransitionIn={500}
                    modalTransitionOut={400}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="scale"
                  /> */}
                  {/* <ModalDemo02
                    modalTransition="skew-up"
                    modalTransitionIn={600}
                    modalTransitionOut={300}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="skew-up"
                  />
                  <ModalDemo02
                    modalTransition="rotate-left"
                    modalTransitionIn={600}
                    modalTransitionOut={300}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="rotate-left"
                  /> */}
                  {/* <ModalDemo03/> */}
                </Group>
              </div>
              <div className='main-suggestion-box'>
                <Text>確認モーダル</Text>
                <Group my="md" align="center">
                  {/* <ModalAlert00
                    modalTransition="fade"
                    modalTransitionIn={400}
                    modalTransitionOut={200}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Fade"
                  /> */}
                  {/* <ModalAlert00
                    modalTransition="pop"
                    modalTransitionIn={400}
                    modalTransitionOut={200}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Pop"
                  /> */}
                  <ModalAlert00
                    modalTransition="pop"
                    modalTransitionIn={400}
                    modalTransitionOut={200}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(255,255,255,0.7)"
                    modalButtonLabel="Pop"
                  />
                  {/* <ModalAlert00
                    modalTransition="slide-up"
                    modalTransitionIn={300}
                    modalTransitionOut={150}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Slide-up"
                  />
                  <ModalAlert00
                    modalTransition="scale"
                    modalTransitionIn={500}
                    modalTransitionOut={400}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="scale"
                  /> */}
                  {/* <ModalAlert00
                    modalTransition="skew-up"
                    modalTransitionIn={600}
                    modalTransitionOut={300}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="skew-up"
                  />
                  <ModalAlert00
                    modalTransition="rotate-left"
                    modalTransitionIn={600}
                    modalTransitionOut={300}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="rotate-left"
                  /> */}
                </Group>
              </div>
              <div className='main-suggestion-box'>
                <Text>全画面モーダル</Text>
                <Group my="md" align="center">
                  <ModalFull00
                    modalTransition="fade"
                    modalTransitionIn={400}
                    modalTransitionOut={200}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Fade"
                  />
                  {/* <ModalFull00
                    modalTransition="pop"
                    modalTransitionIn={400}
                    modalTransitionOut={200}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Pop"
                  />
                  <ModalFull00
                    modalTransition="slide-up"
                    modalTransitionIn={300}
                    modalTransitionOut={150}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Slide-up"
                  />
                  <ModalFull00
                    modalTransition="scale"
                    modalTransitionIn={500}
                    modalTransitionOut={400}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="scale"
                  /> */}
                  {/* <ModalFull00
                    modalTransition="skew-up"
                    modalTransitionIn={600}
                    modalTransitionOut={300}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="skew-up"
                  />
                  <ModalFull00
                    modalTransition="rotate-left"
                    modalTransitionIn={600}
                    modalTransitionOut={300}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="rotate-left"
                  /> */}
                </Group>
                </div>
              <div className='main-suggestion-box'>
                <Text>全画面80モーダル</Text>
                <Group my="md" align="center">
                  <ModalFull02
                    modalTransition="fade"
                    modalTransitionIn={400}
                    modalTransitionOut={200}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Fade"
                  />
                  {/* <ModalFull02
                    modalTransition="pop"
                    modalTransitionIn={400}
                    modalTransitionOut={200}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Pop"
                  />
                  <ModalFull02
                    modalTransition="slide-up"
                    modalTransitionIn={300}
                    modalTransitionOut={150}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="Slide-up"
                  />
                  <ModalFull02
                    modalTransition="scale"
                    modalTransitionIn={500}
                    modalTransitionOut={400}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="scale"
                  /> */}
                  {/* <ModalFull02
                    modalTransition="skew-up"
                    modalTransitionIn={600}
                    modalTransitionOut={300}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="skew-up"
                  />
                  <ModalFull02
                    modalTransition="rotate-left"
                    modalTransitionIn={600}
                    modalTransitionOut={300}
                    modalTransitionFunction="ease"
                    modalOverlayColor="rgba(0,0,0,0.6)"
                    modalButtonLabel="rotate-left"
                  /> */}
                </Group>
              </div>
            </div>
          </div>
          <div className='main-rigth'>
            <div className='main-rigth-heading'>アクティビティ</div>
          </div>
        </div>
      </div>
      {/* <footer>footer</footer> */}
    </MantineProvider>
  );
}
