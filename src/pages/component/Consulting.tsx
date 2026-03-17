import { Button, List, Tag, Typography } from 'antd'
import { FunctionComponent, useEffect } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

export const Consulting: FunctionComponent = () => {
    const slides = [
        { id: '1', type: '개인 파산', name: '박성* 님' },
        { id: '2', type: '개인 회생', name: '유신* 님' },
        { id: '3', type: '개인 회생', name: '김태* 님' },
        { id: '4', type: '개인 파산', name: '이정* 님' },
        { id: '5', type: '개인 회생', name: '최윤* 님' },
    ]

    useEffect(() => {
    }, [])

    return (
        <div style={{ textAlign: 'center', backgroundColor: '#F6F1E8', paddingBottom: 64 }}>
            <style>{`
                    .swiper-pagination-bullet {
                        width: 12px;
                        height: 12px;
                        background: #D6CCC2;      /* 비활성 상태 색상 */
                        opacity: 1;
                    }
                    .swiper-pagination-bullet-active {
                        width: 12px;           /* 강조될 때 가로로 길게 (선택사항) */
                        border-radius: 6px;    /* 둥근 사각형 형태 */
                        background: #2A1F1B;   /* 활성 상태 강조 색상 (파란색 예시) */
                        transition: all 0.3s;  /* 부드러운 전환 효과 */
                    }
                `}</style>
            <Swiper
                direction={'vertical'}
                slidesPerView={3}         // 화면에 3개 노출
                spaceBetween={12}         // 아이템 간 간격
                loop={true}               // 무한 반복
                autoplay={{
                    delay: 2500,            // 2.5초마다 전환
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                style={{ height: 300, paddingInline: 16 }} // 컨테이너 높이 지정 필수
                // style={{ paddingBottom: '40px' }}
            >
                {slides.map((r, idx: number) => {
                    return (
                        <SwiperSlide key={idx}>
                            <div
                                style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '20px', // 이미지와 유사한 큰 라운드 값
                                    padding: '20px 24px',
                                    marginBottom: '12px',
                                    border: 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Tag
                                        style={{
                                            backgroundColor: '#2b2624', // 이미지의 짙은 고동색/블랙계열
                                            color: '#ffffff',
                                            borderRadius: '8px',
                                            padding: '4px 12px',
                                            fontSize: '16px',
                                            border: 'none',
                                            margin: 0,
                                        }}
                                    >
                                        {r.type}
                                    </Tag>
                                    <Typography.Text
                                        style={{
                                            fontSize: '22px',
                                            color: '#222',
                                        }}
                                    >
                                        {r.name}
                                    </Typography.Text>
                                </div>

                                <Button
                                    type="text"
                                    style={{
                                        backgroundColor: '#eee5da', // 베이지색 배경
                                        color: '#827465', // 브라운 계열 텍스트
                                        borderRadius: '12px',
                                        height: '44px',
                                        padding: '0 16px',
                                        fontSize: '18px',
                                        fontWeight: '500',
                                    }}
                                >
                                    상담 신청
                                </Button>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}