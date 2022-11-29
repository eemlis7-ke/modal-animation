import { Tabs } from '@mantine/core';
import CarouselDemo from '../src/carousel';

export default function TabDemo() {
  return (
    <Tabs defaultValue="001" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="001">
          <div className='tab-panel'>
            <div className='panel-status'>未読</div>
            <div className='panel-cate'>機能改善</div>
            <div className='panel-title'>ドキュメントの移動</div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab value="002">
          <div className='tab-panel'>
            <div className='panel-status'>未読</div>
            <div className='panel-cate'>カテゴリー</div>
            <div className='panel-title'>タイトルタイトルタイトルタイ<br/>トルタイトルタ...</div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab value="003" disabled>
          <div className='tab-panel'>
            {/* <div className='panel-status'>未読</div> */}
            <div className='panel-cate'>カテゴリー</div>
            <div className='panel-title'>タイトルタイトルタイトルタイ<br/>トルタイトルタ...</div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab value="004">
          <div className='tab-panel'>
            {/* <div className='panel-status'>未読</div> */}
            <div className='panel-cate'>カテゴリー</div>
            <div className='panel-title'>タイトルタイトルタイトルタイ<br/>トルタイトルタ...</div>
          </div>
        </Tabs.Tab>
        <div className="panel-link">更新履歴を見る</div>
      </Tabs.List>

      <Tabs.Panel value="001">
        <div className="tab-body">
          <div className="tab-body-heading">
            <div className="tab-body-cate">機能改善</div>
            <div className="tab-body-title">ドキュメントの移動ができるようになりました！</div>
          </div>
          <div className="tab-body-caruosel"><CarouselDemo /></div>
          <div className="tab-body-text">プロジェクトをまたぐドキュメントの移動ができるようになりました。</div>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="002">
        <div className="tab-body">
          <div className="tab-body-heading">タイトルタイトルタイトルタイトル</div>
          <div className="tab-body-caruosel"><CarouselDemo /></div>
          <div className="tab-body-text">テキストテキストテキストテキストテキストテキスト</div>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="003">
        <div className="tab-body">
          <div className="tab-body-heading">タイトルタイトルタイトルタイトル</div>
          <div className="tab-body-caruosel"><CarouselDemo /></div>
          <div className="tab-body-text">テキストテキストテキストテキストテキスト</div>
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="004">
        <div className="tab-body">
          <div className="tab-body-heading">タイトルタイトルタイトル</div>
          <div className="tab-body-caruosel"><CarouselDemo /></div>
          <div className="tab-body-text"><a href="">テキストテキストテキストテキストテキスト</a></div>
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}
