import React from 'react';

import styles from '../styles/Home.module.css';
import utilStyle from '../styles/utils.module.css';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const designImageList = [
  { src: 'self_introduction', alt: '自己紹介' },
  { src: 'cheers', alt: '退勤後の電車広告をテーマに' },
  { src: 'hsp', alt: 'コンプレックスをテーマに' },
  { src: 'leo', alt: '大好きな家族' },
  { src: 'thanks_hanok', alt: '好きだった飲食店に' },
];

const DesignSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    clidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <Slider {...settings}>
        {designImageList.map((image, index) => (
          <div key={index}>
            <Image
              src={`/images/design/${image.src}.png`}
              alt={image.alt}
              width={550}
              height={image.height || 500}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
function Works() {
  return (
    <section>
      <h2>制作物</h2>
      <div className={styles.grid}>
        <div>
          <h3 className={utilStyle.headingMd}>退勤アプリ</h3>
          <p
            style={{ margin: '0 0 5% 0', fontSize: '15px', width: '90%' }}
            className={utilStyle.boldText}
          >
            ボタン押下でLINEAPI経由で退勤の連絡が届く
          </p>
          <Image src="/images/leaving-work-img.jpg" width={350} height={600} alt='退勤アプリ' />
        </div>
        <div>
          <h3 className={utilStyle.headingMd}>デザイン制作</h3>
          <p
            style={{ margin: '0 0 5% 0', fontSize: '15px', width: '90%' }}
            className={utilStyle.boldText}
          >
            趣味で画像１枚のデザインを制作
          </p>
          <DesignSlider></DesignSlider>
        </div>
      </div>
    </section>
  );
}

export default Works;
